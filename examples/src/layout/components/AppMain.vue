<template>
  <section>
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script setup>
defineOptions({name: 'AppMain' })
import { computed } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

const key = computed(() => router.path)
</script>

