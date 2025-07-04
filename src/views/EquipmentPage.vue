<template>
  <div class="equipment-page">
    <AppHeader />

    <main class="equipment-main">
      <div class="page-header" data-aos="fade-down">
        <h1 class="page-title">Наше <span class="accent">оборудование</span></h1>
        <p class="page-subtitle">Профессиональные виброизмерительные приборы и датчики</p>
      </div>

      <div class="equipment-container">
        <section class="equipment-group" v-for="(group, idx) in groups" :key="group.id">
          <button 
            class="group-toggle" 
            @click="toggle(group.id)" 
            :class="{ active: openId === group.id }"
            :data-aos="'fade-up'" 
            :data-aos-delay="idx * 100"
          >
            <div class="toggle-content">
              <span class="arrow" :class="{ open: openId === group.id }">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="group-title" v-html="group.title"></span>
            </div>
            <div class="toggle-indicator"></div>
          </button>
          
          <transition name="expand">
            <div v-if="openId === group.id" class="group-items">
              <div 
                class="item-card" 
                v-for="(item, itemIdx) in group.items" 
                :key="item.name"
                :data-aos="'zoom-in'"
                :data-aos-delay="itemIdx * 100"
              >
                <div class="item-image-container">
                  <img :src="item.image" :alt="item.name" class="item-image" />
                  <div class="image-overlay">
                    <svg class="eye-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                </div>
                <div class="item-info">
                  <h3 class="item-name">{{ item.name }}</h3>
                  <p class="item-description">Профессиональное оборудование</p>
                </div>
              </div>
            </div>
          </transition>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AOS from 'aos'
import { onMounted } from 'vue'

interface Item { name: string; image: string }
interface Group { id: number; title: string; items: Item[] }

const placeholder = '/placeholder.svg'
const std = '/src/assets/products/STD-3300.png'

const groups: Group[] = [
  {
    id: 1,
    title: 'Портативные <span class="accent">виброизмерительные</span> приборы',
    items: [
      { name: 'STD-500', image: placeholder },
      { name: 'STD-3300', image: std },
      { name: 'STD-510', image: placeholder },
      { name: 'STD-600', image: placeholder },
      { name: 'STD-800', image: placeholder }
    ]
  },
  {
    id: 2,
    title: 'Датчики и <span class="accent">первичные</span> преобразователи',
    items: [
      { name: 'Датчик XYZ-100', image: placeholder },
      { name: 'Преобразователь ABC-200', image: placeholder },
      { name: 'Сенсор DEF-300', image: placeholder }
    ]
  },
  {
    id: 3,
    title: 'Системы <span class="accent">мониторинга</span> и диагностики',
    items: [
      { name: 'Monitor-Pro 1000', image: placeholder },
      { name: 'DiagSystem-X', image: placeholder }
    ]
  }
]

const openId = ref<number | null>(1)
const toggle = (id: number) => { openId.value = openId.value === id ? null : id }

onMounted(() => AOS.refresh())
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.equipment-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.equipment-main {
  flex: 1;
  padding: 2rem 1rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: $text-dark;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  .accent {
    color: $primary-color;
    background: linear-gradient(135deg, $primary-color, #e73c7e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.page-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
}

.equipment-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.equipment-group {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
}

.group-toggle {
  width: 100%;
  background: none;
  border: none;
  padding: 1.5rem 2rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba($primary-color, 0.05), rgba($primary-color, 0.02));
  }
  
  &.active {
    background: linear-gradient(135deg, rgba($primary-color, 0.1), rgba($primary-color, 0.05));
    
    .toggle-indicator {
      opacity: 1;
      transform: scaleX(1);
    }
  }
}

.toggle-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
}

.arrow {
  width: 24px;
  height: 24px;
  color: $primary-color;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  &.open {
    transform: rotate(90deg);
  }
}

.group-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: $text-dark;
  text-transform: none;
  line-height: 1.4;
  
  .accent {
    color: $primary-color;
    font-weight: 700;
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
  transition: all 0.3s ease;
  transform-origin: left;
}

.group-items {
  padding: 0 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.item-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    
    .image-overlay {
      opacity: 1;
    }
    
    .item-image {
      transform: scale(1.05);
    }
  }
}

.item-image-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  padding: 0.5rem;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($primary-color, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.eye-icon {
  width: 32px;
  height: 32px;
  color: white;
}

.item-info {
  text-align: center;
}

.item-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: $text-dark;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-description {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
  font-style: italic;
}

// Анимации
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}

// Адаптивность
@media (max-width: 768px) {
  .equipment-main {
    padding: 1.5rem 1rem 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .group-toggle {
    padding: 1.25rem 1.5rem;
  }
  
  .group-title {
    font-size: 1.1rem;
  }
  
  .group-items {
    padding: 0 1.5rem 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .item-card {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
  
  .page-title {
    font-size: 1.75rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .group-items {
    grid-template-columns: 1fr;
    padding: 0 1rem 1rem;
  }
  
  .group-toggle {
    padding: 1rem 1.25rem;
  }
  
  .toggle-content {
    gap: 0.75rem;
  }
  
  .group-title {
    font-size: 1rem;
  }
}
</style> 