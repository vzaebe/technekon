<template>
  <div :class="['divider', spacingClass]"></div>

</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  spacing?: 'normal' | 'tight'
}

const props = withDefaults(defineProps<Props>(), { spacing: 'normal' })
const spacingClass = computed(() => (props.spacing === 'tight' ? 'divider--tight' : ''))
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

.divider--tight {
  margin: 0.75rem auto; /* ~в 3 раза меньше базового 2rem */

  @media (min-width: 768px) {
    margin: 1rem auto;
  }
  @media (min-width: 1024px) {
    margin: 1rem auto;
  }
}
</style> 