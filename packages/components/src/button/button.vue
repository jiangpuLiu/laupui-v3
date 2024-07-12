<template>
  <button class="ea-button" :class="buttonStyle"><slot /></button>
</template>

<script setup>
import './style/index.scss';
import { computed } from 'vue';

defineOptions({ name: 'NnButton' });

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});

const buttonStyle = computed(() => {
  return {
    'ea-button': true,
    [`ea-button--${props.type}`]: props.type
  };
});
</script>

<style></style>
