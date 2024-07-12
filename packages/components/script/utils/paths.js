import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import packageJson from '../../package.json' assert { type: 'json' };

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

// 组件库根目录
export const componentPath = resolve(__dirname, '../../');

// pkg根目录
export const pkgPath = resolve(__dirname, '../../../');

// 导出 packageJson
export { packageJson };
