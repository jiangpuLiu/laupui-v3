import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  build: {
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue和.less文件
      external: ['vue', /\.scss/, '@laupui-v3/utils'],
      input: ['index.js'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../laupui-v3/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../laupui-v3/lib'
        }
      ]
    },
    lib: {
      entry: './index.js'
    }
  },
  plugins: [
    vue()
  ]
});
