<template>
  <div class="contacts-page">
    <AppHeader />

    <!-- Используем PageBanner для страницы контактов -->
    <PageBanner 
      :title-lines="['КОНТАКТЫ', 'ТЕХНЕКОНА']"
      subtitle="Мы всегда готовы помочь и ответить на ваши вопросы"
      theme="contacts"
    />

    <main class="contacts-main">
      <section class="contacts-grid" data-aos="fade-up" data-aos-delay="200">
        <!-- Sales Contact Card -->
        <div class="contact-card" data-aos="fade-up" data-aos-delay="300">
          <div class="contact-icon">
            <span class="icon-symbol">💼</span>
          </div>
          <h3 class="contact-type">Отдел продаж</h3>
          <p class="contact-description">По вопросам приобретения оборудования</p>
          <a href="mailto:sales@tehnekon.ru" class="contact-link">
            sales@tehnekon.ru
          </a>
        </div>

        <!-- Support Contact Card -->
        <div class="contact-card" data-aos="fade-up" data-aos-delay="400">
          <div class="contact-icon">
                            <span class="icon-symbol">
                  <SupportIcon />
                </span>
          </div>
          <h3 class="contact-type">Служба поддержки</h3>
          <p class="contact-description">Техническая поддержка и сервис</p>
          <a href="mailto:support@tehnekon.ru" class="contact-link">
            support@tehnekon.ru
          </a>
        </div>

        <!-- Phone Contact Card -->
        <div class="contact-card" data-aos="fade-up" data-aos-delay="500">
          <div class="contact-icon">
            <span class="icon-symbol">📞</span>
          </div>
          <h3 class="contact-type">Телефон</h3>
          <p class="contact-description">Звонки в рабочее время</p>
          <a href="tel:+74997446016" class="contact-link">
            (499) 744-60-16/17
          </a>
        </div>
      </section>

      <section class="address-section" data-aos="fade-up" data-aos-delay="600">
        <h2 class="section-title">Наши адреса</h2>
        <div class="address-grid">
          <div class="address-card" data-aos="fade-up" data-aos-delay="700">
            <div class="address-icon">
              <span class="icon-symbol">🏢</span>
            </div>
            <h4 class="address-type">Офис</h4>
            <p class="address-text">
              117418, г. Москва,<br>
              ул. Новочерёмушкинская 63,<br>
              к. 2, оф. 97
            </p>
          </div>
          
          <div class="address-card" data-aos="fade-up" data-aos-delay="800">
            <div class="address-icon">
              <span class="icon-symbol">📮</span>
            </div>
            <h4 class="address-type">Почтовый адрес</h4>
            <p class="address-text">
              117418, г. Москва,<br>
              а/я 32
            </p>
          </div>
        </div>
      </section>

      <!-- Yandex Maps Section -->
      <section class="map-section" data-aos="fade-up" data-aos-delay="1000">
        <h2 class="section-title">Как нас найти</h2>
        <div class="map-container">
          <div id="yandex-map" class="yandex-map"></div>
          <div class="map-info">
            <h3>Офис компании</h3>
            <p>г. Москва, ул. Новочерёмушкинская 63, к. 2, оф. 97</p>
            <p class="map-note">Ближайшее метро: Новые Черёмушки</p>
          </div>
        </div>
      </section>

      <section class="contacts-note" data-aos="fade-up" data-aos-delay="900">
        <div class="note-content">
          <p>Реализация продукции осуществляется через</p>
          <p class="note-highlight">Торговый дом «Технекон»</p>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SupportIcon from '@/components/icons/SupportIcon.vue';
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import PageBanner from '@/components/PageBanner.vue'; // Added import for PageBanner

// Declare Yandex Maps types
declare global {
  interface Window {
    ymaps: any;
  }
}

const mapLoaded = ref(false);

// Load Yandex Maps API
const loadYandexMaps = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.ymaps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU';
    script.async = true;
    
    script.onload = () => {
      window.ymaps.ready(() => {
        mapLoaded.value = true;
        resolve();
      });
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Yandex Maps'));
    };
    
    document.head.appendChild(script);
  });
};

// Initialize map
const initMap = () => {
  if (!window.ymaps || !mapLoaded.value) return;

  const map = new window.ymaps.Map('yandex-map', {
    center: [55.644466, 37.585453], // Coordinates for Novocheryomushkinskaya 63
    zoom: 15,
    controls: ['zoomControl', 'fullscreenControl']
  }, {
    searchControlProvider: 'yandex#search'
  });

  // Add marker
  const placemark = new window.ymaps.Placemark([55.644466, 37.585453], {
    balloonContent: `
      <div style="padding: 10px;">
        <h3 style="margin: 0 0 10px 0; color: #2ad0a2;">Офис Технекон</h3>
        <p style="margin: 0;">ул. Новочерёмушкинская 63, к. 2, оф. 97</p>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Метро: Новые Черёмушки</p>
      </div>
    `
  }, {
    preset: 'islands#greenDotIcon',
    iconColor: '#2ad0a2'
  });

  map.geoObjects.add(placemark);
};

onMounted(async () => {
  AOS.refresh();
  
  try {
    await loadYandexMaps();
    initMap();
  } catch (error) {
    console.error('Error loading Yandex Maps:', error);
    // Fallback: show static map or error message
    const mapContainer = document.getElementById('yandex-map');
    if (mapContainer) {
      mapContainer.innerHTML = `
        <div class="map-fallback">
          <p>Карта временно недоступна</p>
          <p>Адрес: г. Москва, ул. Новочерёмушкинская 63, к. 2, оф. 97</p>
        </div>
      `;
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.contacts-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $background-light;
}

.contacts-main {
  flex: 1;
  padding: $space-16 $space-4 $space-12;
  
  @include respond-to(tablet) {
    padding: $space-20 $space-6 $space-16;
  }
  
  @include respond-to(desktop) {
    padding: $space-24 $space-8 $space-20;
  }
}

/* Hero Section */
.contacts-hero {
  text-align: center;
  margin-bottom: $space-16;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contacts-title {
  font-size: $font-hero-title;
  font-weight: 600;
  color: $text-dark;
  margin-bottom: $space-4;
  
  @include respond-to(tablet) {
    font-size: $font-display;
  }
  
  @include respond-to(desktop) {
    font-size: $font-display;
  }
}

.contacts-subtitle {
  font-size: $font-subtitle;
  color: $text-muted;
  margin: 0;
  
  @include respond-to(tablet) {
    font-size: $font-section-title;
  }
}

/* Contact Cards Grid */
.contacts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-6;
  margin-bottom: $space-16;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @include respond-to(tablet) {
    grid-template-columns: repeat(2, 1fr);
    gap: $space-8;
  }
  
  @include respond-to(desktop) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contact-card {
  background: $text-light;
  border-radius: $radius-lg;
  padding: $space-8 $space-6;
  text-align: center;
  box-shadow: $shadow-md;
  border: 1px solid $border-light;
  transition: all $transition-normal $ease-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-xl;
    border-color: $primary-light;
  }
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, $primary-color, $primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto $space-4;
  
  .icon-symbol {
    font-size: $font-hero-subtitle;
    filter: grayscale(1) brightness(0) invert(1);
  }
}

.contact-type {
  font-size: $font-section-title;
  font-weight: 600;
  color: $text-dark;
  margin-bottom: $space-2;
  
  @include respond-to(tablet) {
    font-size: $font-page-title;
  }
}

.contact-description {
  font-size: $font-body;
  color: $text-muted;
  margin-bottom: $space-4;
  line-height: 1.5;
  
  @include respond-to(tablet) {
    font-size: $font-subtitle;
  }
}

.contact-link {
  display: inline-block;
  font-size: $font-subtitle;
  font-weight: 600;
  color: $primary-color;
  text-decoration: none;
  padding: $space-2 $space-4;
  border-radius: $radius;
  transition: all $transition-normal $ease-out;
  
  @include respond-to(tablet) {
    font-size: $font-section-title;
  }
  
  &:hover {
    background-color: $primary-color;
    color: $text-light;
    transform: scale(1.05);
  }
}

/* Address Section */
.address-section {
  margin-bottom: $space-16;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: $font-hero-subtitle;
  font-weight: 600;
  color: $text-dark;
  text-align: center;
  margin-bottom: $space-8;
  
  @include respond-to(tablet) {
    font-size: $font-hero-title;
  }
}

.address-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-6;
  
  @include respond-to(tablet) {
    grid-template-columns: repeat(2, 1fr);
    gap: $space-8;
  }
}

.address-card {
  background: $text-light;
  border-radius: $radius-lg;
  padding: $space-6;
  box-shadow: $shadow;
  border: 1px solid $border-light;
  transition: all $transition-normal $ease-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-lg;
  }
}

.address-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, $secondary-color, $primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: $space-4;
  
  .icon-symbol {
    font-size: $font-page-title;
    filter: grayscale(1) brightness(0) invert(1);
  }
}

.address-type {
  font-size: $font-section-title;
  font-weight: 600;
  color: $text-dark;
  margin-bottom: $space-3;
}

.address-text {
  font-size: $font-subtitle;
  color: $text-muted;
  line-height: 1.6;
  margin: 0;
}

/* Note Section */
.contacts-note {
  text-align: center;
  padding: $space-8;
  background: linear-gradient(135deg, rgba($primary-color, 0.1), rgba($secondary-color, 0.1));
  border-radius: $radius-lg;
  border: 1px solid rgba($primary-color, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.note-content {
  p {
    margin: 0;
    font-size: $font-subtitle;
    color: $text-muted;
    
    @include respond-to(tablet) {
      font-size: $font-section-title;
    }
  }
}

.note-highlight {
  font-weight: 600;
  color: $primary-color !important;
  margin-top: $space-2 !important;
}

/* Map Section */
.map-section {
  margin-bottom: $space-16;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.map-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-6;
  background: $text-light;
  border-radius: $radius-lg;
  overflow: hidden;
  box-shadow: $shadow-lg;
  border: 1px solid $border-light;
  
  @include respond-to(tablet) {
    grid-template-columns: 2fr 1fr;
  }
}

.yandex-map {
  width: 100%;
  height: 400px;
  min-height: 300px;
  
  @include respond-to(tablet) {
    height: 500px;
  }
  
  @include respond-to(desktop) {
    height: 600px;
  }
}

.map-info {
  padding: $space-6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h3 {
    font-size: $font-page-title;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: $space-3;
    
    @include respond-to(tablet) {
      font-size: $font-hero-subtitle;
    }
  }
  
  p {
    font-size: $font-subtitle;
    color: $text-muted;
    margin-bottom: $space-2;
    line-height: 1.5;
    
    @include respond-to(tablet) {
      font-size: $font-section-title;
    }
  }
  
  .map-note {
    font-size: $font-body;
    color: $primary-color;
    font-weight: 500;
    margin-top: $space-3;
    padding-top: $space-3;
    border-top: 1px solid $border-light;
    
    @include respond-to(tablet) {
      font-size: $font-subtitle;
    }
  }
}

.map-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: $space-8;
  text-align: center;
  background: linear-gradient(135deg, rgba($primary-color, 0.05), rgba($secondary-color, 0.05));
  
  p {
    font-size: $font-subtitle;
    color: $text-muted;
    margin-bottom: $space-2;
    
    &:first-child {
      font-weight: 600;
      color: $text-dark;
      margin-bottom: $space-4;
    }
  }
}

/* Mobile Optimizations */
@media (max-width: 640px) {
  .contacts-main {
    padding: $space-12 $space-4 $space-8;
  }
  
  .contacts-title {
    font-size: $font-hero-subtitle;
  }
  
  .contacts-subtitle {
    font-size: $font-body;
  }
  
  .contact-card,
  .address-card {
    padding: $space-6 $space-4;
  }
  
  .contact-icon,
  .address-icon {
    width: 50px;
    height: 50px;
    
    .icon-symbol {
      font-size: $font-page-title;
    }
  }
  
  .contact-type,
  .address-type {
    font-size: $font-subtitle;
  }
  
  .contact-description,
  .address-text {
    font-size: $font-body;
  }
  
  .contact-link {
    font-size: $font-subtitle;
  }
  
  .section-title {
    font-size: $font-page-title;
  }
  
  .contacts-note {
    padding: $space-6;
  }
  
  .note-content p {
    font-size: $font-body;
  }
  
  /* Map mobile optimizations */
  .yandex-map {
    height: 300px;
  }
  
  .map-info {
    padding: $space-4;
    
    h3 {
      font-size: $font-section-title;
      margin-bottom: $space-2;
    }
    
    p {
      font-size: $font-body;
      margin-bottom: $space-1;
    }
    
    .map-note {
      font-size: $font-menu;
      margin-top: $space-2;
      padding-top: $space-2;
    }
  }
  
  .map-fallback {
    padding: $space-6;
    
    p {
      font-size: $font-body;
      
      &:first-child {
        font-size: $font-subtitle;
      }
    }
  }
}
</style> 