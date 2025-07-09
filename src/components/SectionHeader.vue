<template>
  <div class="section-header">
    <span v-if="icon" class="section-header__icon">
      <slot name="icon">
        <svg v-if="icon === 'arrow'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </slot>
    </span>
    <span class="section-header__title">
      <slot name="title">Заголовок</slot>
    </span>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ icon?: string }>()
</script>

<script lang="ts">
export default {
  name: 'SectionHeader'
}
</script>

<style scoped lang="scss">
.section-header {
  width: 100%;
  background: #fff;
  border: none;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.section-header__icon {
  display: flex;
  align-items: center;
  color: var(--primary-color, #2ad0a2);
}
.section-header__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark, #222);
  line-height: 1.4;
}
</style> 