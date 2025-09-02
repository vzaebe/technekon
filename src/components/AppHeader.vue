<template>
  <header class="header">
    <div class="header__container">
      <!-- Top Divider -->
      <div class="header__divider header__divider--top"></div>
      
      <!-- Top Row - Logo and Contact -->
      <div class="header__top-row">
        <div class="header__contact-info">
          <div>(499) 744-60-16/17</div>
          <div>sales@tehnekon.ru</div>
        </div>
        <router-link to="/" class="header__logo-link">
          <TehnekonLogo />
        </router-link>
      </div>

      <!-- Desktop Navigation Menu -->
      <nav class="header__navigation">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.path"
          class="header__navigation-item"
          active-class="active"
          exact-active-class="exact-active"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Bottom Divider -->
      <div class="header__divider header__divider--bottom"></div>

      <!-- Mobile Menu Button -->
      <div class="header__mobile-controls">
        <router-link to="/contacts" class="header__mobile-contact">КОНТАКТЫ</router-link>
        <button 
          class="header__mobile-burger"
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div 
      class="header__mobile-overlay"
      :class="{ 'active': isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Navigation Menu -->
    <nav 
      class="header__mobile-menu"
      :class="{ 'active': isMobileMenuOpen }"
    >
      <div class="header__mobile-menu-content">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.path"
          class="header__mobile-menu-item"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import TehnekonLogo from "@/components/icons/TehnekonLogo.vue";

const isMobileMenuOpen = ref(false);

const navigationItems = [
  { name: 'About', label: 'О КОМПАНИИ', path: '/about' },
  { name: 'Equipment', label: 'ПРОДУКЦИЯ', path: '/equipment' },
  { name: 'Offers', label: 'УСЛУГИ', path: '/offers' },
  { name: 'Services', label: 'ПОДДЕРЖКА', path: '/services' },
  { name: 'Contacts', label: 'КОНТАКТЫ', path: '/contacts' },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  
  // Блокируем скролл когда меню открыто
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Закрываем меню при нажатии Escape
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.header {
  width: 100%;
  background: $background-light;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: $shadow-soft-md;
  border: none;
  transition: box-shadow $transition-normal $ease-out;

  &__container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
    
    // Flexbox для стабильности (как в container-header-width)
    display: flex;
    flex-direction: column;
    
    @include respond-to(xs) {
      padding: 0 0.75rem;
      max-width: 100%;
    }
    
    @include respond-to(small) {
      padding: 0 1rem;
      max-width: 100%;
    }
    
    @include respond-to(mobile) {
      padding: 0 1.5rem;
      max-width: 100%;
    }
    
    @include respond-to(tablet) { 
      padding: 0 2rem;
      max-width: 768px;
    }
    
    @include respond-to(desktop) { 
      padding: 0 2.5rem;
      max-width: 1024px;
    }
    
    @include respond-to(large) { 
      padding: 0 3rem;
      max-width: 1280px;
    }
    
    @include respond-to(xl) {
      padding: 0 3.5rem;
      max-width: 1400px;
    }
  }

  &__divider {
    width: 100%;
    height: 3px;
    background: $primary-color;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba($primary-color, 0.08);
    &--top { margin-bottom: 1.25rem; }
    // уменьшили нижний отступ линии для выравнивания расстояния Б
    &--bottom { margin-top: 0.625rem; }
  }

  &__top-row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  &__contact-info {
    color: $text-dark;
    font-size: $font-subtitle; // 18px fixed to match menu
    font-weight: 500;
    @include uppercase-text;
    text-align: center;
    line-height: 1.4;
    
    // На очень маленьких экранах скрываем
    @include respond-below(small) {
      display: none;
    }
    
    @include respond-to(tablet) {
      position: absolute;
      right: 0;
      text-align: right;
    }
    div {
      line-height: 1.2;
      margin-bottom: 0.25rem;
      text-shadow: none;
      &:last-child { margin-bottom: 0; }
    }
  }

  &__logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    filter: none;
    transition: filter $transition-normal $ease-out;
    &:hover {
      filter: drop-shadow(0 0 8px $primary-color);
    }
  }

  &__navigation {
    display: none;
    @include respond-to(desktop) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem; // fixed
      width: 100%;
      // уменьшили нижний отступ навигации, чтобы расстояние Б стало в 2 раза меньше
      margin: 0 auto 0.625rem auto; // fixed
    }
    @include respond-to(large) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem; // keep consistent
      margin-bottom: 0.625rem; // keep consistent
    }
    @include respond-to(xl) {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem; // keep consistent
      margin-bottom: 0.625rem; // keep consistent
    }
    &-item {
      color: $text-dark;
      font-size: $font-subtitle;
      font-weight: 600;
      font-family: inherit;
      letter-spacing: -0.02em;
      text-align: center;
      @include uppercase-text;
      cursor: pointer;
      background: none;
      border: none;
      @include transition-all;
      padding: 0.5rem 0.25rem;
      text-decoration: none;
      display: block;
      border-radius: $radius;
      box-shadow: none;
      position: relative;
      overflow: hidden;
      z-index: 1;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba($primary-color,0.15) 0%, rgba($primary-accent,0.10) 100%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width $transition-slow $ease-in-out, height $transition-slow $ease-in-out;
        z-index: -1;
      }
      &:hover, &.active, &.exact-active {
        color: $primary-color;
        background: none;
        box-shadow: 0 2px 12px 0 rgba($primary-color, 0.10);
        &::after {
          width: 220%;
          height: 220%;
        }
        transform: translateY(-2px) scale(1.04);
      }
    }
  }

  &__mobile-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    
    @include respond-to(desktop) { 
      display: none; 
    }
  }

  &__mobile-contact {
    color: $text-dark;
    font-size: $font-caption;
    font-weight: 600;
    letter-spacing: -0.02em;
    @include uppercase-text;
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    border-radius: $radius;
    @include transition-all;
    
    @include respond-to(small) {
      font-size: $font-menu;
    }
    
    &:hover {
      color: $primary-color;
      transform: translateY(-1px);
    }
  }

  &__mobile-burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
    
    span {
      display: block;
      width: 25px;
      height: 3px;
      background: $text-dark;
      border-radius: 2px;
      transition: all 0.3s ease;
      
      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
    
    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      span:nth-child(2) {
        opacity: 0;
      }
      
      span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }

  &__mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    &.active {
      opacity: 1;
      visibility: visible;
    }
    
    @include respond-to(desktop) {
      display: none;
    }
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: white;
    z-index: 1000;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    
    &.active {
      right: 0;
    }
    
    @include respond-to(small) {
      width: 320px;
    }
    
    @include respond-to(desktop) {
      display: none;
    }
  }

  &__mobile-menu-content {
    padding: 6rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @include respond-to(small) {
      padding: 7rem 2.5rem 2.5rem;
      gap: 1.5rem;
    }
  }

  &__mobile-menu-item {
    color: $text-dark;
    font-size: $font-body;
    font-weight: 600;
    @include uppercase-text;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border-radius: $radius-lg;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    text-align: center;
    
    @include respond-to(small) {
      font-size: $font-subtitle;
      padding: 1.25rem 1.75rem;
    }
    
    &:hover, &.router-link-active {
      color: $primary-color;
      border-color: $primary-color;
      background: rgba($primary-color, 0.05);
      transform: translateY(-2px);
    }
  }
}
</style>
