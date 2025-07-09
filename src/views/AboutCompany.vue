<template>
  <div class="about-company-page">
    <AppHeader />

    <!-- Используем PageBanner для страницы "О компании" -->
    <PageBanner 
      :title-lines="['О КОМПАНИИ', 'ТЕХНЕКОН']"
      subtitle="30+ лет инноваций в области вибродиагностики"
      theme="about"
    />

    <!-- Animated Background -->
    <div class="wave-background">
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
    </div>

    <main class="about-main">
      <!-- Live Statistics Dashboard -->
      <section class="live-stats" data-aos="zoom-in">
        <div class="stats-header">
          <h2 class="section-title">
            <span class="data-stream">СТАТИСТИКА В РЕАЛЬНОМ ВРЕМЕНИ</span>
          </h2>
          <div class="status-online">
            <div class="online-indicator"></div>
            <span>СИСТЕМА АКТИВНА</span>
          </div>
        </div>
        <div class="stats-grid">
          <div v-for="stat in liveStats" :key="stat.id" class="stat-widget" :data-aos="'flip-left'" :data-aos-delay="stat.id * 100">
            <div class="widget-header">
              <div class="widget-icon">
                <component :is="stat.icon" />
              </div>
              <div class="widget-status" :class="stat.status"></div>
            </div>
            <div class="widget-value">{{ stat.value }}</div>
            <div class="widget-label">{{ stat.label }}</div>
            <div class="widget-trend" :class="stat.trend">
              <span class="trend-arrow">{{ stat.trend === 'up' ? '↗' : '↙' }}</span>
              <span class="trend-value">{{ stat.change }}%</span>
            </div>
            <div class="data-stream-bg"></div>
          </div>
        </div>
      </section>

      <!-- Expert Team Section -->
      <section class="expert-team" data-aos="fade-up">
        <h2 class="section-title">
          <span class="team-title">КОМАНДА ЭКСПЕРТОВ</span>
        </h2>
        <div class="team-grid">
          <div v-for="expert in teamExperts" :key="expert.id" class="expert-card" :data-aos="'fade-up'" :data-aos-delay="expert.id * 150">
            <div class="expert-avatar">
              <div class="avatar-glow"></div>
              <div class="avatar-placeholder">{{ expert.initials }}</div>
              <div class="expert-status online"></div>
            </div>
            <div class="expert-info">
              <h3 class="expert-name">{{ expert.name }}</h3>
              <p class="expert-role">{{ expert.role }}</p>
              <p class="expert-experience">{{ expert.experience }} лет опыта</p>
              <div class="expert-skills">
                <span v-for="skill in expert.skills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
              <div class="expert-achievements">
                <div class="achievement" v-for="achievement in expert.achievements" :key="achievement.type">
                  <span class="achievement-icon">{{ achievement.icon }}</span>
                  <span class="achievement-count">{{ achievement.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Global Presence Interactive Map -->
      <section class="global-presence" data-aos="fade-in">
        <h2 class="section-title">
          <span class="global-title">МИРОВОЕ ПРИСУТСТВИЕ</span>
        </h2>
        <div class="map-container">
          <div class="world-map">
            <div class="map-background"></div>
            <div v-for="location in globalLocations" :key="location.id" 
                 class="location-point" 
                 :style="{ left: location.x + '%', top: location.y + '%' }"
                 :data-aos="'zoom-in'" 
                 :data-aos-delay="location.id * 200"
                 @mouseenter="showLocationInfo(location)"
                 @mouseleave="hideLocationInfo()">
              <div class="point-pulse"></div>
              <div class="point-core"></div>
              <div class="location-ripple"></div>
            </div>
            <div v-if="selectedLocation" class="location-tooltip" :style="{ left: selectedLocation.x + '%', top: selectedLocation.y + '%' }">
              <div class="tooltip-content">
                <h4>{{ selectedLocation.city }}</h4>
                <p>{{ selectedLocation.clients }} клиентов</p>
                <p>{{ selectedLocation.projects }} проектов</p>
              </div>
            </div>
          </div>
          <div class="presence-stats">
            <div class="presence-stat" v-for="stat in presenceStats" :key="stat.label">
              <div class="stat-icon">
                <component :is="stat.icon" />
              </div>
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Success Stories Carousel -->
      <section class="success-stories" data-aos="fade-up">
        <h2 class="section-title">
          <span class="stories-title">ИСТОРИИ УСПЕХА</span>
        </h2>
        <div class="stories-carousel">
          <div class="story-card" 
               v-for="(story, index) in successStories" 
               :key="story.id"
               :class="{ active: index === activeStory }"
               :data-aos="'slide-up'" 
               :data-aos-delay="index * 100">
            <div class="story-header">
              <div class="company-logo">{{ story.companyInitials }}</div>
              <div class="story-meta">
                <h3 class="company-name">{{ story.company }}</h3>
                <p class="story-industry">{{ story.industry }}</p>
                <div class="story-date">{{ story.year }}</div>
              </div>
            </div>
            <div class="story-challenge">
              <h4>Вызов:</h4>
              <p>{{ story.challenge }}</p>
            </div>
            <div class="story-solution">
              <h4>Решение:</h4>
              <p>{{ story.solution }}</p>
            </div>
            <div class="story-results">
              <h4>Результаты:</h4>
              <div class="results-grid">
                <div v-for="result in story.results" :key="result.metric" class="result-item">
                  <div class="result-value">{{ result.value }}</div>
                  <div class="result-metric">{{ result.metric }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-controls">
            <button v-for="(_story, index) in successStories" 
                    :key="index" 
                    class="carousel-dot" 
                    :class="{ active: index === activeStory }"
                    @click="activeStory = index">
            </button>
          </div>
        </div>
      </section>

      <!-- Client Testimonials -->
      <section class="testimonials" data-aos="fade-in">
        <h2 class="section-title">
          <span class="testimonials-title">ОТЗЫВЫ КЛИЕНТОВ</span>
        </h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" 
               class="testimonial-card" 
               :data-aos="'fade-up'" 
               :data-aos-delay="testimonial.id * 150">
            <div class="testimonial-content">
              <div class="quote-icon">💬</div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-rating">
                <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= testimonial.rating }">★</span>
              </div>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.authorInitials }}</div>
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.author }}</h4>
                <p class="author-position">{{ testimonial.position }}</p>
                <p class="author-company">{{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Section with Interactive Cards -->
      <section class="mission" data-aos="fade-up">
        <div class="section-header">
          <h2 class="section-title">
            <span class="tech-border">НАША МИССИЯ</span>
          </h2>
          <div class="signal-strength">
            <div class="signal-bar" v-for="i in 5" :key="i"></div>
          </div>
        </div>
        
        <div class="mission-container">
          <div class="mission-text-card">
            <div class="hologram-effect"></div>
            <p class="mission-text">
              Мы создаём передовые системы диагностики и защиты промышленного оборудования,
              помогая предприятиям по всему миру повышать надёжность и эффективность своих
              производственных процессов.
            </p>
          </div>
          
          <div class="values-grid">
            <div 
              v-for="(value, i) in values" 
              :key="i" 
              class="value-card"
              :data-aos="'zoom-in'" 
              :data-aos-delay="i*150"
              @mouseenter="playVibration"
            >
              <div class="card-glow"></div>
              <div class="diagnostic-icon-mini">{{ getValueIcon(i) }}</div>
              <div class="value-text">{{ value }}</div>
              <div class="frequency-line"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications & Awards -->
      <section class="certifications" data-aos="fade-up">
        <h2 class="section-title">
          <span class="cert-title">СЕРТИФИКАТЫ И НАГРАДЫ</span>
        </h2>
        <div class="certifications-container">
          <div class="awards-showcase">
            <div v-for="award in awards" :key="award.id" 
                 class="award-item" 
                 :data-aos="'flip-up'" 
                 :data-aos-delay="award.id * 100">
              <div class="award-icon">{{ award.icon }}</div>
              <div class="award-title">{{ award.title }}</div>
              <div class="award-year">{{ award.year }}</div>
              <div class="award-glow"></div>
            </div>
          </div>
          <div class="certifications-grid">
            <div v-for="cert in certifications" :key="cert.id" 
                 class="cert-card" 
                 :data-aos="'zoom-in'" 
                 :data-aos-delay="cert.id * 120">
              <div class="cert-badge">
                <div class="cert-icon">{{ cert.icon }}</div>
              </div>
              <div class="cert-info">
                <h4 class="cert-name">{{ cert.name }}</h4>
                <p class="cert-authority">{{ cert.authority }}</p>
                <p class="cert-validity">Действителен до {{ cert.validUntil }}</p>
              </div>
              <div class="cert-verified">
                <span class="verified-icon">✓</span>
                <span>Верифицирован</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Facts Section -->
      <section class="facts" data-aos="fade-up">
        <div class="matrix-bg"></div>
        <h2 class="section-title">
          <span class="neon-text">ДИАГНОСТИЧЕСКИЕ ДАННЫЕ</span>
        </h2>
        <div class="facts-container">
          <div 
            v-for="fact in facts" 
            :key="fact.id" 
            class="fact-card-modern"
            :data-aos="'flip-up'" 
            :data-aos-delay="fact.id * 100"
            @mouseenter="activateFact(fact.id)"
            @mouseleave="deactivateFact(fact.id)"
          >
            <div class="card-scanner"></div>
            <div class="fact-display">
              <div class="fact-number-modern">{{ fact.number }}</div>
              <div class="fact-label-modern">{{ fact.label }}</div>
            </div>
            <div class="vibration-waves">
              <div class="wave-small" v-for="j in 3" :key="j"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- R&D Innovation Lab -->
      <section class="innovation-lab" data-aos="fade-in">
        <h2 class="section-title">
          <span class="lab-title">ЛАБОРАТОРИЯ ИННОВАЦИЙ</span>
        </h2>
        <div class="lab-container">
          <div class="lab-stats">
            <div v-for="stat in labStats" :key="stat.id" 
                 class="lab-stat" 
                 :data-aos="'slide-right'" 
                 :data-aos-delay="stat.id * 100">
              <div class="stat-icon-large">{{ stat.icon }}</div>
              <div class="stat-value-large">{{ stat.value }}</div>
              <div class="stat-label-large">{{ stat.label }}</div>
              <div class="stat-progress">
                <div class="progress-fill" :style="{ width: stat.progress + '%' }"></div>
              </div>
            </div>
          </div>
          <div class="research-areas">
            <h3 class="research-title">ТЕКУЩИЕ ИССЛЕДОВАНИЯ</h3>
            <div class="research-grid">
              <div v-for="research in researchAreas" :key="research.id" 
                   class="research-item" 
                   :data-aos="'fade-up'" 
                   :data-aos-delay="research.id * 150">
                <div class="research-icon">{{ research.icon }}</div>
                <div class="research-info">
                  <h4 class="research-name">{{ research.name }}</h4>
                  <p class="research-description">{{ research.description }}</p>
                  <div class="research-progress">
                    <div class="progress-bar-research" :style="{ width: research.progress + '%' }"></div>
                    <span class="progress-text">{{ research.progress }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Partnership Ecosystem -->
      <section class="partnerships" data-aos="fade-up">
        <h2 class="section-title">
          <span class="partnership-title">ЭКОСИСТЕМА ПАРТНЕРСТВА</span>
        </h2>
        <div class="partners-network">
          <div class="network-center">
            <div class="center-logo">TEHNEKON</div>
            <div class="center-pulse"></div>
          </div>
          <div v-for="partner in partners" :key="partner.id" 
               class="partner-node" 
               :style="{ transform: `rotate(${partner.angle}deg) translateX(200px) rotate(-${partner.angle}deg)` }"
               :data-aos="'zoom-in'" 
               :data-aos-delay="partner.id * 100">
            <div class="partner-logo">{{ partner.name }}</div>
            <div class="partner-type">{{ partner.type }}</div>
            <div class="connection-line" :style="{ transform: `rotate(${partner.angle + 180}deg)` }"></div>
          </div>
        </div>
        <div class="partnership-benefits">
          <div v-for="benefit in partnershipBenefits" :key="benefit.id" 
               class="benefit-card" 
               :data-aos="'slide-up'" 
               :data-aos-delay="benefit.id * 150">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <h4 class="benefit-title">{{ benefit.title }}</h4>
            <p class="benefit-description">{{ benefit.description }}</p>
          </div>
        </div>
      </section>

      <!-- Enhanced Timeline with Diagnostic Theme -->
      <section class="timeline-wrapper" data-aos="fade-up">
        <h2 class="section-title">
          <span class="circuit-text">ЭВОЛЮЦИЯ ТЕХНОЛОГИЙ</span>
        </h2>
        <div class="timeline-modern">
          <div class="timeline-line"></div>
          <div 
            v-for="(event, index) in timeline" 
            :key="index" 
            class="timeline-item-modern"
            :class="{ 'timeline-left': index % 2 === 0, 'timeline-right': index % 2 === 1 }"
            :data-aos="'fade-' + (index % 2 === 0 ? 'right' : 'left')" 
            :data-aos-delay="index * 150"
          >
            <div class="timeline-point">
              <div class="point-pulse"></div>
              <div class="point-core">{{ index + 1 }}</div>
            </div>
            <div class="timeline-card-modern">
              <div class="card-header">
                <div class="year-display">{{ event.year }}</div>
                <div class="status-indicator active"></div>
              </div>
              <div class="timeline-content-modern">{{ event.text }}</div>
              <div class="diagnostic-grid">
                <div class="grid-dot" v-for="k in 24" :key="k"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technology Innovation Section -->
      <section class="innovation-section" data-aos="zoom-in">
        <div class="innovation-bg">
          <div class="circuit-pattern"></div>
        </div>
        <div class="innovation-content">
          <h2 class="innovation-title">БУДУЩЕЕ ДИАГНОСТИКИ</h2>
          <div class="tech-showcase">
            <div class="tech-item" v-for="tech in technologies" :key="tech.id">
              <div class="tech-icon">{{ tech.icon }}</div>
              <div class="tech-name">{{ tech.name }}</div>
              <div class="tech-progress">
                <div class="progress-bar" :style="{ width: tech.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA Section -->
      <section class="contact-cta" data-aos="fade-up">
        <div class="cta-content">
          <h2 class="cta-title">ГОТОВЫ К СОТРУДНИЧЕСТВУ?</h2>
          <p class="cta-subtitle">Свяжитесь с нами для консультации по вашему проекту</p>
          <div class="cta-buttons">
            <button class="cta-btn primary">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
            <button class="cta-btn secondary">СКАЧАТЬ КАТАЛОГ</button>
          </div>
          <div class="contact-methods">
            <div class="contact-method" v-for="method in contactMethods" :key="method.type">
              <div class="method-icon">
                <component :is="method.icon" />
              </div>
              <div class="method-info">
                <div class="method-label">{{ method.label }}</div>
                <div class="method-value">{{ method.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
/// <reference types="vue" />
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import PageBanner from '@/components/PageBanner.vue';

const activeFact = ref<number | null>(null);
const activeStory = ref<number>(0);
const selectedLocation = ref<any>(null);

// Auto-rotate success stories
onMounted(() => {
  AOS.refresh();
  
  setInterval(() => {
    activeStory.value = (activeStory.value + 1) % successStories.length;
  }, 5000);
});

const values = [
  'Инновации и научный подход',
  'Качество и надёжность продукции',
  'Партнёрство и поддержка клиентов',
  'Экологическая ответственность'
];

const getValueIcon = (index: number): string => {
  const icons = ['🔬', '⚙️', '🤝', '🌱'];
  return icons[index] || '⚡';
};

// Live Statistics
const liveStats = [
  { id: 1, icon: 'AnalyticsIcon', value: '15,847', label: 'Активных систем', status: 'normal', trend: 'up', change: '+12' },
  { id: 2, icon: 'PowerIcon', value: '99.8%', label: 'Время работы', status: 'excellent', trend: 'up', change: '+0.2' },
  { id: 3, icon: 'SearchIcon', value: '2,456', label: 'Диагностик сегодня', status: 'normal', trend: 'up', change: '+8' },
  { id: 4, icon: 'SafetyIcon', value: '0', label: 'Критических событий', status: 'excellent', trend: 'down', change: '-100' }
];

// Team Experts
const teamExperts = [
  {
    id: 1,
    name: 'Александр Петров',
    role: 'Главный инженер по вибродиагностике',
    experience: 25,
    initials: 'АП',
    skills: ['Machine Learning', 'FFT Analysis', 'Predictive Maintenance'],
    achievements: [
      { type: 'patents', icon: '🏆', count: 12 },
      { type: 'projects', icon: '📋', count: 150 },
      { type: 'certifications', icon: '🎓', count: 8 }
    ]
  },
  {
    id: 2,
    name: 'Мария Волкова',
    role: 'Директор по НИОКР',
    experience: 18,
    initials: 'МВ',
    skills: ['IoT Systems', 'Neural Networks', 'Signal Processing'],
    achievements: [
      { type: 'patents', icon: '🏆', count: 8 },
      { type: 'projects', icon: '📋', count: 95 },
      { type: 'certifications', icon: '🎓', count: 12 }
    ]
  },
  {
    id: 3,
    name: 'Дмитрий Иванов',
    role: 'Ведущий специалист по ИИ',
    experience: 12,
    initials: 'ДИ',
    skills: ['Deep Learning', 'Computer Vision', 'Anomaly Detection'],
    achievements: [
      { type: 'patents', icon: '🏆', count: 5 },
      { type: 'projects', icon: '📋', count: 78 },
      { type: 'certifications', icon: '🎓', count: 15 }
    ]
  }
];

// Global Presence
const globalLocations = [
  { id: 1, city: 'Москва', x: 55, y: 35, clients: 450, projects: 1200 },
  { id: 2, city: 'Берлин', x: 48, y: 40, clients: 280, projects: 750 },
  { id: 3, city: 'Токио', x: 85, y: 45, clients: 320, projects: 890 },
  { id: 4, city: 'Нью-Йорк', x: 25, y: 42, clients: 380, projects: 1050 },
  { id: 5, city: 'Дубай', x: 60, y: 50, clients: 150, projects: 420 }
];

const presenceStats = [
  { icon: 'GlobalIcon', value: '45+', label: 'стран' },
  { icon: 'FactoryIcon', value: '1500+', label: 'заводов' },
  { icon: 'HandshakeIcon', value: '5000+', label: 'клиентов' },
  { icon: 'TrendIcon', value: '98%', label: 'удовлетворенность' }
];

// Success Stories
const successStories = [
  {
    id: 1,
    company: 'ГазпромНефть',
    companyInitials: 'ГН',
    industry: 'Нефтегазовая промышленность',
    year: '2023',
    challenge: 'Частые аварийные остановки компрессорных станций приводили к потерям $2M в месяц',
    solution: 'Внедрение системы STD-3300 с ИИ-анализом и предиктивной диагностикой',
    results: [
      { metric: 'Снижение простоев', value: '85%' },
      { metric: 'Экономия', value: '$24M/год' },
      { metric: 'Точность прогнозов', value: '96%' }
    ]
  },
  {
    id: 2,
    company: 'МЕТАЛЛОИНВЕСТ',
    companyInitials: 'МИ',
    industry: 'Металлургия',
    year: '2022',
    challenge: 'Износ прокатных станов не прогнозировался, что приводило к незапланированным ремонтам',
    solution: 'Комплексная система мониторинга с датчиками вибрации и температуры',
    results: [
      { metric: 'Планируемость ремонтов', value: '92%' },
      { metric: 'Продление ресурса', value: '40%' },
      { metric: 'ROI', value: '340%' }
    ]
  },
  {
    id: 3,
    company: 'РусГидро',
    companyInitials: 'РГ',
    industry: 'Энергетика',
    year: '2023',
    challenge: 'Критическое состояние турбоагрегатов ГЭС требовало постоянного мониторинга',
    solution: 'Облачная платформа с удаленной диагностикой и мобильными уведомлениями',
    results: [
      { metric: 'Доступность', value: '99.7%' },
      { metric: 'Раннее обнаружение', value: '95%' },
      { metric: 'Экономия ресурсов', value: '$18M' }
    ]
  }
];

// Testimonials
const testimonials = [
  {
    id: 1,
    text: 'Система Технекон спасла нас от катастрофической аварии. ИИ обнаружил проблему за 3 недели до критического момента.',
    author: 'Сергей Михайлов',
    authorInitials: 'СМ',
    position: 'Главный энергетик',
    company: 'НЛМК',
    rating: 5
  },
  {
    id: 2,
    text: 'Невероятная точность диагностики! За год использования не было ни одного ложного срабатывания.',
    author: 'Елена Козлова',
    authorInitials: 'ЕК',
    position: 'Директор по техническому обслуживанию',
    company: 'ТатНефть',
    rating: 5
  },
  {
    id: 3,
    text: 'Команда поддержки работает 24/7. Любая проблема решается в течение часа. Это настоящий сервис!',
    author: 'Андрей Смирнов',
    authorInitials: 'АС',
    position: 'Технический директор',
    company: 'Северсталь',
    rating: 5
  }
];

// Awards and Certifications
const awards = [
  { id: 1, icon: '🏆', title: 'Лучшая инновация года', year: '2023' },
  { id: 2, icon: '🥇', title: 'Премия за качество', year: '2022' },
  { id: 3, icon: '⭐', title: 'Экспортер года', year: '2023' },
  { id: 4, icon: '🎖️', title: 'Технологический прорыв', year: '2021' }
];

const certifications = [
  { id: 1, name: 'ISO 9001:2015', authority: 'TÜV NORD', validUntil: '2025', icon: '📋' },
  { id: 2, name: 'IEC 61508', authority: 'SGS', validUntil: '2024', icon: '⚡' },
  { id: 3, name: 'ГОСТ Р ИСО 14001', authority: 'Росстандарт', validUntil: '2026', icon: '🌱' },
  { id: 4, name: 'CE Marking', authority: 'Европейская комиссия', validUntil: '2025', icon: '🇪🇺' }
];

// R&D Lab Statistics
const labStats = [
  { id: 1, icon: '🧪', value: '24', label: 'Активных проекта', progress: 85 },
  { id: 2, icon: '🎓', value: '45', label: 'Исследователей', progress: 92 },
  { id: 3, icon: '💡', value: '156', label: 'Патентов', progress: 78 },
  { id: 4, icon: '🔬', value: '8', label: 'Лабораторий', progress: 100 }
];

const researchAreas = [
  { id: 1, icon: '🤖', name: 'Квантовые вычисления', description: 'Разработка квантовых алгоритмов для сверхточной диагностики', progress: 45 },
  { id: 2, icon: '🧠', name: 'Нейроморфные чипы', description: 'Создание специализированных процессоров для ИИ-анализа', progress: 67 },
  { id: 3, icon: '📡', name: '6G сенсоры', description: 'Беспроводные датчики нового поколения', progress: 23 },
  { id: 4, icon: '🌐', name: 'Цифровые двойники', description: 'Полная виртуализация промышленных объектов', progress: 78 }
];

// Partnership Network
const partners = [
  { id: 1, name: 'Siemens', type: 'Технологический', angle: 0 },
  { id: 2, name: 'SAP', type: 'ИТ-партнер', angle: 60 },
  { id: 3, name: 'Microsoft', type: 'Облачные решения', angle: 120 },
  { id: 4, name: 'Intel', type: 'Аппаратное обеспечение', angle: 180 },
  { id: 5, name: 'Bosch', type: 'Промышленный ИИ', angle: 240 },
  { id: 6, name: 'NVIDIA', type: 'Вычисления', angle: 300 }
];

const partnershipBenefits = [
  { id: 1, icon: '⚡', title: 'Ускоренная разработка', description: 'Сокращение времени вывода продукта на рынок на 40%' },
  { id: 2, icon: '🎯', title: 'Экспертиза мирового уровня', description: 'Доступ к передовым технологиям и know-how' },
  { id: 3, icon: '🌍', title: 'Глобальный рынок', description: 'Выход на международные рынки через партнерскую сеть' }
];

// Contact Methods
const contactMethods = [
  { type: 'phone', icon: 'PhoneIcon', label: 'Телефон', value: '+7 (499) 744-60-17' },
  { type: 'email', icon: 'EmailIcon', label: 'Email', value: 'sales@tehnekon.ru' },
  { type: 'telegram', icon: 'ChatIcon', label: 'Telegram', value: '@tehnekon_support' },
  { type: 'whatsapp', icon: 'MobileIcon', label: 'WhatsApp', value: '+7 (999) 123-45-67' }
];

interface Fact { id: number; number: string; label: string }

const facts: Fact[] = [
  { id: 1, number: '1992', label: 'год основания' },
  { id: 2, number: '50+', label: 'моделей оборудования' },
  { id: 3, number: '1000+', label: 'клиентов по всему миру' },
  { id: 4, number: '20', label: 'патентов и авторских разработок' }
];

interface TimelineEvent { year: string; text: string }
const timeline: TimelineEvent[] = [
  { year: '1992', text: 'Основание компании и запуск первых разработок системы вибродиагностики.' },
  { year: '1995', text: 'Выпуск революционной линейки датчиков вибродиагностики с ИИ-анализом.' },
  { year: '2004', text: 'Открыт НИОКР-центр и запущено высокотехнологичное производство в Москве.' },
  { year: '2012', text: 'Глобальная экспансия: выход на рынки Европы и Азии с инновационными решениями.' },
  { year: '2018', text: 'Запуск STD-серии виброанализаторов с технологией машинного обучения.' },
  { year: '2024', text: 'Представлена облачная платформа дистанционной диагностики нового поколения.' }
];

interface Technology {
  id: number;
  name: string;
  icon: string;
  progress: number;
}

const technologies: Technology[] = [
  { id: 1, name: 'AI Диагностика', icon: '🤖', progress: 95 },
  { id: 2, name: 'IoT Сенсоры', icon: '📡', progress: 88 },
  { id: 3, name: 'Облачные решения', icon: '☁️', progress: 92 },
  { id: 4, name: 'Квантовый анализ', icon: '⚛️', progress: 75 }
];

const playVibration = () => {
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
};

const activateFact = (id: number) => {
  activeFact.value = id;
};

const deactivateFact = (_id: number) => {
  activeFact.value = null;
};

const showLocationInfo = (location: any) => {
  selectedLocation.value = location;
};

const hideLocationInfo = () => {
  selectedLocation.value = null;
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.about-company-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

/* Animated Wave Background */
.wave-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
}

.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba($primary-color, 0.2), transparent);
  animation: wave-animation 8s ease-in-out infinite;
  
  &.wave-1 { animation-delay: 0s; }
  &.wave-2 { animation-delay: 2s; transform: rotate(45deg); }
  &.wave-3 { animation-delay: 4s; transform: rotate(90deg); }
}

@keyframes wave-animation {
  0%, 100% { transform: translateX(-100%) scale(0.8); }
  50% { transform: translateX(100%) scale(1.2); }
}

.about-main {
  flex: 1;
  position: relative;
}

/* Hero Section with Vibration Effects */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #1e293b;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  z-index: 2;
}

.vibration-indicator {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 3px solid $primary-color;
  border-radius: 50%;
  animation: pulse 2s ease-out infinite;
  
  &.delay-1 { animation-delay: 0.5s; }
  &.delay-2 { animation-delay: 1s; }
}

@keyframes pulse {
  0% { opacity: 1; transform: translate(-50%, -50%) scale(0.8); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
}

.diagnostic-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: $primary-color;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.glitch {
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    animation: glitch 2s infinite;
    color: #ff00ff;
    z-index: -1;
  }
  
  &::after {
    animation: glitch 2s infinite reverse;
    color: #00ffff;
    z-index: -2;
  }
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  10% { transform: translate(-2px, 2px); }
  20% { transform: translate(2px, -2px); }
  30% { transform: translate(-2px, -2px); }
  40% { transform: translate(2px, 2px); }
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: 3px solid $primary-color;
  white-space: nowrap;
  animation: typewriter 4s steps(40) 1s forwards, blink 0.8s infinite;
  width: 0;
}

@keyframes typewriter {
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { border-color: $primary-color; }
  51%, 100% { border-color: transparent; }
}

.frequency-bars {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 2rem;
}

.bar {
  width: 4px;
  height: 20px;
  background: $primary-color;
  animation: frequency 1.5s ease-in-out infinite;
}

@keyframes frequency {
  0%, 100% { height: 20px; }
  50% { height: 60px; }
}

/* Floating Diagnostic Charts */
.floating-diagnostics {
  position: absolute;
  top: 20%;
  right: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;
}

.diagnostic-chart {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 150px;
  animation: float 3s ease-in-out infinite;
  
  &.chart-2 { animation-delay: 1s; }
  &.chart-3 { animation-delay: 2s; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.chart-line {
  height: 30px;
  background: linear-gradient(90deg, $primary-color, transparent);
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: scan 2s linear infinite;
  }
  
  &.warning {
    background: linear-gradient(90deg, #ffa500, transparent);
  }
  
  &.danger {
    background: linear-gradient(90deg, #ff4444, transparent);
  }
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.chart-data {
  font-size: 0.8rem;
  color: #64748b;
  text-align: center;
}

/* Section Styling */
.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  position: relative;
}

.tech-border {
  display: inline-block;
  padding: 0.5rem 2rem;
  border: 2px solid $primary-color;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid $primary-color;
  }
  
  &::before {
    top: -2px;
    left: -2px;
    border-bottom: none;
    border-right: none;
  }
  
  &::after {
    bottom: -2px;
    right: -2px;
    border-top: none;
    border-left: none;
  }
}

.neon-text {
  color: $primary-color;
  text-shadow: 
    0 0 5px $primary-color,
    0 0 10px $primary-color,
    0 0 15px $primary-color,
    0 0 20px $primary-color;
  animation: neon-flicker 2s ease-in-out infinite;
}

@keyframes neon-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.circuit-text {
  background: linear-gradient(45deg, $primary-color, #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, $primary-color, transparent);
    animation: circuit-flow 2s ease-in-out infinite;
  }
}

@keyframes circuit-flow {
  0%, 100% { width: 100px; opacity: 1; }
  50% { width: 200px; opacity: 0.5; }
}

/* Mission Section */
.mission {
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.signal-strength {
  display: flex;
  gap: 4px;
}

.signal-bar {
  width: 6px;
  background: $primary-color;
  animation: signal 1.5s ease-in-out infinite;
  
  &:nth-child(1) { height: 10px; animation-delay: 0s; }
  &:nth-child(2) { height: 20px; animation-delay: 0.2s; }
  &:nth-child(3) { height: 30px; animation-delay: 0.4s; }
  &:nth-child(4) { height: 40px; animation-delay: 0.6s; }
  &:nth-child(5) { height: 50px; animation-delay: 0.8s; }
}

@keyframes signal {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.mission-container {
  display: grid;
  gap: 3rem;
}

.mission-text-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.hologram-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
  animation: hologram 3s ease-in-out infinite;
}

@keyframes hologram {
  0% { left: -100%; }
  100% { left: 100%; }
}

.mission-text {
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  margin: 0;
  z-index: 1;
  position: relative;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border: 1px solid $primary-color;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba($primary-color, 0.2);
  }
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba($primary-color, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.value-card:hover .card-glow {
  opacity: 1;
  animation: glow-rotate 2s linear infinite;
}

@keyframes glow-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.diagnostic-icon-mini {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.value-text {
  color: #475569;
  font-weight: 500;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.frequency-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, $primary-color, transparent);
  animation: frequency-flow 2s ease-in-out infinite;
}

@keyframes frequency-flow {
  0%, 100% { transform: scaleX(0.5); opacity: 0.5; }
  50% { transform: scaleX(1); opacity: 1; }
}

/* Facts Section */
.facts {
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba($primary-color, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 50%, rgba($primary-color, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: matrix-move 10s linear infinite;
}

@keyframes matrix-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

.facts-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.fact-card-modern {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0 25px 50px rgba($primary-color, 0.15);
  }
}

.card-scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgba($primary-color, 0.1), transparent);
  animation: scanner 3s ease-in-out infinite;
}

@keyframes scanner {
  0% { transform: translateY(-100%); }
  50% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}

.fact-display {
  text-align: center;
  position: relative;
  z-index: 1;
}

.fact-number-modern {
  font-size: 3rem;
  font-weight: 800;
  color: $primary-color;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba($primary-color, 0.5);
}

.fact-label-modern {
  color: #64748b;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
}

.vibration-waves {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.wave-small {
  width: 4px;
  height: 4px;
  background: $primary-color;
  border-radius: 50%;
  animation: wave-small 1.5s ease-in-out infinite;
  
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.6s; }
}

@keyframes wave-small {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.7; }
}

/* Timeline Section */
.timeline-wrapper {
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline-modern {
  position: relative;
  margin-top: 3rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, transparent, $primary-color, transparent);
  transform: translateX(-50%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: $primary-color;
    border-radius: 50%;
    animation: timeline-pulse 2s ease-in-out infinite;
  }
}

@keyframes timeline-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba($primary-color, 0.7); }
  50% { box-shadow: 0 0 0 20px rgba($primary-color, 0); }
}

.timeline-item-modern {
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  
  &.timeline-left {
    justify-content: flex-end;
    
    .timeline-card-modern {
      margin-right: 3rem;
    }
  }
  
  &.timeline-right {
    justify-content: flex-start;
    
    .timeline-card-modern {
      margin-left: 3rem;
    }
  }
}

.timeline-point {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, $primary-color, #00ffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 30px rgba($primary-color, 0.5);
}

.point-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid $primary-color;
  border-radius: 50%;
  animation: point-pulse 2s ease-out infinite;
}

@keyframes point-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

.point-core {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.timeline-card-modern {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 15px;
  padding: 2rem;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.year-display {
  font-size: 1.5rem;
  font-weight: bold;
  color: $primary-color;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #00ff00;
  animation: status-blink 2s ease-in-out infinite;
  
  &.active {
    box-shadow: 0 0 10px #00ff00;
  }
}

@keyframes status-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.timeline-content-modern {
  color: #475569;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.diagnostic-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
  margin-top: 1rem;
}

.grid-dot {
  width: 4px;
  height: 4px;
  background: rgba($primary-color, 0.3);
  border-radius: 50%;
  animation: grid-flicker 3s ease-in-out infinite;
}

.grid-dot:nth-child(odd) {
  animation-delay: 0.5s;
}

@keyframes grid-flicker {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; background: $primary-color; }
}

/* Innovation Section */
.innovation-section {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
}

.innovation-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.circuit-pattern {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, $primary-color 1px, transparent 1px),
    linear-gradient(180deg, $primary-color 1px, transparent 1px);
  background-size: 50px 50px;
  animation: circuit-pattern-move 20s linear infinite;
}

@keyframes circuit-pattern-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.innovation-content {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.innovation-title {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, $primary-color, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(90deg); }
}

.tech-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.tech-item {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba($primary-color, 0.15);
  }
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.tech-name {
  color: #334155;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.tech-progress {
  background: rgba(255, 255, 255, 0.1);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, $primary-color, #00ffff);
  border-radius: 4px;
  transition: width 2s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: progress-shimmer 2s ease-in-out infinite;
  }
}

@keyframes progress-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Live Statistics Dashboard */
.live-stats {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.data-stream {
  color: #00ff41;
  text-shadow: 0 0 10px #00ff41;
  animation: data-flicker 2s ease-in-out infinite;
}

@keyframes data-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.status-online {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00ff41;
  font-weight: 600;
}

.online-indicator {
  width: 12px;
  height: 12px;
  background: #00ff41;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-widget {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba($primary-color, 0.3);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.2);
  }
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.widget-icon {
  font-size: 2rem;
}

.widget-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  
  &.normal { background: #00ff41; }
  &.excellent { background: #00ffff; }
  &.warning { background: #ffa500; }
  &.danger { background: #ff4444; }
}

.widget-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: $primary-color;
  margin-bottom: 0.5rem;
}

.widget-label {
  color: #64748b;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.widget-trend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  
  &.up { color: #00ff41; }
  &.down { color: #ff4444; }
}

.data-stream-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.1), transparent);
  animation: data-stream 3s ease-in-out infinite;
}

@keyframes data-stream {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Expert Team Section */
.expert-team {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
}

.team-title {
  color: $primary-color;
  text-shadow: 0 0 20px rgba($primary-color, 0.5);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.expert-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba($primary-color, 0.15);
  }
}

.expert-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba($primary-color, 0.3), transparent);
  border-radius: 50%;
  animation: avatar-pulse 3s ease-in-out infinite;
}

@keyframes avatar-pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, $primary-color, #00ffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  position: relative;
  z-index: 1;
}

.expert-status {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid white;
  
  &.online { background: #00ff41; }
}

.expert-info {
  flex: 1;
  color: #334155;
}

.expert-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: $primary-color;
}

.expert-role {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #475569;
}

.expert-experience {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1rem;
}

.expert-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-tag {
  background: rgba($primary-color, 0.2);
  color: $primary-color;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba($primary-color, 0.3);
}

.expert-achievements {
  display: flex;
  gap: 1rem;
}

.achievement {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
}

.achievement-icon {
  font-size: 1.1rem;
}

/* Global Presence Map */
.global-presence {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #ffffff, #f1f5f9);
  color: #1e293b;
}

.global-title {
  background: linear-gradient(45deg, $primary-color, #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
}

.world-map {
  position: relative;
  height: 400px;
  margin-bottom: 3rem;
  border-radius: 20px;
  overflow: hidden;
}

.map-background {
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba($primary-color, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc, #e2e8f0);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba($primary-color, 0.08) 10px, rgba($primary-color, 0.08) 11px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba($primary-color, 0.08) 10px, rgba($primary-color, 0.08) 11px);
  }
}

.location-point {
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 2;
}

.point-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid $primary-color;
  border-radius: 50%;
  animation: point-pulse 2s ease-out infinite;
}

.point-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: $primary-color;
  border-radius: 50%;
  box-shadow: 0 0 15px $primary-color;
}

.location-ripple {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba($primary-color, 0.5);
  border-radius: 50%;
  animation: ripple 3s ease-out infinite;
}

@keyframes ripple {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}

.location-tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid $primary-color;
  pointer-events: none;
  z-index: 10;
  transform: translate(-50%, -120%);
}

.tooltip-content h4 {
  margin: 0 0 0.5rem 0;
  color: $primary-color;
}

.tooltip-content p {
  margin: 0.2rem 0;
  font-size: 0.9rem;
}

.presence-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.presence-stat {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba($primary-color, 0.1), rgba(0, 255, 255, 0.1));
  border-radius: 15px;
  border: 1px solid rgba($primary-color, 0.3);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: $primary-color;
  margin-bottom: 0.5rem;
}

.stat-label {
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0.9;
}

/* Success Stories Carousel */
.success-stories {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #e2e8f0, #f1f5f9);
}

.stories-title {
  color: #1e293b;
  text-shadow: 0 0 20px rgba($primary-color, 0.3);
}

.stories-carousel {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.story-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  opacity: 0.3;
  transform: scale(0.95);
  transition: all 0.5s ease;
  display: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &.active {
    opacity: 1;
    transform: scale(1);
    display: block;
  }
}

.story-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.company-logo {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, $primary-color, #00ffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.story-meta {
  flex: 1;
  color: #334155;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: $primary-color;
}

.story-industry {
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.story-date {
  background: rgba($primary-color, 0.2);
  color: $primary-color;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  display: inline-block;
}

.story-challenge,
.story-solution {
  margin-bottom: 1.5rem;
  color: #475569;
}

.story-challenge h4,
.story-solution h4,
.story-results h4 {
  color: $primary-color;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.result-item {
  text-align: center;
  padding: 1rem;
  background: rgba($primary-color, 0.1);
  border-radius: 10px;
  border: 1px solid rgba($primary-color, 0.3);
}

.result-value {
  font-size: 2rem;
  font-weight: 800;
  color: $primary-color;
  margin-bottom: 0.3rem;
}

.result-metric {
  font-size: 0.9rem;
  color: #64748b;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba($primary-color, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    background: $primary-color;
    box-shadow: 0 0 15px $primary-color;
  }
}

/* Testimonials */
.testimonials {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
}

.testimonials-title {
  color: #1e293b;
  text-shadow: 0 0 20px rgba($primary-color, 0.3);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba($primary-color, 0.15);
  }
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.quote-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: $primary-color;
}

.testimonial-text {
  color: #475569;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.testimonial-rating {
  margin-bottom: 1rem;
}

.star {
  color: #444;
  font-size: 1.2rem;
  margin-right: 0.2rem;
  
  &.filled {
    color: #ffd700;
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, $primary-color, #00ffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.author-info {
  color: #334155;
}

.author-name {
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: $primary-color;
}

.author-position,
.author-company {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.2rem;
}

/* Certifications & Awards */
.certifications {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
}

.cert-title {
  color: #1e293b;
  text-shadow: 0 0 20px rgba($primary-color, 0.3);
}

.certifications-container {
  max-width: 1200px;
  margin: 0 auto;
}

.awards-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.award-item {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2));
  border: 2px solid #ffd700;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.3);
  }
}

.award-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.award-title {
  color: #ffd700;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.award-year {
  color: #64748b;
}

.award-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.1), transparent);
  animation: award-glow 3s ease-in-out infinite;
}

@keyframes award-glow {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.cert-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.15);
  }
}

.cert-badge {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, $primary-color, #00ffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.cert-info {
  flex: 1;
  color: #334155;
}

.cert-name {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: $primary-color;
}

.cert-authority,
.cert-validity {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.3rem;
}

.cert-verified {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00ff41;
  font-size: 0.9rem;
  font-weight: 500;
}

.verified-icon {
  background: #00ff41;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

/* R&D Innovation Lab */
.innovation-lab {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #e2e8f0, #f1f5f9);
  color: #1e293b;
}

.lab-title {
  background: linear-gradient(45deg, $primary-color, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: lab-glow 3s ease-in-out infinite;
}

@keyframes lab-glow {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(90deg); }
}

.lab-container {
  max-width: 1200px;
  margin: 0 auto;
}

.lab-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.lab-stat {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba($primary-color, 0.15);
  }
}

.stat-icon-large {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.stat-value-large {
  font-size: 2.5rem;
  font-weight: 800;
  color: $primary-color;
  margin-bottom: 0.5rem;
}

.stat-label-large {
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 500;
}

.stat-progress {
  background: rgba(255, 255, 255, 0.1);
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, $primary-color, #00ffff);
  border-radius: 3px;
  transition: width 2s ease;
}

.research-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: $primary-color;
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.research-item {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.15);
  }
}

.research-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.research-info {
  flex: 1;
}

.research-name {
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: $primary-color;
}

.research-description {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.research-progress {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-research {
  height: 100%;
  background: linear-gradient(90deg, $primary-color, #00ffff);
  border-radius: 4px;
  transition: width 2s ease;
}

.progress-text {
  position: absolute;
  top: -25px;
  right: 0;
  font-size: 0.8rem;
  color: $primary-color;
  font-weight: 600;
}

/* Partnership Ecosystem */
.partnerships {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  overflow: hidden;
}

.partnership-title {
  color: #1e293b;
  text-shadow: 0 0 20px rgba($primary-color, 0.3);
}

.partners-network {
  position: relative;
  height: 500px;
  margin: 4rem auto;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.network-center {
  position: absolute;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, $primary-color, #00ffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1rem;
  z-index: 2;
}

.center-pulse {
  position: absolute;
  width: 140px;
  height: 140px;
  border: 2px solid $primary-color;
  border-radius: 50%;
  animation: center-pulse 3s ease-out infinite;
}

@keyframes center-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

.partner-node {
  position: absolute;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #334155;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, rgba($primary-color, 0.1), rgba(0, 255, 255, 0.05));
  }
}

.partner-logo {
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: $primary-color;
}

.partner-type {
  font-size: 0.7rem;
  opacity: 0.8;
}

.connection-line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, $primary-color, transparent);
  transform-origin: left center;
  pointer-events: none;
}

.partnership-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba($primary-color, 0.15);
  }
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.benefit-title {
  color: $primary-color;
  font-weight: 600;
  margin-bottom: 1rem;
}

.benefit-description {
  color: #475569;
  line-height: 1.5;
}

/* Contact CTA Section */
.contact-cta {
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
  color: #1e293b;
  text-align: center;
}

.cta-content {
  z-index: 2;
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.cta-btn {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: $primary-color;
    color: white;
    
    &:hover {
      background: #4ddab8;
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid $primary-color;
    color: $primary-color;
    
    &:hover {
      background: rgba($primary-color, 0.1);
    }
  }
}

.contact-methods {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.contact-method {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.method-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.method-info {
  text-align: center;
}

.method-label {
  font-size: 1.2rem;
  font-weight: 600;
}

.method-value {
  font-size: 1.5rem;
  font-weight: 700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .timeline-line {
    left: 30px;
  }
  
  .timeline-item-modern {
    &.timeline-left,
    &.timeline-right {
      justify-content: flex-start;
      
      .timeline-card-modern {
        margin-left: 4rem;
        margin-right: 0;
      }
    }
  }
  
  .timeline-point {
    left: 30px;
  }
  
  .floating-diagnostics {
    display: none;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .facts-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .frequency-bars {
    margin-top: 1rem;
  }
  
  .mission,
  .facts,
  .timeline-wrapper,
  .innovation-section {
    padding: 3rem 1rem;
  }
}
</style> 