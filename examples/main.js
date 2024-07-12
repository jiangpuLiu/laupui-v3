import { createApp } from 'vue';
import App from './app.vue';
import LaupUi from 'laupui-v3';

const app = createApp(App);
app.use(LaupUi);

app.mount('#app');
