<template>
  <span class="docs-count">
    {{ count }} {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ count: number, label?: string }>()
const label = computed(() => props.label || (props.count === 1 ? 'позиция' : 'позиций'))
</script>

<script lang="ts">
export default {
  name: 'DocsCount'
}
</script>

<style scoped lang="scss">
.docs-count {
  font-size: 0.9rem;
  color: #6c757d;
  background: #f1f3f4;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-weight: 500;
}
</style> 