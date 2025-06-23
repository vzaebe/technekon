<template>
  <section class="partners">
    <div class="container partners__container">
      <h2 class="partners__title">НАШИ ПАРТНЁРЫ</h2>

      <div class="partners__grid">
        <div v-for="index in 6" :key="index" class="partners__logo">LOGO</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент не требует дополнительной логики пока что
</script>
