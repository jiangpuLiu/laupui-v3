<template>
  <div class="test-wrapper">
    <el-button
      type="primary"
      @click="openDialog"
    >
      打开弹窗
    </el-button>
    <nn-button type="primary">夫卡是了</nn-button>

    <DraggableDialog
      v-model:visible="visible"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const openDialog = () => {
  visible.value = true;
};
</script>

<style scoped lang="scss">
.test-wrapper {
  width: 100%;
  height: 90vh;
  overflow: hidden;
}
</style>
