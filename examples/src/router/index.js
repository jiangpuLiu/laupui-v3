import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import DragDialog from '../views/DragDialog.vue';
import AllIcons from '../views/AllIcons.vue';
import NnVxeDemo from '../views/NnVxeDemo.vue';

export const routeComponents = [
  {
    path: 'dialog',
    name: 'dialog',
    component: DragDialog,
    meta: { title: '拖曳弹窗' }, // 可选的 meta 信息
  },
  {
    path: 'icons',
    name: 'icon',
    component: AllIcons,
    meta: { title: '图标库' },
  },
  {
    path: 'table',
    name: 'table',
    component: NnVxeDemo,
    meta: { title: '表格' },
  },
]



const routes  = [
  {
    path: '/',
    component: Layout,
    children: routeComponents
  },
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
