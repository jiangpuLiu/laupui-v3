import * as components from './src/index.js';

export default {
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  }
};
