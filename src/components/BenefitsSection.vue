<template>
  <section class="benefits">
    <div class="container">
      <h2 class="benefits__title">
        <span class="benefits__title-prefix">ЧТО ТАКОЕ </span>
        <span class="benefits__title-highlight">ВИБРОДИАГНОСТИКА</span>
        <span class="benefits__title-suffix">?</span>
      </h2>

      <div class="benefits__list">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="benefits__item"
        >
          <CheckIcon />
          <div class="benefits__item-text">{{ benefit }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CheckIcon from "@/components/icons/CheckIcon.vue";

const benefits = [
  "СНИЖЕНИЕ ЗАТРАТ НА ОБСЛУЖИВАНИЕ НА 75%",
  "СНИЖЕНИЕ КОЛИЧЕСТВА ОБСЛУЖИВАНИЙ НА 50%",
  "СНИЖЕНИЕ ЧИСЛА ОТКАЗОВ НА 70% ЗА ПЕРВЫЙ ГОД РАБОТЫ",
];
</script>
