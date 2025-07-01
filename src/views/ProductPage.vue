<template>
  <div class="product-page">
    <AppHeader />
    <main class="main-content">
      <div class="hero-section">
        <div class="container hero-container">
          <div class="hero-text">
            <h1>ВИБРОАНАЛИЗАТОР<br><span class="model">STD-3300</span><br>ОТ ТЕХНЕКОНА</h1>
          </div>
          <div class="hero-image">
            <img src="@/assets/products/STD-3300.png" alt="Виброанализатор STD-3300">
          </div>
        </div>
         <div class="hero-tabs-container">
            <div class="hero-tabs">
              <button class="tab-button active">ОПИСАНИЕ</button>
              <button class="tab-button">ХАРАКТЕРИСТИКИ</button>
              <button class="tab-button">ДОКУМЕНТЫ</button>
            </div>
        </div>
      </div>
      
      <div class="intro-section">
        <div class="container">
          <p>
            МОЩНЕЙШИЙ 2-К КАНАЛЬНЫЙ ВИБРОАНАЛИЗАТОР, ПОЗВОЛЯЮЩИЙ СОБИРАТЬ И АНАЛИЗИРОВАТЬ ДАННЫЕ ПО ДВУМ КАНАЛАМ <span class="highlight">СИНХРОННО</span>, МАКСИМАЛЬНЫЕ ДИАГНОСТИЧЕСКИЕ ВОЗМОЖНОСТИ И ФУНКЦИЯ БАЛАНСИРОВКИ ДЕЛАЮТ ЕГО НЕЗАМЕНИМЫМ ИНСТРУМЕНТОМ ДЛЯ ОПРЕДЕЛЕНИЯ НЕИСПРАВНОСТЕЙ <span class="highlight-underline">ПРОМЫШЛЕННОГО ОБОРУДОВАНИЯ</span>.
          </p>
        </div>
      </div>

      <div class="features-section">
        <div class="container">
          <ul>
            <li>Автоматическое определение типов и параметров подключаемых датчиков</li>
            <li>Измерение общего уровня (вибровибрации)</li>
            <li>Записи сигнала (формы, спектра, огибающей, фильтры, орбиты и другие функции)</li>
            <li>Сбор длинного сигнала и последующий анализ</li>
            <li>Радиоканал (Wi-Fi, RP-ID)</li>
            <li>Анализ в реальном времени</li>
            <li>Балансировка</li>
            <li>Возможность самостоятельно обновлять ПО прибора</li>
            <li>Полная совместимость с диагностическим ПО Вибродизайнер-Эксперт</li>
            <li>Возможность работы с удачным монитором</li>
            <li>Возможность подключения к системам непрерывного контроля, таким как Bently Nevada, Boker & Kjaer, НК-Д ПВ, СМКД и другим</li>
            <li>Возможность работы во взрывоопасных помещениях – ExVeriT[Ex]</li>
          </ul>
        </div>
      </div>

      <div class="documents-section">
        <div class="container">
          <h2>Документы</h2>
          <div class="document-link">
            <a href="#">"ИНСТРУКЦИЯ ПО ЭКСПЛУАТАЦИИ. СЕРВЕРНЫЙ ПАКЕТ" (PDF)</a>
          </div>
          <div class="document-link">
            <a href="#">"ИНСТРУКЦИЯ ПО ЭКСПЛУАТАЦИИ. СЕРВЕРНЫЙ ПАКЕТ" (PDF)</a>
          </div>
        </div>
      </div>
      
      <div class="related-products-section">
          <div class="container">
              <h2>Сопутствующие товары</h2>
              <div class="related-products-grid">
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
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

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
  background-color: #333;
  color: $text-light;
  padding-top: 2rem;
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
}

.hero-text {
  text-align: left;
}

.hero-text h1 {
  font-size: $font-6xl;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  color: $text-light;
  .model {
    color: $primary-color;
  }
}

.hero-image {
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
}

.hero-tabs-container {
    background-color: #444;
    margin-top: 2rem;
}

.hero-tabs {
  display: flex;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.tab-button {
  background: none;
  border: none;
  color: $text-light;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: $font-lg;
  text-transform: uppercase;
  position: relative;
  &.active {
    font-weight: 700;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 1.5rem;
        right: 1.5rem;
        height: 3px;
        background-color: $primary-color;
    }
  }
}

.intro-section {
  padding: 4rem 0;
  text-align: center;
  p {
    font-size: $font-2xl;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto;
    color: $text-secondary;
    .highlight {
      color: $primary-color;
    }
    .highlight-underline {
      color: $primary-color;
      border-bottom: 2px solid $primary-color;
    }
  }
}

.features-section {
  padding: 4rem 0;
  overflow-x: hidden;
  
  .container {
    position: relative;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: $font-xl;
    line-height: 1.8;
    color: $text-light;
  }
  
  li {
    padding: 1rem 0 1rem 2rem;
    position: relative;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -100vw;
        right: -100vw;
        z-index: -1;
    }
    
    &:nth-child(odd)::after {
      background-color: #3f8875;
    }

    &:nth-child(even)::after {
      background-color: #5a5a5a;
    }

    &::before {
      content: '•';
      color: $text-light;
      font-size: 2rem;
      position: absolute;
      left: 0;
      top: 50%;
      line-height: 1;
      transform: translateY(-50%);
    }
  }
}


.documents-section {
    padding: 4rem 0;
    background-color: #f5f5f5;

    h2 {
        font-size: $font-5xl;
        font-weight: 600;
        margin-bottom: 2rem;
        color: $text-secondary;
    }

    .document-link {
        margin-bottom: 1rem;
        a {
            font-size: $font-2xl;
            color: $text-secondary;
            text-decoration: none;
            border-bottom: 1px solid $text-secondary;
            padding-bottom: 0.25rem;
        }
    }
}

.related-products-section {
    padding: 4rem 0;

    h2 {
        font-size: $font-5xl;
        font-weight: 600;
        margin-bottom: 2rem;
        color: $text-secondary;
    }
    
    .related-products-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
}

</style>