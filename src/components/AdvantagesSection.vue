<!--
  Компонент AdvantagesSection - секция технологических преимуществ
  
  Использование:
  <AdvantagesSection 
    :model="'STD-500'" 
    :subtitle="'Почему выбирают этот анализатор'"
    :advantages="customAdvantages" 
  />
  
  Props:
  - model: String - модель прибора (по умолчанию 'STD-3300')
  - subtitle: String - подзаголовок секции
  - advantages: Array - массив преимуществ с иконками, заголовками, описаниями и статистикой
-->

<template>
  <div class="advantages-section">
    <div class="advantages-container">
      <div class="advantages-header">
        <div class="main-title-wrapper">
          <div class="title-accent">ТЕХНОЛОГИЧЕСКОЕ</div>
          <h2 class="main-title">ПРЕИМУЩЕСТВА <span class="title-highlight">{{ model }}</span></h2>
        </div>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>
      
      <div class="advantages-grid">
        <AnimatedCard v-for="(advantage, index) in advantages" :key="index" :delay="index * 0.15">
          <div class="advantage-card" 
               @mouseenter="activateAdvantage(index)" 
               @mouseleave="deactivateAdvantage(index)"
               :class="{ active: activeAdvantage === index }">
            <div class="advantage-icon">
              <div class="icon-wrapper">
                <component :is="advantage.icon" class="icon" />
                <div class="icon-glow"></div>
              </div>
            </div>
            <div class="advantage-content">
              <h3>{{ advantage.title }}</h3>
              <p>{{ advantage.description }}</p>
              <div class="advantage-stats">
                <div class="stat" v-for="stat in advantage.stats" :key="stat.label">
                  <span class="stat-value">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>
            <div class="advantage-animation">
              <div class="ripple-effect"></div>
              <div class="particle-burst"></div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AnimatedCard from '@/components/AnimatedCard.vue';
import PowerIcon from '@/components/icons/PowerIcon.vue';
import TargetIcon from '@/components/icons/TargetIcon.vue';
import RefreshIcon from '@/components/icons/RefreshIcon.vue';
import ShieldIcon from '@/components/icons/ShieldIcon.vue';
import BatteryIcon from '@/components/icons/BatteryIcon.vue';
import ControlIcon from '@/components/icons/ControlIcon.vue';

// Props
const props = defineProps({
  model: {
    type: String,
    default: 'STD-3300'
  },
  subtitle: {
    type: String,
    default: 'Почему профессионалы выбирают именно этот анализатор'
  },
  advantages: {
    type: Array,
    default: () => [
      {
        icon: PowerIcon,
        title: "Молниеносная скорость анализа",
        description: "Мгновенный спектральный анализ в реальном времени с высоким разрешением до 25 600 линий",
        stats: [
          { value: "0.1с", label: "Время анализа" },
          { value: "25.6К", label: "Линий спектра" }
        ]
      },
      {
        icon: TargetIcon,
        title: "Непревзойденная точность",
        description: "24-битные АЦП и динамический диапазон 109 дБ обеспечивают исключительную точность измерений",
        stats: [
          { value: "±1%", label: "Точность" },
          { value: "109 дБ", label: "Динамический диапазон" }
        ]
      },
      {
        icon: RefreshIcon,
        title: "Универсальная совместимость",
        description: "Работа с любыми типами датчиков и интеграция с существующими системами мониторинга",
        stats: [
          { value: "8+", label: "Типов датчиков" },
          { value: "100%", label: "Совместимость" }
        ]
      },
      {
        icon: ShieldIcon,
        title: "Промышленная надежность",
        description: "Взрывозащищенное исполнение IP54 для работы в самых сложных условиях",
        stats: [
          { value: "IP54", label: "Защита" },
          { value: "-20°+50°", label: "Температурный диапазон" }
        ]
      },
      {
        icon: BatteryIcon,
        title: "Экстремальная автономность",
        description: "До 18 часов непрерывной работы позволяет проводить длительные измерения",
        stats: [
          { value: "18ч", label: "Время работы" },
          { value: "700г", label: "Вес устройства" }
        ]
      },
      {
        icon: ControlIcon,
        title: "Интуитивное управление",
        description: "Простой и понятный интерфейс с цветным дисплеем и логичной навигацией",
        stats: [
          { value: "320x240", label: "Разрешение экрана" },
          { value: "3мин", label: "Время обучения" }
        ]
      }
    ]
  }
});

// Reactive state
const activeAdvantage = ref(-1);

// Methods
const activateAdvantage = (index) => {
  activeAdvantage.value = index;
};

const deactivateAdvantage = (index) => {
  activeAdvantage.value = -1;
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

/* ADVANTAGES SECTION */
.advantages-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
  position: relative;
  overflow: hidden;
}

.advantages-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(42, 208, 162, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 40%);
  animation: floatElements 25s ease-in-out infinite;
}

.gradient-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent 30%, rgba(42, 208, 162, 0.03) 50%, transparent 70%);
  animation: gradientShift 20s linear infinite;
}

.advantages-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  color: white;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.advantages-header {
  text-align: center;
  margin-bottom: 5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
}

.main-title-wrapper {
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.title-accent {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(42, 208, 162, 0.9);
  letter-spacing: 0.3em;
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

.main-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.02em;
  position: relative;
  display: block;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  
  .title-highlight {
    color: #2ad0a2;
    font-weight: 900;
    text-shadow: 0 0 30px rgba(42, 208, 162, 0.6);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #2ad0a2, transparent);
    border-radius: 2px;
  }
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: stretch;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 500px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}

.advantage-card {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(42, 208, 162, 0.25);
  border-radius: 1.2rem;
  padding: 2.5rem;
  position: relative;
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(42, 208, 162, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }
  
  &:hover,
  &.active {
    transform: translateY(-12px) scale(1.02);
    border-color: rgba(42, 208, 162, 0.6);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(42, 208, 162, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    &::before {
      opacity: 1;
    }
    
    .icon-glow {
      opacity: 1;
      transform: scale(1.3);
    }
    
    .ripple-effect {
      animation: ripple 2s ease-out infinite;
    }
    
    .particle-burst {
      animation: particleBurst 1.5s ease-out infinite;
    }
  }
}

.advantage-icon {
  text-align: center;
  margin-bottom: 2rem;
  
  .icon-wrapper {
    position: relative;
    display: inline-block;
    
    .icon {
      width: 60px;
      height: 60px;
      color: #2ad0a2;
      display: block;
      position: relative;
      z-index: 2;
    }
    
    .icon-glow {
      position: absolute;
      inset: -15px;
      background: radial-gradient(circle, rgba(42, 208, 162, 0.4) 0%, transparent 70%);
      border-radius: 50%;
      opacity: 0;
      transition: all 0.4s ease;
      z-index: 1;
    }
  }
}

.advantage-content {
  flex-grow: 1;
  text-align: center;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  p {
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }
}

.advantage-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: auto;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 80px;
  
  .stat-value {
    font-size: 1.6rem;
    font-weight: 900;
    color: #2ad0a2;
    margin-bottom: 0.3rem;
    text-shadow: 0 0 20px rgba(42, 208, 162, 0.5);
  }
  
  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
}

.advantage-animation {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.ripple-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border: 2px solid rgba(42, 208, 162, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.particle-burst {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: rgba(42, 208, 162, 0.9);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

/* Адаптивность для карточек преимуществ */
@media (max-width: 768px) {
  .advantage-card {
    height: 380px;
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .advantage-card {
    height: 360px;
    padding: 1.8rem;
  }
}

/* ANIMATIONS */
@keyframes floatElements {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes ripple {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0);
  }
  70% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(4);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(5);
  }
}

@keyframes particleBurst {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(20);
  }
}
</style> 