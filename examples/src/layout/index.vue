
<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <AppMain class="app-main" />
  </div>
</template>

<script setup>
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Slidebar.vue";

defineOptions({name: 'Layout'})
</script>

<style lang="scss" scoped>
.app-wrapper {
  .sidebar-container {
    position: fixed;
  }

  .app-main {
    padding: 20px;
    margin-left: 150px;
  }
}
</style>
