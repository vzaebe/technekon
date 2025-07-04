<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__content">
        <h2 class="benefits__title">
          <span class="benefits__title-prefix">ЧТО ТАКОЕ </span>
          <span class="benefits__title-highlight">ВИБРОДИАГНОСТИКА</span>
          <span class="benefits__title-suffix">?</span>
        </h2>

        <div class="benefits__grid">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="benefits__card"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="benefits__card-icon">
              <CheckIcon className="benefits__check-icon" />
              <div class="benefits__icon-glow"></div>
            </div>
            <div class="benefits__card-content">
              <div class="benefits__card-text">{{ benefit.text }}</div>
              <div class="benefits__card-subtitle">{{ benefit.subtitle }}</div>
            </div>
            <div class="benefits__card-decoration"></div>
          </div>
        </div>

        <div class="benefits__stats">
          <div class="benefits__stat" v-for="(stat, index) in stats" :key="index">
            <div class="benefits__stat-number">{{ stat.number }}</div>
            <div class="benefits__stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CheckIcon from "@/components/icons/CheckIcon.vue";

const benefits = [
  {
    text: "СНИЖЕНИЕ ЗАТРАТ НА ОБСЛУЖИВАНИЕ",
    subtitle: "Экономия до 75% расходов на техническое обслуживание"
  },
  {
    text: "СНИЖЕНИЕ КОЛИЧЕСТВА ОБСЛУЖИВАНИЙ",
    subtitle: "Сокращение плановых ремонтов на 50% благодаря предиктивной диагностике"
  },
  {
    text: "СНИЖЕНИЕ ЧИСЛА ОТКАЗОВ",
    subtitle: "Уменьшение внеплановых остановок на 70% за первый год"
  }
];

const stats = [
  { number: "75%", label: "экономия затрат" },
  { number: "50%", label: "меньше обслуживаний" },
  { number: "70%", label: "снижение отказов" }
];
</script>
