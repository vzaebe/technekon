<template>
  <section 
    class="animated-group" 
    :class="{ 'group-expanded': isOpen }"
  >
    <div 
      class="group-header"
      @click="toggle"
      :style="{ cursor: 'pointer' }"
      :class="{ 'header-active': isOpen }"
    >
      <slot name="header" :isOpen="isOpen" :toggle="toggle">
        <!-- Стандартный заголовок если не передан слот -->
        <div class="default-header">
          <span class="arrow" :class="{ open: isOpen }">▶</span>
          <h3>{{ title }}</h3>
        </div>
      </slot>
      <div class="toggle-indicator"></div>
    </div>
    
    <transition name="expand" mode="out-in">
      <div v-if="isOpen" class="group-content">
        <slot name="content" :items="items">
          <!-- Содержимое по умолчанию если не передан слот -->
          <div class="default-content">
            <p>Содержимое группы</p>
          </div>
        </slot>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  title?: string
  isExpanded?: boolean
  items?: any[]
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  isExpanded: false,
  items: () => []
})

const emit = defineEmits<{
  toggle: [isOpen: boolean]
}>()

const isOpen = ref(props.isExpanded)

const toggle = () => {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}

// Синхронизация с внешним состоянием
watch(() => props.isExpanded, (newValue) => {
  isOpen.value = newValue
})
</script>

<script lang="ts">
export default {
  name: 'AnimatedGroup'
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.animated-group {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba($primary-color, 0.1), 
      transparent
    );
    transition: left 0.6s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: rgba($primary-color, 0.2);
    
    &::before {
      left: 100%;
    }
    
    .group-header {
      transform: translateY(-1px);
    }
  }
  
  &.group-expanded {
    box-shadow: 0 8px 24px rgba($primary-color, 0.15);
    border-color: rgba($primary-color, 0.3);
    
    .group-header {
      background: linear-gradient(135deg, 
        rgba($primary-color, 0.08), 
        rgba($primary-color, 0.04)
      );
    }
    
    .toggle-indicator {
      opacity: 1;
      transform: scaleX(1);
      
      &::after {
        opacity: 0.6;
      }
    }
  }
}

.group-header {
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 1.5rem 2rem;
  
  &:hover {
    background: linear-gradient(135deg, rgba($primary-color, 0.05), rgba($primary-color, 0.02));
  }
  
  // Стили для поворота стрелочки в SectionHeader
  &.header-active {
    :deep(.section-header__icon svg) {
      transform: rotate(90deg);
    }
  }
  
  :deep(.section-header__icon svg) {
    transition: transform 0.3s ease;
  }
}

.default-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .arrow {
    color: $primary-color;
    font-size: 1rem;
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: inline-block;
    
    &.open {
      transform: rotate(90deg);
    }
  }
  
  h3 {
    margin: 0;
    color: $text-dark;
    font-size: 1.2rem;
  }
}

.toggle-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(135deg, $primary-color, #e73c7e);
  opacity: 0;
  transform: scaleX(0);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: left;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, $primary-color, #e73c7e);
    opacity: 0;
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.8;
    transform: scaleY(1.5);
  }
}

.group-content {
  padding: 1.5rem 2rem 2.5rem;
}

.default-content {
  text-align: center;
  color: $text-gray;
}

// Анимации раскрытия
.expand-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
}

.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  overflow: hidden;
}

.expand-enter-from {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  transform: translateY(-20px);
}

.expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  transform: translateY(-10px);
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
  transform: translateY(0);
}
</style> 