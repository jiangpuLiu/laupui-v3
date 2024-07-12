import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import LaupUi from 'laupui-v3';
import router from "./router/index.js";

const app = createApp(App);
app.use(LaupUi);
app.use(ElementPlus)
app.use(router)

app.mount('#app');
