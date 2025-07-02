<template>
  <div class="product-page">
    <AppHeader />
    <main class="main-content">
      <div class="hero-section">
        <div class="hero-background-overlay"></div>
        <div class="hero-content">
          <div class="hero-text-block">
            <div class="hero-title">
              <h1>
                <span class="title-line">ВИБРОАНАЛИЗАТОР</span>
                <span class="title-model">STD-3300</span>
                <span class="title-line">ОТ ТЕХНЕКОНА</span>
              </h1>
              <div class="hero-subtitle">
                Профессиональное оборудование для диагностики промышленных систем
              </div>
            </div>
          </div>
          <div class="hero-image-block">
            <div class="image-container">
              <img src="@/assets/products/STD-3300.png" alt="Виброанализатор STD-3300" />
              <div class="image-glow"></div>
            </div>
          </div>
        </div>
        <div class="hero-navigation">
          <div class="nav-container">
            <button class="nav-tab active" data-tab="description">
              <span class="tab-text">ОПИСАНИЕ</span>
            </button>
            <button class="nav-tab" data-tab="specs">
              <span class="tab-text">ХАРАКТЕРИСТИКИ</span>
            </button>
            <button class="nav-tab" data-tab="docs">
              <span class="tab-text">ДОКУМЕНТЫ</span>
            </button>
          </div>
        </div>
      </div>
      
      <div class="intro-section">
        <div class="intro-container">
          <div class="intro-content">
            <div class="intro-badge">Профессиональное оборудование</div>
            <p class="intro-text">
              МОЩНЕЙШИЙ <span class="highlight-bold">2-КАНАЛЬНЫЙ ВИБРОАНАЛИЗАТОР</span>, ПОЗВОЛЯЮЩИЙ СОБИРАТЬ И АНАЛИЗИРОВАТЬ ДАННЫЕ ПО ДВУМ КАНАЛАМ <span class="highlight">СИНХРОННО</span>, МАКСИМАЛЬНЫЕ ДИАГНОСТИЧЕСКИЕ ВОЗМОЖНОСТИ И ФУНКЦИЯ БАЛАНСИРОВКИ ДЕЛАЮТ ЕГО НЕЗАМЕНИМЫМ ИНСТРУМЕНТОМ ДЛЯ ОПРЕДЕЛЕНИЯ НЕИСПРАВНОСТЕЙ <span class="highlight-underline">ПРОМЫШЛЕННОГО ОБОРУДОВАНИЯ</span>.
            </p>
          </div>
        </div>
      </div>

      <div class="features-section">
        <div class="features-background"></div>
        <div class="features-container">
          <div class="features-header">
            <h2>Возможности и преимущества</h2>
            <div class="features-subtitle">Передовые технологии для профессиональной диагностики</div>
          </div>
          <div class="features-grid">
            <div class="feature-card" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">⚡</div>
              <div class="feature-content">
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="documents-section">
        <div class="documents-container">
          <div class="section-header">
            <h2>Техническая документация</h2>
            <div class="section-subtitle">Полный комплект документов для работы с оборудованием</div>
          </div>
          <div class="documents-grid">
            <div class="document-card">
              <div class="document-icon">📄</div>
              <div class="document-info">
                <h3>Инструкция по эксплуатации</h3>
                <p>Подробное руководство пользователя</p>
                <span class="document-format">PDF, 2.4 МБ</span>
              </div>
              <button class="download-btn">Скачать</button>
            </div>
            <div class="document-card">
              <div class="document-icon">🔧</div>
              <div class="document-info">
                <h3>Техническое описание</h3>
                <p>Спецификации и характеристики</p>
                <span class="document-format">PDF, 1.8 МБ</span>
              </div>
              <button class="download-btn">Скачать</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="related-products-section">
        <div class="related-background"></div>
        <div class="related-container">
          <div class="section-header">
            <h2>Сопутствующие товары</h2>
            <div class="section-subtitle">Дополните свой комплект профессионального оборудования</div>
          </div>
          <div class="products-showcase">
            <ProductCard v-for="product in relatedProducts" :key="product.id" :title="product.title" :image-url="product.imageUrl" />
          </div>
        </div>
      </div>

    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import ProductCard from "@/components/ProductCard.vue";

const relatedProducts = [
  { id: 1, title: "ВИБРОАНАЛИЗАТОР STD-500", imageUrl: "/placeholder.svg" },
  { id: 2, title: "ВИБРОАНАЛИЗАТОР STD-500", imageUrl: "/placeholder.svg" },
  { id: 3, title: "ВИБРОАНАЛИЗАТОР STD-500", imageUrl: "/placeholder.svg" },
  { id: 4, title: "ВИБРОАНАЛИЗАТОР STD-500", imageUrl: "/placeholder.svg" },
];

const features = [
  {
    title: "Автоматическая диагностика",
    description: "Определение типов и параметров подключаемых датчиков"
  },
  {
    title: "Многоканальный анализ", 
    description: "Измерение общего уровня вибрации по нескольким каналам"
  },
  {
    title: "Запись сигналов",
    description: "Формы, спектра, огибающей, фильтры, орбиты и другие функции"
  },
  {
    title: "Длительный мониторинг",
    description: "Сбор длинного сигнала и последующий анализ"
  },
  {
    title: "Беспроводная связь",
    description: "Радиоканал Wi-Fi, RP-ID для удаленного доступа"
  },
  {
    title: "Реальное время",
    description: "Анализ данных в режиме реального времени"
  },
  {
    title: "Балансировка",
    description: "Встроенная функция балансировки оборудования"
  },
  {
    title: "Обновления ПО",
    description: "Возможность самостоятельного обновления программного обеспечения"
  }
];
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.product-page {
  background-color: #fff;
}

.main-content {
  flex-grow: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  color: $text-light;
  padding: 0;
  position: relative;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hero-background-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 70% 20%, rgba(42, 208, 162, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(0, 255, 179, 0.08) 0%, transparent 50%);
  z-index: 1;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 3rem;
  flex: 1;
  gap: 4rem;
}

.hero-text-block {
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title h1 {
  margin: 0;
  font-family: 'Arial Black', 'Helvetica', sans-serif;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  
  .title-line {
    display: block;
    font-size: 3.2rem;
    color: $text-light;
    margin-bottom: 0.2rem;
    opacity: 0;
    transform: translateX(-30px);
    animation: slideInFade 0.8s ease-out forwards;
    
    &:nth-child(1) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.6s; }
  }
  
  .title-model {
    display: block;
    font-size: 4.5rem;
    background: linear-gradient(135deg, $primary-accent 0%, $primary-color 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(42, 208, 162, 0.5);
    margin: 0.3rem 0;
    opacity: 0;
    transform: scale(0.8);
    animation: scaleInGlow 1s ease-out 0.4s forwards;
  }
}

.hero-subtitle {
  margin-top: 1.5rem;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.8s ease-out 0.8s forwards;
}

.hero-image-block {
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image-container {
  position: relative;
  max-width: 400px;
  width: 100%;
  opacity: 0;
  transform: translateX(50px) scale(0.9);
  animation: imageSlideIn 1.2s ease-out 0.6s forwards;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.4),
      0 8px 25px rgba(42, 208, 162, 0.15);
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 20px rgba(42, 208, 162, 0.3));
    
    &:hover {
      transform: translateY(-5px) scale(1.02);
    }
  }
}

.image-glow {
  position: absolute;
  left: -20px;
  top: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(circle, rgba(42, 208, 162, 0.2) 0%, transparent 70%);
  border-radius: 2rem;
  z-index: -1;
  animation: glowPulse 3s ease-in-out infinite;
}

.hero-navigation {
  position: relative;
  z-index: 2;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%);
  border-top: 1px solid rgba(42, 208, 162, 0.3);
  backdrop-filter: blur(10px);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  gap: 0;
}

.nav-tab {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  padding: 1.2rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  .tab-icon {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: $text-light;
    background: rgba(42, 208, 162, 0.1);
    
    .tab-icon {
      transform: scale(1.1);
    }
  }
  
  &.active {
    color: $primary-accent;
    background: rgba(42, 208, 162, 0.15);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent 0%, $primary-accent 50%, transparent 100%);
    }
  }
}

@keyframes slideInFade {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleInGlow {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes imageSlideIn {
  from {
    opacity: 0;
    transform: translateX(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.intro-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.intro-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.intro-content {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.intro-badge {
  display: inline-block;
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(42, 208, 162, 0.3);
  opacity: 0;
  transform: translateY(-20px);
  animation: slideUpFade 0.8s ease-out 0.3s forwards;
}

.intro-text {
  font-size: 1.4rem;
  line-height: 1.7;
  color: $text-secondary;
  font-weight: 400;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUpFade 1s ease-out 0.6s forwards;
  
  .highlight {
    color: $primary-color;
    font-weight: 600;
  }
  
  .highlight-bold {
    color: $primary-accent;
    font-weight: 700;
    background: linear-gradient(135deg, $primary-accent 0%, $primary-color 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .highlight-underline {
    color: $primary-color;
    border-bottom: 2px solid $primary-color;
    font-weight: 600;
  }
}

.features-section {
  background: #1a1a1a;
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.features-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(42, 208, 162, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(0, 255, 179, 0.06) 0%, transparent 40%);
  z-index: 1;
}

.features-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, $text-light 0%, rgba(255,255,255,0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0;
    transform: translateY(-30px);
    animation: slideUpFade 0.8s ease-out 0.2s forwards;
  }
}

.features-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.8s ease-out 0.4s forwards;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(42, 208, 162, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(40px);
  animation: slideUpFade 0.8s ease-out forwards;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
  &:nth-child(7) { animation-delay: 0.7s; }
  &:nth-child(8) { animation-delay: 0.8s; }
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(42, 208, 162, 0.4);
    background: rgba(42, 208, 162, 0.1);
    box-shadow: 0 10px 30px rgba(42, 208, 162, 0.2);
  }
}

.feature-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-content {
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    color: $text-light;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
  }
}

.documents-section {
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 6rem 0;
  position: relative;
}

.documents-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: $text-secondary;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(-30px);
    animation: slideUpFade 0.8s ease-out 0.2s forwards;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: $text-muted;
    font-weight: 300;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUpFade 0.8s ease-out 0.4s forwards;
  }
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.document-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(42, 208, 162, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUpFade 0.8s ease-out forwards;
  
  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(42, 208, 162, 0.15);
    border-color: rgba(42, 208, 162, 0.3);
  }
}

.document-icon {
  font-size: 2.5rem;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.document-info {
  flex: 1;
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: $text-secondary;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: $text-muted;
    margin-bottom: 0.5rem;
  }
  
  .document-format {
    font-size: 0.9rem;
    color: $primary-color;
    font-weight: 500;
  }
}

.download-btn {
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(42, 208, 162, 0.4);
  }
}

.related-products-section {
  background: #1a1a1a;
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  .section-header {
    h2 {
      color: $text-light;
    }
    
    .section-subtitle {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

.related-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(42, 208, 162, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(0, 255, 179, 0.06) 0%, transparent 50%);
  z-index: 1;
}

.related-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
}

.products-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

</style>