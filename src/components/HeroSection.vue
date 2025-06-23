<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <div class="container hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          ТЕХНЕКОН ПРИНЯЛ УЧАСТИЕ В КОНФЕРЕНЦИИ ПО ВИБРОДИАГНОСТИКЕ
        </h1>
        <div class="hero__date">31.01.2025</div>
        <button class="hero__cta" @click="handleLearnMore">Подробнее...</button>
      </div>

      <!-- Slider Dots -->
      <div class="hero__dots">
        <button
          v-for="(_, index) in 3"
          :key="index"
          :class="['hero__dot', { 'hero__dot--active': currentSlide === index }]"
          @click="setCurrentSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentSlide = ref(1);

const setCurrentSlide = (index: number) => {
  currentSlide.value = index;
};

const handleLearnMore = () => {
  console.log("Learn more clicked");
  // Здесь можно добавить логику для перехода к подробной информации
};
</script>
