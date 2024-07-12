import run from '../tools/run.js';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `.`);
};

export default series(async () => publishComponent());
