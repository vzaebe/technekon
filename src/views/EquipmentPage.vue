<template>
  <div class="equipment-page">
    <AppHeader />

    <!-- Используем новый компонент PageBanner -->
    <PageBanner 
      :title-lines="['ПРОДУКЦИЯ', 'ТЕХНЕКОНА']"
      subtitle="Профессиональное оборудование для диагностики промышленных систем"
      theme="equipment"
    />

    <main class="equipment-main">
      <div class="container-header-width">
        <AnimatedGroup 
          v-for="group in groups" 
          :key="group.id"
          :is-expanded="openId === group.id"
          @toggle="makeToggleHandler(group.id)"
        >
          <template #header="{ isOpen }">
            <SectionHeader :icon="'arrow'" :class="{ active: isOpen, 'arrow-rotated': isOpen }">
              <template #title>
                <span class="group-title" v-html="group.title"></span>
              </template>
              <DocsCount :count="group.items.length" label="позиций" />
            </SectionHeader>
          </template>
          
          <template #content>
            <div class="group-items">
              <AnimatedCard
                v-for="(item, itemIdx) in group.items" 
                :key="item.name"
                :delay="itemIdx * 0.1"
              >
                <router-link 
                  :to="{ name: 'ProductDetail', params: { productId: item.slug } }"
                  class="item-link"
                >
                  <div class="item-card">
                    <div class="item-image-container">
                      <img :src="item.image" :alt="item.name" class="item-image" />
                      <div class="product-card__overlay">
                        <span class="product-card__view-details">Подробнее</span>
                      </div>
                    </div>
                    <div class="item-info">
                      <h3 class="item-name">{{ item.name }}</h3>
                      <p class="item-description">Профессиональное оборудование</p>
                    </div>
                  </div>
                </router-link>
              </AnimatedCard>
            </div>
          </template>
        </AnimatedGroup>
      </div>
    </main>

    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import PageBanner from '@/components/PageBanner.vue'
import AOS from 'aos'
import { onMounted } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'
import DocsCount from '@/components/DocsCount.vue'
import AnimatedGroup from '@/components/AnimatedGroup.vue'
import AnimatedCard from '@/components/AnimatedCard.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'


interface Item { name: string; image: string; slug: string }
interface Group { id: number; title: string; items: Item[] }

const placeholder = '/placeholder.svg'
const std = new URL('@/assets/products/STD-3300.png', import.meta.url).href

const groups: Group[] = [
  {
    id: 1,
    title: 'Портативные <span class="accent">виброизмерительные</span> приборы',
    items: [
      { name: 'STD-500', image: placeholder, slug: 'std-500' },
      { name: 'STD-3300', image: std, slug: 'std-3300' },
      { name: 'STD-510', image: placeholder, slug: 'std-510' },
      { name: 'STD-600', image: placeholder, slug: 'std-600' },
      { name: 'STD-800', image: placeholder, slug: 'std-800' }
    ]
  },
  {
    id: 2,
    title: 'Датчики и <span class="accent">первичные</span> преобразователи',
    items: [
      { name: 'Датчик XYZ-100', image: placeholder, slug: 'xyz-100' },
      { name: 'Преобразователь ABC-200', image: placeholder, slug: 'abc-200' },
      { name: 'Сенсор DEF-300', image: placeholder, slug: 'def-300' }
    ]
  },
  {
    id: 3,
    title: 'Системы <span class="accent">мониторинга</span> и диагностики',
    items: [
      { name: 'Monitor-Pro 1000', image: placeholder, slug: 'monitor-pro-1000' },
      { name: 'DiagSystem-X', image: placeholder, slug: 'diagsystem-x' }
    ]
  }
]

const openId = ref<number | null>(1)

const handleGroupToggle = (id: number, isOpen: boolean) => {
  openId.value = isOpen ? id : null
}

// Создаем специфичные функции для каждой группы
const makeToggleHandler = (id: number) => (isOpen: boolean) => handleGroupToggle(id, isOpen)

onMounted(() => AOS.refresh())
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.equipment-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
}

.equipment-main {
  flex: 1;
  padding: 3rem 2rem 4rem;
  width: 60%;
  margin: 0 auto;
}



.equipment-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 0.5rem;
}

// Убираем старые стили equipment-group, так как теперь используем AnimatedGroup

// Убираем старые стили group-toggle, arrow и toggle-content

.group-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: $text-dark;
  text-transform: none;
  line-height: 1.4;
  .accent {
    color: $primary-color;
    font-weight: 700;
  }
}

// Убираем старые стили toggle-indicator и pulse анимацию

.group-items {
  padding: 2rem 3rem 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(314px, max-content));
  gap: 2.5rem;
  justify-content: center;
  align-items: stretch;
}

.item-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

.item-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  padding: 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 314px;
  position: relative;
  z-index: 2; // Поверх анимированного фона

  &:hover {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15), 
                0 4px 16px rgba($primary-color, 0.1);
    border-color: rgba($primary-color, 0.2);

    .product-card__overlay {
      opacity: 1;
      transform: scale(1);
    }

    .item-image {
      transform: scale(1.1) rotate(2deg);
    }

    .item-info {
      transform: translateY(-2px);
    }
  }
}

.item-image-container {
  position: relative;
  width: 314px;
  height: 240px;
  background: #ececec;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 0;
  filter: brightness(1) saturate(1);
  
  .item-card:hover & {
    filter: brightness(1.1) saturate(1.2);
  }
}

.product-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
                            rgba($primary-color, 0.9) 0%, 
                            rgba($secondary-color, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(1.1);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(2px);
  z-index: 2;
}

.product-card__view-details {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.item-info {
  text-align: center;
  padding: 1.25rem 1rem;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  z-index: 2;
}

.item-description {
  font-size: 1rem;
  font-weight: 700;
  color: $text-dark;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.item-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: $primary-color;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

// Стили для поворота стрелочки в SectionHeader
:deep(.arrow-rotated .section-header__icon svg) {
  transform: rotate(90deg);
}

:deep(.section-header__icon svg) {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

// Адаптивность
@media (max-width: 1200px) {
  .equipment-main {
    max-width: 100vw;
    padding: 2rem 1rem 3rem;
  }
  .group-items {
    padding: 1.5rem 1.5rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
    gap: 1.5rem;
  }
  .page-title {
    font-size: 2.4rem;
  }
  .page-subtitle {
    font-size: 1.2rem;
  }
  .group-title {
    font-size: 1.2rem;
  }
  .item-name {
    font-size: 1.1rem;
  }
  .item-description {
    font-size: 0.95rem;
  }
  .item-card {
    min-height: 280px;
    width: 250px;
  }
  .item-image-container {
    width: 250px;
    height: 160px;
  }
}

@media (max-width: 768px) {
  .equipment-main {
    padding: 1.5rem 0.5rem 2rem;
  }
  .group-items {
    padding: 1rem 0.5rem 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, max-content));
    gap: 1rem;
  }
  .page-title {
    font-size: 1.7rem;
  }
  .page-subtitle {
    font-size: 1rem;
  }
  .group-title {
    font-size: 1rem;
  }
  .item-name {
    font-size: 1rem;
  }
  .item-description {
    font-size: 0.9rem;
  }
  .item-card {
    min-height: 240px;
    width: 220px;
  }
  .item-image-container {
    width: 220px;
    height: 140px;
  }
}

@media (max-width: 480px) {
  .group-items {
    grid-template-columns: 1fr;
    padding: 0 0.25rem 1rem;
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