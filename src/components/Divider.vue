<template>
  <div class="divider"></div>
</template>

<script setup lang="ts">
// Divider component — purely presentational
</script>

<style scoped lang="scss">
.divider {
  width: 35%;
  height: 2px;
  background: #bfc8d0;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 1px 12px 0 rgba(191, 200, 208, 0.10);

  @media (min-width: 768px) {
    margin: 2.5rem auto;
  }
  @media (min-width: 1024px) {
    margin: 3rem auto;
  }
}
</style> 