<template>
  <div 
    class="animated-card"
    :style="{ 
      animationDelay: `${delay}s`,
      transitionDelay: `${delay * 0.5}s`
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0
})
</script>

<script lang="ts">
export default {
  name: 'AnimatedCard'
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.animated-card {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba($primary-color, 0) 0%, 
      rgba($primary-color, 0.05) 50%, 
      rgba($primary-color, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
    pointer-events: none;
    border-radius: inherit;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    
    &::before {
      opacity: 1;
    }
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  60% {
    opacity: 0.8;
    transform: translateY(-5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style> 