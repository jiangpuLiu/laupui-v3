import run from '../../tools/run.js';
import { series } from 'gulp';

export const buildComponent = async () => {
  run('pnpm run build', '.');
};

export default series(async () => buildComponent());
