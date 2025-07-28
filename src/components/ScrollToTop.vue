<template>
  <button 
    v-show="isVisible" 
    @click="scrollToTop"
    class="scroll-to-top"
    :class="{ 'scroll-to-top--visible': isVisible }"
    aria-label="Прокрутить наверх"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: $shadow-primary;
  transition: all $transition-normal $ease-out;
  z-index: 1000;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  
  &--visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: $shadow-primary-lg, $glow-primary;
  }
  
  &:active {
    transform: translateY(-2px) scale(1.05);
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform $transition-normal $ease-out;
  }
  
  &:hover svg {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style> 