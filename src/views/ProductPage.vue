<template>
  <div class="product-page">
    <AppHeader />
    
    <!-- BREADCRUMB SECTION -->
    <div class="breadcrumb-section">
      <div class="breadcrumb-container">
        <div class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">Главная</router-link>
          <span class="breadcrumb-separator">→</span>
          <router-link to="/equipment" class="breadcrumb-link">Продукция</router-link>
          <span class="breadcrumb-separator">→</span>
          <span class="breadcrumb-current">{{ currentProduct.title }} {{ currentProduct.model }}</span>
        </div>
      </div>
    </div>

    <main class="main-content">
      <!-- HERO SECTION -->
      <div class="hero-section">
        <div class="hero-background-overlay"></div>
        <div class="hero-background">
          <div class="floating-particles"></div>
          <div class="gradient-mesh"></div>
        </div>
        <div class="hero-content">
          <div class="hero-text-block">
            <div class="hero-title">
              <h1>
                <span class="title-line">{{ currentProduct.title }}</span>
                <span class="title-model">{{ currentProduct.model }}</span>
                <span class="title-line">ОТ ТЕХНЕКОНА</span>
              </h1>
              <div class="hero-subtitle">
                {{ currentProduct.description }}
              </div>
            </div>
          </div>
          <div class="hero-image-block">
            <div class="image-container">
              <img :src="currentProduct.imageUrl" :alt="`${currentProduct.title} ${currentProduct.model}`" />
              <div class="image-glow"></div>
            </div>
          </div>
        </div>
        <div class="hero-navigation">
          <div class="nav-container">
            <button 
              class="nav-tab" 
              :class="{ active: activeTab === 'description' }"
              @click="setActiveTab('description')"
            >
              <span class="tab-text">ОПИСАНИЕ</span>
            </button>
            <button 
              class="nav-tab" 
              :class="{ active: activeTab === 'specs' }"
              @click="setActiveTab('specs')"
            >
              <span class="tab-text">ХАРАКТЕРИСТИКИ</span>
            </button>
            <button 
              class="nav-tab" 
              :class="{ active: activeTab === 'docs' }"
              @click="setActiveTab('docs')"
            >
              <span class="tab-text">ДОКУМЕНТЫ</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- DESCRIPTION SECTION -->
      <div class="description-section" id="description-section">
        <div class="description-background">
          <div class="tech-pattern"></div>
        </div>
        <div class="description-container">
          <div class="section-header">
            <h2>Описание продукта</h2>
            <p class="section-subtitle">Профессиональный виброанализатор для диагностики промышленного оборудования</p>
          </div>
          
          <div class="description-content">
            <div class="description-text">
              <p>
                Виброанализатор STD-3300 от компании ТЕХНЕКОН представляет собой современное профессиональное оборудование 
                для диагностики и мониторинга вибрации промышленных механизмов. Прибор предназначен для измерения, анализа 
                и регистрации вибрационных параметров с целью выявления дефектов и предотвращения аварийных ситуаций.
              </p>
              
              <p>
                Анализатор оснащен двумя синхронными измерительными каналами и таховходом, что позволяет проводить 
                комплексную диагностику роторных систем. Широкий частотный диапазон от постоянного тока до 32 кГц 
                и высокое разрешение спектрального анализа до 25 600 линий обеспечивают точное выявление дефектов 
                на ранних стадиях развития.
              </p>
              
              <p>
                Встроенные алгоритмы балансировки роторов позволяют проводить одно- и двухплоскостную балансировку 
                в диапазоне частот вращения от 30 до 12 000 об/мин. Длительная автономность работы до 18 часов 
                и взрывозащищенное исполнение 1ExibIIBT4 X делают прибор незаменимым для работы в сложных 
                промышленных условиях.
              </p>
            </div>
            
            <div class="description-features">
              <div class="feature-highlight">
                <div class="highlight-icon">
                  <SignalIcon />
                </div>
                <div class="highlight-content">
                  <h4>Двухканальный анализ</h4>
                  <p>Синхронный сбор данных по двум каналам с таховходом</p>
                </div>
              </div>
              
              <div class="feature-highlight">
                <div class="highlight-icon">
                  <AccuracyIcon />
                </div>
                <div class="highlight-content">
                  <h4>Высокая точность</h4>
                  <p>24-битные АЦП с динамическим диапазоном до 109 дБ</p>
                </div>
              </div>
              
              <div class="feature-highlight">
                <div class="highlight-icon">
                  <SafetyIcon />
                </div>
                <div class="highlight-content">
                  <h4>Взрывозащищенность</h4>
                  <p>Исполнение 1ExibIIBT4 X для работы во взрывоопасных зонах</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- KEY FEATURES SECTION -->
      <div class="key-features-section">
        <div class="features-background">
          <div class="tech-grid"></div>
          <div class="signal-waves"></div>
        </div>
        <div class="features-container">
          <div class="section-header">
            <h2>Ключевые технические особенности</h2>
            <p class="section-subtitle">Уникальные возможности для профессиональной вибродиагностики</p>
          </div>
          
          <div class="features-grid">
            <AnimatedCard v-for="(feature, index) in keyFeatures" :key="index" :delay="index * 0.1">
              <div class="feature-card" @mouseenter="activateFeature(index)" @mouseleave="deactivateFeature(index)">
                <div class="feature-icon">
                  <component :is="feature.icon" />
                </div>
                <div class="feature-content">
                  <h3>{{ feature.title }}</h3>
                  <p class="feature-description">{{ feature.description }}</p>
                  <div class="feature-highlight">{{ feature.highlight }}</div>
                </div>
                <div class="feature-animation" :class="{ active: activeFeature === index }">
                  <div class="pulse-ring"></div>
                  <div class="data-flow"></div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      <!-- ADVANTAGES SECTION -->
      <div class="advantages-section">
        <div class="advantages-background">
          <div class="floating-elements"></div>
          <div class="gradient-overlay"></div>
        </div>
        <div class="advantages-container">
          <div class="advantages-header">
            <div class="main-title-wrapper">
              <div class="title-accent">ТЕХНОЛОГИЧЕСКОЕ</div>
              <h2 class="main-title">ПРЕИМУЩЕСТВА</h2>
              <div class="title-model">STD-3300</div>
            </div>
            <p class="section-subtitle">Почему профессионалы выбирают именно этот анализатор</p>
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

      <!-- APPLICATIONS SECTION -->
      <div class="applications-section">
        <div class="applications-background">
          <div class="industry-pattern"></div>
          <div class="applications-bg-image" :class="activeApplicationTab"></div>
        </div>
        <div class="applications-container">
          <div class="section-header">
            <h2>Области применения</h2>
            <p class="section-subtitle">Профессиональные решения для критически важных отраслей</p>
          </div>
          
          <div class="applications-tabs">
            <button 
              v-for="tab in applicationTabs" 
              :key="tab.id"
              class="application-tab"
              :class="{ active: activeApplicationTab === tab.id }"
              @click="setActiveApplicationTab(tab.id)"
              @mouseenter="setHoverTab(tab.id)"
              @mouseleave="setHoverTab(null)">
              <div class="tab-content">
                <div class="tab-title">{{ tab.title }}</div>
                <div class="tab-subtitle">{{ tab.subtitle }}</div>
              </div>
            </button>
          </div>
          
          <div class="application-content">
            <Transition name="tab-content" mode="out-in">
              <div :key="activeApplicationTab" class="tab-panel">
                <div class="panel-description">
                  <h3>{{ currentTab.title }}</h3>
                  <p>{{ currentTab.description }}</p>
                </div>
                <div class="advantages-grid">
                  <div v-for="(advantage, index) in currentTab.advantages" 
                       :key="`${activeApplicationTab}-${index}`"
                       class="advantage-item"
                       :class="{ 'animate-in': contentVisible }"
                       :style="{ animationDelay: `${index * 0.15}s` }">
                    <div class="advantage-icon">
                <component :is="advantage.icon" />
              </div>
                    <div class="advantage-content">
                      <h4>{{ advantage.title }}</h4>
                      <p>{{ advantage.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <!-- TECHNOLOGY COMPARISON -->
      <div class="comparison-section">
        <div class="comparison-background">
          <div class="tech-hexagons"></div>
        </div>
        <div class="comparison-container">
          <div class="section-header">
            <div class="comparison-title-wrapper">
              <div class="title-accent">ТЕХНОЛОГИЧЕСКОЕ</div>
              <h2 class="comparison-main-title">ПРЕВОСХОДСТВО</h2>
              <div class="title-model">STD-3300</div>
            </div>
            <p class="section-subtitle">Сравнение с стандартными решениями рынка</p>
          </div>
          
          <div class="comparison-table">
            <div class="comparison-header">
              <div class="parameter-column">Параметр</div>
              <div class="std-column">
                <div class="column-title">STD-3300</div>
                <div class="column-badge">Премиум</div>
              </div>
              <div class="standard-column">
                <div class="column-title">Стандартные решения</div>
              </div>
            </div>
            
            <div class="comparison-row" 
                 v-for="(comparison, index) in comparisons" 
                 :key="index"
                 @mouseenter="highlightComparison(index)"
                 @mouseleave="unhighlightComparison(index)"
                 :class="{ highlighted: highlightedComparison === index }">
              <div class="parameter-cell">
                <span class="parameter-icon">
                  <component :is="comparison.icon" />
                </span>
                <span class="parameter-name">{{ comparison.parameter }}</span>
              </div>
              <div class="std-cell">
                <span class="value advantage">{{ comparison.stdValue }}</span>
                <div class="advantage-indicator">✓</div>
              </div>
              <div class="standard-cell">
                <span class="value">{{ comparison.standardValue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SOFTWARE COMPATIBILITY -->
      <div class="software-section">
        <div class="software-background">
          <div class="code-lines"></div>
        </div>
        <div class="software-container">
          <div class="section-header">
            <h2>Программная совместимость</h2>
            <p class="section-subtitle">Интеграция с профессиональными системами</p>
          </div>
          
          <div class="software-grid">
            <AnimatedCard :delay="0.1">
              <div class="software-card">
                <div class="software-icon">
                  <ComputerIcon />
                </div>
                <div class="software-content">
                  <h3>Вибродизайнер-Эксперт</h3>
                  <p>Полная совместимость с диагностическим ПО</p>
                  <div class="compatibility-badge">100% совместимость</div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard :delay="0.2">
              <div class="software-card">
                <div class="software-icon">
                  <LinkIcon />
                </div>
                <div class="software-content">
                  <h3>Системы мониторинга</h3>
                  <p>Подключение к штатным системам виброконтроля</p>
                  <div class="systems-list">
                    <span class="system-badge">Bently Nevada</span>
                    <span class="system-badge">Metrix</span>
                    <span class="system-badge">SKF</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      <!-- TECHNICAL SPECIFICATIONS -->
      <div class="specs-section" id="specs-section">
        <div class="specs-background">
          <div class="spectrum-grid"></div>
        </div>
        <div class="specs-container">
          <div class="section-header">
            <h2>Технические характеристики</h2>
            <p class="section-subtitle">Подробные спецификации STD-3300</p>
          </div>
          
          <div class="specs-table-wrapper">
            <table class="specs-table">
              <tbody>
                <tr class="spec-category">
                  <td colspan="2">ИЗМЕРИТЕЛЬНЫЕ КАНАЛЫ</td>
                </tr>
                <tr>
                  <td>Аналоговые входы</td>
                  <td><strong>2 синхронных канала + 1 таховход</strong></td>
                </tr>
                
                <tr class="spec-category">
                  <td colspan="2">ОСНОВНЫЕ ПАРАМЕТРЫ</td>
                </tr>
                <tr class="spec-highlight">
                  <td>Частотный диапазон</td>
                  <td><strong>DC-32 000 Гц</strong></td>
                </tr>
                <tr class="spec-highlight">
                  <td>Разрешение спектра</td>
                  <td><strong>3 200, 6 400, 12 800, 25 600 линий</strong></td>
                </tr>
                <tr class="spec-highlight">
                  <td>Динамический диапазон</td>
                  <td><strong>до 109 дБ</strong></td>
                </tr>
                <tr>
                  <td>АЦП</td>
                  <td>2 × 24 бита</td>
                </tr>
                <tr>
                  <td>Частота дискретизации</td>
                  <td>до 82 кГц</td>
                </tr>
                <tr>
                  <td>Точность</td>
                  <td>±1 %</td>
                </tr>
                
                <tr class="spec-category">
                  <td colspan="2">СОВМЕСТИМОСТЬ ДАТЧИКОВ</td>
                </tr>
                <tr>
                  <td>Аналоговый вход</td>
                  <td>ВП-хх, IEPE (ICP), CSP-xxx, зарядовые, Bently Nevada, Metrix, SKF</td>
                </tr>
                <tr>
                  <td>Тахо вход</td>
                  <td>Оптический, лазерный, вихретоковый</td>
                </tr>
                
                <tr class="spec-category">
                  <td colspan="2">БАЛАНСИРОВКА</td>
                </tr>
                <tr>
                  <td>Частота вращения</td>
                  <td>от 30 до 12 000 об/мин</td>
                </tr>
                <tr>
                  <td>Количество плоскостей</td>
                  <td>1 или 2</td>
                </tr>
                
                <tr class="spec-category">
                  <td colspan="2">КОНСТРУКЦИЯ</td>
                </tr>
                <tr>
                  <td>Взрывозащита</td>
                  <td>1ExibIIBT4 X</td>
                </tr>
                <tr>
                  <td>Защита корпуса</td>
                  <td>IP54</td>
                </tr>
                <tr>
                  <td>Температурный диапазон</td>
                  <td>от −20 до +50 °С</td>
                </tr>
                <tr class="spec-highlight">
                  <td>Время работы</td>
                  <td><strong>до 18 часов</strong></td>
                </tr>
                <tr>
                  <td>Размеры</td>
                  <td>170 × 110 × 35 мм</td>
                </tr>
                <tr>
                  <td>Масса</td>
                  <td>700 г</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="documents-section" id="docs-section">
        <div class="documents-background">
          <div class="docs-pattern"></div>
        </div>
        <div class="documents-container">
          <div class="section-header">
            <h2>Техническая документация</h2>
            <div class="section-subtitle">Полный комплект документов для работы с оборудованием</div>
          </div>
          
          <div class="documents-content">
            <div class="documents-intro">
              <p>
                Для обеспечения безопасной и эффективной работы с виброанализатором STD-3300 
                предоставляется полный комплект технической документации. Все документы 
                разработаны в соответствии с международными стандартами и содержат 
                подробную информацию по эксплуатации, техническому обслуживанию и безопасности.
              </p>
            </div>
            
            <div class="documents-grid">
              <DocumentCard
                title="Инструкция по эксплуатации"
                description="Подробное руководство пользователя с пошаговыми инструкциями по настройке и использованию прибора"
                format="PDF, 2.4 МБ"
                icon="📄"
                :show-preview="false"
                @download="() => {}"
              />
              <DocumentCard
                title="Техническое описание"
                description="Детальные спецификации, электрические схемы и технические характеристики"
                format="PDF, 1.8 МБ"
                icon="🔧"
                :show-preview="false"
                @download="() => {}"
              />
              <DocumentCard
                title="Сертификат соответствия"
                description="Сертификат взрывозащищенности и соответствия требованиям безопасности"
                format="PDF, 0.9 МБ"
                icon="🛡️"
                :show-preview="false"
                @download="() => {}"
              />
              <DocumentCard
                title="Программное обеспечение"
                description="Драйверы и программное обеспечение для подключения к ПК"
                format="ZIP, 15.2 МБ"
                icon="💻"
                :show-preview="false"
                @download="() => {}"
              />
            </div>
            
            <div class="documents-note">
              <div class="note-icon">ℹ️</div>
              <div class="note-content">
                <h4>Важная информация</h4>
                <p>
                  Все документы предоставляются в электронном виде. Для получения 
                  печатных копий обратитесь в отдел технической поддержки. 
                  Документация регулярно обновляется - проверяйте актуальность версий.
                </p>
              </div>
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
            <router-link 
              v-for="product in relatedProducts" 
              :key="product.id"
              :to="{ name: 'ProductDetail', params: { productId: product.slug || 'std-500' } }"
              class="product-link"
            >
              <ProductCard 
                :title="product.title" 
                :model="product.model"
                :imageUrl="product.imageUrl" 
              />
            </router-link>
          </div>
        </div>
      </div>



    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import ProductCard from "@/components/ProductCard.vue";
import DocumentCard from '@/components/DocumentCard.vue';
import AnimatedCard from '@/components/AnimatedCard.vue';
import SignalIcon from '@/components/icons/SignalIcon.vue';
import FrequencyIcon from '@/components/icons/FrequencyIcon.vue';
import AccuracyIcon from '@/components/icons/AccuracyIcon.vue';
import BalanceIcon from '@/components/icons/BalanceIcon.vue';
import BatteryIcon from '@/components/icons/BatteryIcon.vue';
import SafetyIcon from '@/components/icons/SafetyIcon.vue';
import PowerIcon from '@/components/icons/PowerIcon.vue';
import TargetIcon from '@/components/icons/TargetIcon.vue';
import ComputerIcon from '@/components/icons/ComputerIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import AnalyticsIcon from '@/components/icons/AnalyticsIcon.vue';
import TrendIcon from '@/components/icons/TrendIcon.vue';
import ToolsIcon from '@/components/icons/ToolsIcon.vue';
import LinkIcon from '@/components/icons/LinkIcon.vue';
import RefreshIcon from '@/components/icons/RefreshIcon.vue';
import ShieldIcon from '@/components/icons/ShieldIcon.vue';
import ControlIcon from '@/components/icons/ControlIcon.vue';
import ScaleIcon from '@/components/icons/ScaleIcon.vue';
import ClockIcon from '@/components/icons/ClockIcon.vue';
import PumpIcon from '@/components/icons/PumpIcon.vue';
import CompressorIcon from '@/components/icons/CompressorIcon.vue';
import GearIcon from '@/components/icons/GearIcon.vue';
import OilIcon from '@/components/icons/OilIcon.vue';
import TurbineIcon from '@/components/icons/TurbineIcon.vue';
import ValveIcon from '@/components/icons/ValveIcon.vue';
import ExplosionIcon from '@/components/icons/ExplosionIcon.vue';
import MachineIcon from '@/components/icons/MachineIcon.vue';
import CrossIcon from '@/components/icons/CrossIcon.vue';
import ConveyorIcon from '@/components/icons/ConveyorIcon.vue';

// Получаем параметры маршрута
const route = useRoute();
const productId = route.params.productId || 'std-3300';

// База данных продуктов
const productsDatabase = {
  'std-3300': {
    title: 'ВИБРОАНАЛИЗАТОР',
    model: 'STD-3300',
    imageUrl: new URL('@/assets/products/STD-3300.png', import.meta.url).href,
    description: 'Профессиональное оборудование для диагностики промышленных систем'
  },
  'std-500': {
    title: 'ВИБРОАНАЛИЗАТОР',
    model: 'STD-500',
    imageUrl: '/placeholder.svg',
    description: 'Компактный анализатор для базовой диагностики'
  },
  'std-1000': {
    title: 'ВИБРОАНАЛИЗАТОР',
    model: 'STD-1000',
    imageUrl: '/placeholder.svg',
    description: 'Средний класс анализаторов для профессионального использования'
  },
  'std-2000': {
    title: 'ВИБРОАНАЛИЗАТОР',
    model: 'STD-2000',
    imageUrl: '/placeholder.svg',
    description: 'Продвинутый анализатор для сложных задач'
  },
  'sms-100': {
    title: 'СИСТЕМА МОНИТОРИНГА',
    model: 'SMS-100',
    imageUrl: '/placeholder.svg',
    description: 'Система непрерывного мониторинга промышленного оборудования'
  },
  'vs-200': {
    title: 'ДАТЧИК ВИБРАЦИИ',
    model: 'VS-200',
    imageUrl: '/placeholder.svg',
    description: 'Высокоточный датчик для измерения вибрации'
  }
};

// Определяем текущий продукт
const currentProduct = computed(() => {
  return productsDatabase[productId] || productsDatabase['std-3300'];
});

// Анимация canvas
const heroSpectrum = ref(null);
let animationFrame = null;
const activeFeature = ref(-1);

// Данные для связанных продуктов
const relatedProducts = [
  { id: 1, title: "ВИБРОАНАЛИЗАТОР", model: "STD-500", slug: "std-500", imageUrl: "/public/placeholder.svg" },
  { id: 2, title: "ВИБРОАНАЛИЗАТОР", model: "STD-1000", slug: "std-1000", imageUrl: "/public/placeholder.svg" },
  { id: 3, title: "СИСТЕМА МОНИТОРИНГА", model: "SMS-100", slug: "sms-100", imageUrl: "/public/placeholder.svg" },
  { id: 4, title: "ДАТЧИК ВИБРАЦИИ", model: "VS-200", slug: "vs-200", imageUrl: "/public/placeholder.svg" },
];

// Ключевые технические фишки
const keyFeatures = [
  {
    title: "Двухканальный анализ",
    description: "Синхронный сбор и анализ данных по двум каналам с таховходом для точной привязки к оборотам",
    highlight: "2 канала + таховход",
    icon: SignalIcon
  },
  {
    title: "Широкий частотный диапазон", 
    description: "От постоянного тока до 32 кГц с разрешением до 25 600 линий спектрального анализа",
    highlight: "DC-32 000 Гц, 25.6K линий",
    icon: FrequencyIcon
  },
  {
    title: "Высокая точность измерений",
    description: "24-битные АЦП с динамическим диапазоном до 109 дБ обеспечивают точность ±1%",
    highlight: "109 дБ, ±1% точность",
    icon: AccuracyIcon
  },
  {
    title: "Балансировка роторов",
    description: "Встроенные алгоритмы одно- и двухплоскостной балансировки для частот 30-12000 об/мин",
    highlight: "1-2 плоскости, до 12К об/мин",
    icon: BalanceIcon
  },
  {
    title: "Длительная автономность",
    description: "Перезаряжаемая батарея обеспечивает до 18 часов непрерывной работы",
    highlight: "До 18 часов работы",
    icon: BatteryIcon
  },
  {
    title: "Взрывозащищенность",
    description: "Исполнение 1ExibIIBT4 X с защитой IP54 для работы в сложных промышленных условиях",
    highlight: "1ExibIIBT4 X, IP54",
    icon: SafetyIcon
  }
];

// Интерактивные состояния
const activeAdvantage = ref(-1);
const highlightedCategory = ref(-1);
const highlightedComparison = ref(-1);
const activeApplicationTab = ref('energy');
const hoverTab = ref(null);
const contentVisible = ref(true);
const activeTab = ref('');

// Преимущества анализатора
const advantages = [
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
];

// Области применения - новая интерактивная версия
const applicationTabs = [
  {
    id: 'energy',
    title: 'Энергетика',
    subtitle: 'Критически важные системы электростанций',
    description: 'STD-3300 обеспечивает непрерывный мониторинг жизненно важного оборудования электростанций, предотвращая аварийные остановки и оптимизируя режимы работы турбогенераторов.',
    advantages: [
      {
        icon: ClockIcon,
        title: 'Турбины и генераторы',
        description: 'Мониторинг вибрации роторных систем с точностью до 0.1% для предотвращения критических поломок'
      },
      {
        icon: PumpIcon,
        title: 'Насосные системы',
        description: 'Диагностика центробежных и осевых насосов систем охлаждения и водоснабжения'
      },
      {
        icon: CompressorIcon,
        title: 'Компрессоры и вентиляторы',
        description: 'Контроль систем принудительной тяги и дутьевых установок для стабильной работы котлов'
      },
      {
        icon: GearIcon,
        title: 'Вспомогательное оборудование',
        description: 'Мониторинг редукторов, муфт и опорных узлов критически важных механизмов'
      }
    ]
  },
  {
    id: 'oil-gas',
    title: 'Нефтегаз',
    subtitle: 'Непрерывное производство углеводородов',
    description: 'В условиях агрессивной среды и высоких нагрузок STD-3300 обеспечивает надежную диагностику оборудования нефтегазовой отрасли с соблюдением требований взрывобезопасности.',
    advantages: [
      {
        icon: OilIcon,
        title: 'Компрессорные станции',
        description: 'Мониторинг поршневых и центробежных компрессоров магистральных газопроводов'
      },
      {
        icon: TurbineIcon,
        title: 'Турбодетандеры',
        description: 'Контроль высокоскоростного оборудования установок переработки газа'
      },
      {
        icon: ValveIcon,
        title: 'Насосные агрегаты',
        description: 'Диагностика магистральных насосов нефтепроводов и технологических установок'
      },
      {
        icon: ExplosionIcon,
        title: 'Взрывозащищенность',
        description: 'Сертифицированное оборудование 1ExibIIBT4 X для работы во взрывоопасных зонах'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Машиностроение',
    subtitle: 'Точность и надежность производства',
    description: 'STD-3300 повышает эффективность производственного оборудования, минимизируя простои и обеспечивая стабильное качество выпускаемой продукции.',
    advantages: [
      {
        icon: MachineIcon,
        title: 'Станочное оборудование',
        description: 'Контроль шпинделей, направляющих и приводных систем высокоточных станков'
      },
      {
        icon: CrossIcon,
        title: 'Редукторы и передачи',
        description: 'Диагностика зубчатых передач, подшипников и валов силовых приводов'
      },
      {
        icon: ConveyorIcon,
        title: 'Конвейерные системы',
        description: 'Мониторинг роликов, барабанов и приводных станций автоматизированных линий'
      },
      {
        icon: GearIcon,
        title: 'Балансировка роторов',
        description: 'Встроенные алгоритмы одно- и двухплоскостной балансировки для устранения дисбаланса'
      }
    ]
  }
];

// Сравнение с конкурентами
const comparisons = [
  {
    icon: AnalyticsIcon,
    parameter: "Количество каналов",
    stdValue: "2 + таховход",
    standardValue: "1 канал"
  },
  {
    icon: TrendIcon,
    parameter: "Частотный диапазон",
    stdValue: "DC-32 кГц",
    standardValue: "До 10 кГц"
  },
  {
    icon: TargetIcon,
    parameter: "Разрешение спектра",
    stdValue: "25 600 линий",
    standardValue: "1 600 линий"
  },
  {
    icon: PowerIcon,
    parameter: "Динамический диапазон",
    stdValue: "109 дБ",
    standardValue: "80 дБ"
  },
  {
    icon: BatteryIcon,
    parameter: "Время работы",
    stdValue: "18 часов",
    standardValue: "6 часов"
  },
  {
    icon: SafetyIcon,
    parameter: "Взрывозащита",
    stdValue: "1ExibIIBT4 X",
    standardValue: "Отсутствует"
  },
  {
    icon: ScaleIcon,
    parameter: "Балансировка",
    stdValue: "1-2 плоскости",
    standardValue: "Только 1 плоскость"
  },
  {
    icon: LinkIcon,
    parameter: "Совместимость",
    stdValue: "Все типы датчиков",
    standardValue: "Ограниченная"
  }
];

// Простые методы анимации
const activateFeature = (index) => {
  activeFeature.value = index;
};

const deactivateFeature = (index) => {
  activeFeature.value = -1;
};

// Методы для новых интерактивных блоков
const activateAdvantage = (index) => {
  activeAdvantage.value = index;
};

const deactivateAdvantage = (index) => {
  activeAdvantage.value = -1;
};

const highlightCategory = (index) => {
  highlightedCategory.value = index;
};

const unhighlightCategory = (index) => {
  highlightedCategory.value = -1;
};

// Computed для текущей вкладки
const currentTab = computed(() => {
  return applicationTabs.find(tab => tab.id === activeApplicationTab.value) || applicationTabs[0];
});

// Методы для новой секции приложений
const setActiveApplicationTab = (tabId) => {
  if (tabId !== activeApplicationTab.value) {
    contentVisible.value = false;
    
    // Сначала скрываем фон
    const bgElement = document.querySelector('.applications-bg-image');
    if (bgElement) {
      bgElement.style.opacity = '0';
    }
    
    setTimeout(() => {
      activeApplicationTab.value = tabId;
      
      // Показываем новый фон с задержкой
      setTimeout(() => {
        if (bgElement) {
          bgElement.style.opacity = '1';
        }
        contentVisible.value = true;
      }, 100);
    }, 300);
  }
};

const setHoverTab = (tabId) => {
  hoverTab.value = tabId;
  
  // Показываем превью фона при hover (только если это не активная вкладка)
  if (tabId && tabId !== activeApplicationTab.value) {
    const bgElement = document.querySelector('.applications-bg-image');
    if (bgElement) {
      bgElement.className = `applications-bg-image ${tabId}`;
      bgElement.style.opacity = '0.3';
    }
  } else if (!tabId) {
    // Возвращаем активный фон при уходе курсора
    const bgElement = document.querySelector('.applications-bg-image');
    if (bgElement) {
      bgElement.className = `applications-bg-image ${activeApplicationTab.value}`;
      bgElement.style.opacity = '1';
    }
  }
};

const highlightComparison = (index) => {
  highlightedComparison.value = index;
};

const unhighlightComparison = (index) => {
  highlightedComparison.value = -1;
};

// Метод для переключения вкладок навигации
const setActiveTab = (tabName) => {
  activeTab.value = tabName;
  
  // Плавная прокрутка к соответствующей секции
  setTimeout(() => {
    const targetSection = document.getElementById(`${tabName}-section`);
    if (targetSection) {
      const headerHeight = 80; // Примерная высота фиксированного хедера
      const offset = 100; // Дополнительный отступ
      
      const targetPosition = targetSection.offsetTop - headerHeight - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
  
  // Сброс активного состояния через 1 секунду
  setTimeout(() => {
    activeTab.value = '';
  }, 1000);
};

// Анимация героя
const startHeroAnimation = () => {
  if (!heroSpectrum.value) return;
  
  const canvas = heroSpectrum.value;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  let time = 0;
  const animate = () => {
    // Очистка с прозрачностью для эффекта шлейфа
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем спектральные линии
    const lineCount = 64;
    const lineWidth = canvas.width / lineCount;
    
    for (let i = 0; i < lineCount; i++) {
      const height = Math.sin(i * 0.2 + time) * 30 + 
                    Math.sin(i * 0.1 + time * 1.5) * 20 + 
                    Math.sin(i * 0.05 + time * 0.8) * 40 + 
                    60;
      
      const hue = (i / lineCount * 180 + time * 20) % 180 + 180; // Зелено-синий спектр
      ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
      ctx.fillRect(i * lineWidth, canvas.height - height, lineWidth - 1, height);
    }
    
    time += 0.03;
    animationFrame = requestAnimationFrame(animate);
  };
  
  animate();
};

onMounted(() => {
  // Прокручиваем к описанию товара
  setTimeout(() => {
    const descriptionSection = document.getElementById('description-section');
    if (descriptionSection) {
      const headerHeight = 80; // Примерная высота фиксированного хедера
      const offset = 40; // Дополнительный отступ
      const targetPosition = descriptionSection.offsetTop - headerHeight - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, 200);

  // Запускаем анимацию спектра в герое
  setTimeout(startHeroAnimation, 500);
  // Инициализируем анимацию контента
  setTimeout(() => {
    contentVisible.value = true;
  }, 1000);
  // Инициализируем фоновое изображение
  setTimeout(() => {
    const bgElement = document.querySelector('.applications-bg-image');
    if (bgElement) {
      bgElement.className = `applications-bg-image ${activeApplicationTab.value}`;
      bgElement.style.opacity = '1';
    }
  }, 1500);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});

</script>

<style lang="scss" scoped>
@import "../styles/variables";

.product-page {
  background: transparent;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-section {
  position: relative;
  min-height: 27vh;
  background: linear-gradient(135deg, #1a2332 0%, #2a3441 50%, #1a2332 100%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white;
}

.hero-background-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(42, 208, 162, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(0, 255, 179, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 45% 80%, rgba(42, 208, 162, 0.06) 1px, transparent 1px);
  background-size: 120px 120px, 80px 80px, 150px 150px;
  animation: particleFloat 20s ease-in-out infinite;
}

.gradient-mesh {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(42, 208, 162, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 255, 179, 0.12) 0%, transparent 50%),
    linear-gradient(45deg, transparent 30%, rgba(42, 208, 162, 0.05) 50%, transparent 70%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: center;
  flex: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding: 3rem 2rem 1.5rem;
  }
}

.hero-text-block {
  opacity: 0;
  transform: translateY(30px);
  animation: heroSlideUp 1s ease-out 0.3s forwards;
}

.hero-title {
  margin-bottom: 0.5rem;
  
  h1 {
    line-height: 1.1;
    margin: 0;
  }
  
  .title-line {
    display: block;
    font-size: 2.8rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
    letter-spacing: 0.02em;
    margin-bottom: 0.3rem;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  .title-model {
    display: block;
    font-size: 4.8rem;
    font-weight: 900;
    background: linear-gradient(135deg, #2ad0a2 0%, #22c55e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 40px rgba(42, 208, 162, 0.4);
    letter-spacing: -0.02em;
    margin: 0.2rem 0;
    
    @media (max-width: 768px) {
      font-size: 3.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  max-width: 520px;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem auto 0;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
}



.hero-image-block {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transform: translateX(50px) scale(0.9);
  animation: heroSlideIn 1.2s ease-out 0.6s forwards;
}

.image-container {
  position: relative;
  max-width: 390px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  box-shadow: none;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  border-radius: 0.5rem;
  box-shadow: none;
  transition: transform 0.4s ease;
  background: none;
  backdrop-filter: none;
  border: none;
}

.image-glow {
  display: none;
}

.hero-navigation {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 0 3rem 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem 2rem;
  }
}



.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 8px;
  border: 1px solid rgba(42, 208, 162, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
  }
}

.nav-tab {
  flex: 1;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  padding: 20px 32px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  transform: translateY(0);
  
  @media (max-width: 768px) {
    padding: 16px 24px;
    font-size: 0.9rem;
    min-width: auto;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(42, 208, 162, 0.1) 0%, rgba(42, 208, 162, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
    }
  }
  
  &.active {
    background: linear-gradient(135deg, #2ad0a2 0%, #22c55e 100%);
    color: white;
    transform: translateY(-4px);
    box-shadow: 
      0 8px 24px rgba(42, 208, 162, 0.4),
      0 4px 16px rgba(42, 208, 162, 0.3),
      0 0 20px rgba(42, 208, 162, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &::before {
      opacity: 0;
    }
    
    // Эффект пульсации для активного состояния
    animation: buttonPulse 1s ease-out;
  }
}

.nav-tab .tab-text {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  text-align: center;
}

/* DESCRIPTION SECTION */
.description-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
}

.description-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.tech-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, rgba(42, 208, 162, 0.02) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(42, 208, 162, 0.02) 25%, transparent 25%);
  background-size: 40px 40px;
  animation: patternFloat 30s linear infinite;
}

.description-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.description-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.description-text {
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: $text-muted;
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.description-features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-highlight {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(42, 208, 162, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(42, 208, 162, 0.15);
    border-color: rgba(42, 208, 162, 0.2);
  }
}

.highlight-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
}

.highlight-content {
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: $text-secondary;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.95rem;
    color: $text-muted;
    line-height: 1.5;
    margin: 0;
  }
}

@keyframes patternFloat {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

/* KEY FEATURES SECTION */
.key-features-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.features-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.tech-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(42, 208, 162, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(42, 208, 162, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 30s linear infinite;
}

.signal-waves {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 20%, rgba(42, 208, 162, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 70% 80%, rgba(0, 255, 179, 0.03) 0%, transparent 40%);
  animation: waveFlow 20s ease-in-out infinite;
}

.features-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: $text-secondary;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: $text-muted;
    font-weight: 300;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.feature-card {
  background: white;
  border: 1px solid rgba(42, 208, 162, 0.15);
  border-radius: 1.5rem;
  padding: 2.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(42, 208, 162, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(42, 208, 162, 0.3);
    box-shadow: 
      0 20px 40px rgba(42, 208, 162, 0.1),
      0 8px 24px rgba(0, 0, 0, 0.1);
      
    &::before {
      opacity: 1;
    }
  }
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  color: white;
  
  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(42, 208, 162, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .feature-card:hover & {
    transform: scale(1.05);
    
    &::after {
      opacity: 1;
      animation: iconPulse 2s infinite;
    }
  }
}

.feature-content {
  position: relative;
  z-index: 2;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: $text-secondary;
    margin-bottom: 1rem;
  }
  
  .feature-description {
    font-size: 1rem;
    color: $text-muted;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .feature-highlight {
    font-size: 0.9rem;
    font-weight: 600;
    color: $primary-color;
    background: rgba(42, 208, 162, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    display: inline-block;
    border: 1px solid rgba(42, 208, 162, 0.2);
  }
}

.feature-animation {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.active {
    opacity: 1;
  }
}

.pulse-ring {
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  width: 80px;
  height: 80px;
  border: 2px solid $primary-accent;
  border-radius: 50%;
  opacity: 0;
  animation: pulseRing 2s infinite;
}

.data-flow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, $primary-accent 50%, transparent 100%);
  animation: dataFlow 1.5s infinite;
}

/* SPECS SECTION */
.specs-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.specs-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.spectrum-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      rgba(42, 208, 162, 0.1) 1px,
      transparent 2px,
      transparent 40px
    );
  animation: spectrumFlow 15s linear infinite;
}

.specs-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.specs-section .section-header h2 {
  color: white;
}

.specs-section .section-subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.specs-table-wrapper {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(15px);
  margin-top: 3rem;
}

.specs-table {
  width: 100%;
  border-collapse: collapse;
  
  td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    vertical-align: top;
    
    &:first-child {
      width: 35%;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.8);
    }
    
    &:last-child {
      color: white;
      
      strong {
        color: $primary-accent;
        font-weight: 600;
      }
    }
  }
  
  .spec-category td {
    background: rgba(42, 208, 162, 0.1);
    color: $primary-accent;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
  
  .spec-highlight {
    background: rgba(42, 208, 162, 0.05);
    border-left: 3px solid $primary-accent;
  }
  
  tr:hover:not(.spec-category) {
    background: rgba(42, 208, 162, 0.05);
  }
}

/* SOFTWARE SECTION */
.software-section {
  padding: 6rem 0;
  background: #f8fafc;
  position: relative;
  overflow: hidden;
}

.software-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.code-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, rgba(42, 208, 162, 0.02) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(42, 208, 162, 0.02) 25%, transparent 25%);
  background-size: 30px 30px;
}

.software-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
}

.software-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(42, 208, 162, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(42, 208, 162, 0.05), transparent);
    transition: left 0.8s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(42, 208, 162, 0.15);
    border-color: rgba(42, 208, 162, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 240px;
  }
}

.software-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
  color: $primary-color;
}

.software-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: $text-secondary;
    margin-bottom: 1rem;
  }
  
  p {
    color: $text-muted;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
}

.compatibility-badge {
  background: linear-gradient(135deg, $primary-color, $primary-accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-top: auto;
  align-self: flex-start;
}

.systems-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  align-self: flex-start;
}

.system-badge {
  background: rgba(42, 208, 162, 0.1);
  color: $primary-color;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(42, 208, 162, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(42, 208, 162, 0.15);
    transform: translateY(-2px);
  }
}

/* ANIMATIONS */
@keyframes heroSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroSlideIn {
  from {
    opacity: 0;
    transform: translateX(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes gridMove {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(-50px) translateY(-50px);
  }
}

@keyframes waveFlow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

@keyframes iconPulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes pulseRing {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.8);
  }
}

@keyframes dataFlow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes spectrumFlow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-40px);
  }
}

@keyframes imageGlow {
  0% {
    opacity: 0.4;
    transform: scale(1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* DOCUMENTS & RELATED SECTIONS */
.documents-section {
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.documents-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.docs-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(42, 208, 162, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 255, 179, 0.03) 0%, transparent 50%);
  animation: docsFloat 25s ease-in-out infinite;
}

.documents-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.documents-content {
  margin-top: 3rem;
}

.documents-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: $text-muted;
  }
}

.documents-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.documents-note {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(42, 208, 162, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
}

.note-icon {
  font-size: 2rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
}

.note-content {
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: $text-secondary;
    margin-bottom: 0.8rem;
  }
  
  p {
    color: $text-muted;
    line-height: 1.6;
    margin: 0;
  }
}

@keyframes docsFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, -10px) rotate(2deg); }
}

@keyframes buttonPulse {
  0% {
    transform: translateY(-4px) scale(1);
    box-shadow: 
      0 8px 24px rgba(42, 208, 162, 0.4),
      0 4px 16px rgba(42, 208, 162, 0.3),
      0 0 20px rgba(42, 208, 162, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 
      0 12px 32px rgba(42, 208, 162, 0.5),
      0 6px 20px rgba(42, 208, 162, 0.4),
      0 0 30px rgba(42, 208, 162, 0.8),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  100% {
    transform: translateY(-4px) scale(1);
    box-shadow: 
      0 8px 24px rgba(42, 208, 162, 0.4),
      0 4px 16px rgba(42, 208, 162, 0.3),
      0 0 20px rgba(42, 208, 162, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
}



.related-products-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
}

.related-background {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(42, 208, 162, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 255, 179, 0.02) 0%, transparent 50%);
}

.related-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.products-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .hero-content {
    gap: 3rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 100vh;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    .title-line {
      font-size: 2rem;
    }
    
    .title-model {
      font-size: 3.2rem;
    }
  }
  
  .key-features-section,
  .applications-section,
  .specs-section,
  .software-section {
    padding: 4rem 0;
  }
  
  .feature-card {
    padding: 2rem;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .software-card {
    padding: 2rem;
  }
  
  .specs-table td {
    padding: 0.8rem 1rem;
    
    &:first-child {
      width: 40%;
    }
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 4rem 1rem 2rem;
    gap: 1.5rem;
  }
  
  .hero-title {
    .title-line {
      font-size: 1.6rem;
    }
    
    .title-model {
      font-size: 2.8rem;
    }
  }
  
  .hero-subtitle {
    font-size: 0.95rem;
  }
  
  .hero-navigation {
    padding: 0 1rem 2rem;
  }
  
  .nav-tab {
    padding: 14px 20px;
    font-size: 0.85rem;
  }
  
  .features-container,
  .specs-container,
  .software-container {
    padding: 0 1rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .specs-table td {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
  }
  
  .applications-tabs {
    margin-top: 2rem;
  }
  
  .application-tab {
    padding: 1rem 1.5rem;
  }
  
  .tab-title {
    font-size: 1.1rem;
  }
  
  .tab-subtitle {
    font-size: 0.8rem;
  }
  
  .panel-description h3 {
    font-size: 1.8rem;
  }
  
  .panel-description p {
    font-size: 1rem;
  }
  
  .advantage-item {
    padding: 1.2rem;
  }
}

/* NEW INTERACTIVE SECTIONS */

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

.title-model {
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #2ad0a2 0%, #22c55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(42, 208, 162, 0.4);
  letter-spacing: 0.1em;
  margin-top: 0.8rem;
  display: block;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
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

/* APPLICATIONS SECTION - NEW INTERACTIVE VERSION */
.applications-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.02);
    transition: all 0.5s ease;
    z-index: 1;
  }
}

.applications-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.industry-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(42, 208, 162, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(42, 208, 162, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: patternMove 40s linear infinite;
}

.applications-bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  filter: var(--bg-filter, brightness(1.4) contrast(1.08) saturate(1.15) grayscale(8%));

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
    background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.08) 100%);
    mix-blend-mode: lighten;
  }

  &.energy {
    background-image: none;
    --bg-filter: brightness(1.45) contrast(1.08) saturate(1.15) grayscale(8%);
  }
  &.oil-gas {
    background-image: none;
    --bg-filter: brightness(1.4) contrast(1.08) sepia(3%) saturate(1.12) grayscale(8%);
  }
  &.manufacturing {
    background-image: none;
    --bg-filter: brightness(1.5) contrast(1.1) hue-rotate(2deg) saturate(1.15) grayscale(8%);
  }
}

.applications-container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.applications-tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-top: 4rem;
  background: white;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(42, 208, 162, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
}

.application-tab {
  flex: 1;
  background: transparent;
  border: none;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(42, 208, 162, 0.05) 0%, rgba(42, 208, 162, 0.02) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:not(.active) {
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
    }
    
    .tab-title {
      color: #1e293b;
    }
    
    .tab-subtitle {
      color: #475569;
    }
  }
  
  &.active {
    background: linear-gradient(135deg, #2ad0a2 0%, #22c55e 100%);
    color: white;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(42, 208, 162, 0.3);
    
    .tab-title {
      color: white;
    }
    
    .tab-subtitle {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}

.tab-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.tab-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #475569;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.tab-subtitle {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 400;
  transition: color 0.3s ease;
}

.application-content {
  margin-top: 4rem;
}

.tab-panel {
  animation: fadeInUp 0.6s ease-out;
}

.panel-description {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  h3 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #475569;
    line-height: 1.6;
  }
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.advantage-item {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(42, 208, 162, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  
  &.animate-in {
    animation: slideInUp 0.8s ease-out forwards;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 32px rgba(42, 208, 162, 0.15);
    border-color: rgba(42, 208, 162, 0.2);
  }
}

.advantage-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
  color: #2ad0a2;
}

.advantage-content {
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.8rem;
  }
  
  p {
    color: #64748b;
    line-height: 1.5;
    font-size: 0.95rem;
  }
}

/* COMPARISON SECTION */
.comparison-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  color: white;
}

.comparison-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.tech-hexagons {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, rgba(42, 208, 162, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.08) 0%, transparent 50%);
  animation: hexagonFloat 25s ease-in-out infinite;
}

.comparison-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.comparison-title-wrapper {
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  width: 100%;
  
  &:hover .comparison-main-title {
    animation-duration: 1s;
    filter: drop-shadow(0 0 50px rgba(42, 208, 162, 0.8)) 
            drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));
    transform: scale(1.05);
    transition: all 0.3s ease;
    
    &::before {
      animation-duration: 1s;
      opacity: 1;
    }
    
    &::after {
      animation-duration: 1s;
      box-shadow: 0 0 60px rgba(42, 208, 162, 1), 0 0 120px rgba(42, 208, 162, 0.7);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 200px;
    transform: translate(-50%, -50%);
    background: 
      radial-gradient(circle at 20% 20%, rgba(42, 208, 162, 0.15) 1px, transparent 1px),
      radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.12) 1px, transparent 1px),
      radial-gradient(circle at 40% 60%, rgba(42, 208, 162, 0.1) 1px, transparent 1px);
    background-size: 50px 50px, 30px 30px, 70px 70px;
    animation: sparkle 4s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
    
    @media (max-width: 768px) {
      width: 400px;
      height: 150px;
    }
    
    @media (max-width: 480px) {
      width: 300px;
      height: 120px;
    }
  }
}

.comparison-section .title-accent {
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(42, 208, 162, 0.9);
  letter-spacing: 0.3em;
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.comparison-main-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 0.8rem 0;
  letter-spacing: -0.02em;
  position: relative;
  display: block;
  background: linear-gradient(
    45deg,
    #fff 0%,
    #2ad0a2 25%,
    #22c55e 50%,
    #2ad0a2 75%,
    #fff 100%
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleShine 3s ease-in-out infinite;
  text-shadow: none;
  filter: drop-shadow(0 0 30px rgba(42, 208, 162, 0.5)) 
          drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(42, 208, 162, 0.1) 25%,
      rgba(34, 197, 94, 0.15) 50%,
      rgba(42, 208, 162, 0.1) 75%,
      transparent 100%
    );
    background-size: 300% 100%;
    border-radius: 8px;
    z-index: -1;
    animation: titleGlow 3s ease-in-out infinite;
    filter: blur(20px);
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #2ad0a2, #22c55e, #2ad0a2, transparent);
    border-radius: 2px;
    animation: lineShine 2s ease-in-out infinite, linePulse 4s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(42, 208, 162, 0.6);
    transition: all 0.3s ease;
  }
}

.comparison-section .title-model {
  font-size: 3.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #2ad0a2 0%, #22c55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(42, 208, 162, 0.4);
  letter-spacing: 0.1em;
  display: block;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
}

.comparison-section .section-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
}

.comparison-table {
  margin-top: 4rem;
  background: rgba(15, 23, 42, 0.8);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(42, 208, 162, 0.2);
}

.comparison-header {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr;
  background: rgba(42, 208, 162, 0.1);
  padding: 2rem 2.5rem;
  border-bottom: 1px solid rgba(42, 208, 162, 0.2);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
    padding: 1.5rem 2rem;
  }
}

.parameter-column,
.std-column,
.standard-column {
  font-weight: 700;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    
    &:not(:first-child) {
      border-top: 1px solid rgba(42, 208, 162, 0.2);
      padding-top: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
}

.std-column {
  text-align: center;
  
  .column-title {
    margin-bottom: 0.5rem;
    font-size: 1.35rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.15rem;
    }
  }
  
  .column-badge {
    background: linear-gradient(135deg, #2ad0a2 0%, #22c55e 100%);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(42, 208, 162, 0.3);
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
      padding: 0.35rem 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    }
  }
}

.standard-column {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr;
  padding: 1.8rem 2.5rem;
  border-bottom: 1px solid rgba(42, 208, 162, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
    padding: 1.5rem 2rem;
  }
  
  &:hover,
  &.highlighted {
    background: rgba(42, 208, 162, 0.05);
    transform: scale(1.02);
    border-color: rgba(42, 208, 162, 0.3);
  }
  
  &:last-child {
    border-bottom: none;
  }
}

.parameter-cell {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  .parameter-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    
    svg {
      width: 28px;
      height: 28px;
      color: #2ad0a2;
    }
  }
  
  .parameter-name {
    font-weight: 600;
    font-size: 1.1rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
}

.std-cell,
.standard-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
}

.std-cell {
  .value.advantage {
    color: #2ad0a2;
    font-weight: 700;
    font-size: 1.15rem;
    
    @media (max-width: 768px) {
      font-size: 1.05rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  
  .advantage-indicator {
    color: #22c55e;
    font-weight: 900;
    font-size: 1.2rem;
  }
}

.standard-cell {
  .value {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.05rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
}

/* NEW ANIMATIONS */
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

@keyframes patternMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1.2); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
}

@keyframes hexagonFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(20px, -10px) rotate(2deg); }
  66% { transform: translate(-10px, 20px) rotate(-2deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

@keyframes titleShine {
  0% {
    background-position: -300% 0;
  }
  50% {
    background-position: 0% 0;
  }
  100% {
    background-position: 300% 0;
  }
}

@keyframes titleGlow {
  0% {
    background-position: -300% 0;
    opacity: 0.3;
  }
  50% {
    background-position: 0% 0;
    opacity: 0.8;
  }
  100% {
    background-position: 300% 0;
    opacity: 0.3;
  }
}

@keyframes lineShine {
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 208, 162, 0.6);
    transform: translateX(-50%) scale(1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 208, 162, 1), 0 0 80px rgba(42, 208, 162, 0.5);
    transform: translateX(-50%) scale(1.1);
  }
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0.3;
    background-position: 0% 0%, 100% 100%, 50% 50%;
  }
  25% {
    opacity: 0.7;
    background-position: 25% 25%, 75% 75%, 60% 40%;
  }
  50% {
    opacity: 1;
    background-position: 50% 50%, 50% 50%, 70% 70%;
  }
  75% {
    opacity: 0.7;
    background-position: 75% 75%, 25% 25%, 80% 30%;
  }
}

@keyframes linePulse {
  0%, 100% {
    width: 120px;
    opacity: 1;
  }
  50% {
    width: 200px;
    opacity: 0.8;
  }
}

/* Анимации переходов между вкладками */
.tab-content-enter-active {
  transition: all 0.4s ease-out;
}

.tab-content-leave-active {
  transition: all 0.3s ease-in;
}

.tab-content-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.98);
}

.tab-content-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.98);
}

.tab-content-enter-to,
.tab-content-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.advantage-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: rgba(42, 208, 162, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  svg {
    width: 32px;
    height: 32px;
    color: #2ad0a2;
    transition: all 0.3s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(42, 208, 162, 0.3), rgba(34, 197, 94, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
}

.advantage-card:hover .advantage-icon,
.advantage-card.active .advantage-icon {
  background: rgba(42, 208, 162, 0.2);
  transform: scale(1.1);
  
  &::before {
    opacity: 1;
  }
  
  svg {
    transform: scale(1.1);
  }
}

/* BREADCRUMB SECTION */
.breadcrumb-section {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(42, 208, 162, 0.1);
}

.breadcrumb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #64748b;
  
  .breadcrumb-link {
    color: #64748b;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 500;
    
    &:hover {
      color: #2ad0a2;
    }
  }
  
  .breadcrumb-separator {
    margin: 0 0.75rem;
    opacity: 0.6;
    color: #94a3b8;
  }
  
  .breadcrumb-current {
    color: #2ad0a2;
    font-weight: 600;
  }
}

/* === УНИФИКАЦИЯ КОНТЕЙНЕРОВ === */
.description-container,
.advantages-container,
.specs-container,
.software-container,
.documents-container,
.features-container,
.applications-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>