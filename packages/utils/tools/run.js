import { spawn } from 'child_process';
import { resolve as resolvePath } from 'path';

/**
 * 执行指定命令并在完成时返回一个 Promise。
 *
 * @param {string} command - 要执行的命令。
 * @param {string} path - 执行命令的路径。
 * @returns {Promise<number>} - 返回一个 Promise，解析为命令的退出码。
 */
export default async function runCommand(command, path) {
  const [cmd, ...args] = command.split(' ');
  const cwd = resolvePath(path);

  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd, // 执行命令的路径
      stdio: 'inherit', // 输出共享给父进程
      shell: true // 在 Windows 下需要开启 shell 支持
    });

    app.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`));
      } else {
        resolve(code);
      }
    });

    app.on('error', (err) => {
      reject(err);
    });
  });
}
