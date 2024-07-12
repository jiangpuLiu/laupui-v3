<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="1"
        class="el-menu-vertical"
        @open="handleOpen"
      >
        <el-menu-item
          v-for="item in routeComponents"
          :key="item.path"
          @click.native="handleOpen(item)"
        >
          <span slot="title">{{ item.meta.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
defineOptions(
  {name: 'Sidebar'}
)
import { routeComponents } from '../../router/index.js';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleOpen = (item) => {
  router.push({ path: item.path });
};

const isCollapse = true; // 如果需要响应式的折叠状态，可以使用 ref 或 reactive
</script>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100vh;
}
</style>
