import delPath from '../utils/delpath.js';
import { series, parallel, src, dest } from 'gulp';
import { componentPath, pkgPath, packageJson } from '../utils/paths.js';
import run from '../../../utils/tools/run.js';
import autoprefixer from 'gulp-autoprefixer';
import glupSass from 'gulp-sass';
import sassLang from 'sass';

const sass = glupSass(sassLang);
export const removeDist = () => {
  return delPath(`${pkgPath}/laupui-v3`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/${packageJson.packageName}/lib/src`))
    .pipe(dest(`${pkgPath}/${packageJson.packageName}/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
