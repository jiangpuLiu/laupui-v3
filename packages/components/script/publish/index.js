import run from '../../../utils/tools/run.js';
import { pkgPath, packageJson } from '../utils/paths.js';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/${packageJson.packageName}`);
};
export default series(async () => publishComponent());
