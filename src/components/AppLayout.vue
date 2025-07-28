<template>
  <div class="app-layout">
    <AppHeader />
    <slot />
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
</script>

<style lang="scss" scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style> 