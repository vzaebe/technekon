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

      <!-- Navigation Menu -->
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

      <!-- Mobile Menu -->
      <div class="header__mobile-menu">
        <router-link to="/contacts" class="header__mobile-menu-item">КОНТАКТЫ</router-link>
        <button class="header__mobile-menu-button">≡</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import TehnekonLogo from "@/components/icons/TehnekonLogo.vue";

const navigationItems = [
  { name: 'About', label: 'О КОМПАНИИ', path: '/about' },
  { name: 'History', label: 'ИСТОРИЯ', path: '/history' },
  { name: 'Contacts', label: 'КОНТАКТЫ', path: '/contacts' },
  { name: 'Equipment', label: 'ОБОРУДОВАНИЕ', path: '/equipment' },
  { name: 'News', label: 'НОВОСТИ', path: '/news' },
  { name: 'Services', label: 'СЕРВИС', path: '/services' },
  { name: 'Offers', label: 'УСЛУГИ', path: '/offers' },
];
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.header__logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  width: 100%;
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: $shadow-primary;
  border: none;

  &__container {
    width: 60%;
    margin: 0 auto;
    padding: 0 2rem;

    @include respond-to(tablet) {
      padding: 0 3rem;
    }

    @include respond-to(desktop) {
      padding: 0 4rem;
    }

    @include respond-to(large) {
      padding: 0 5rem;
    }
  }

  &__divider {
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    
    &--top {
      margin-bottom: 1rem;
      
      @include respond-to(tablet) {
        margin-bottom: 1.25rem;
      }

      @include respond-to(desktop) {
        margin-bottom: 1.5rem;
      }

      @include respond-to(large) {
        margin-bottom: 1.75rem;
      }
    }

    &--bottom {
      margin-top: 1rem;
      
      @include respond-to(tablet) {
        margin-top: 1.25rem;
      }

      @include respond-to(desktop) {
        margin-top: 1.5rem;
      }

      @include respond-to(large) {
        margin-top: 1.75rem;
      }
    }
  }

  &__top-row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    
    @include respond-to(tablet) {
      margin-bottom: 1.25rem;
    }

    @include respond-to(desktop) {
      margin-bottom: 1.5rem;
    }

    @include respond-to(large) {
      margin-bottom: 1.75rem;
    }
  }

  &__contact-info {
    color: $text-light;
    font-size: $font-body-small;
    font-weight: 500;
    @include uppercase-text;
    text-align: center;
    line-height: 1.4;
    
    @include respond-to(mobile) {
      font-size: $font-body;
    }
    
    @include respond-to(tablet) {
      position: absolute;
      right: 0;
      text-align: right;
      font-size: $font-subtitle;
    }
    
    @include respond-to(desktop) {
      font-size: $font-section-title;
    }

    @include respond-to(large) {
      font-size: $font-page-title;
    }

    div {
      line-height: 1.2;
      margin-bottom: 0.25rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__navigation {
    display: none;

    @include respond-to(desktop) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 0.75rem;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    
    @include respond-to(large) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    @include respond-to(xl) {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }

    &-item {
      color: $text-light;
      font-size: $font-subtitle;
      font-weight: 600;
      letter-spacing: -0.02em;
      text-align: center;
      @include uppercase-text;
      cursor: pointer;
      background: none;
      border: none;
      @include transition-colors;
      padding: 0.5rem 0.25rem;
      text-decoration: none;
      display: block;
      border-radius: $radius;
      transition: all $transition-normal $ease-out;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      
      &:hover, &.active, &.exact-active {
        color: $text-light;
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-2px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
      }

      @include respond-to(large) {
        font-size: $font-section-title;
        padding: 0.75rem 0.5rem;
      }
      
      @include respond-to(xl) {
        font-size: $font-page-title;
        padding: 0.75rem 0.75rem;
      }
    }
  }

  &__mobile-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;

    @include respond-to(desktop) {
      display: none;
    }

    &-item {
      color: $text-light;
      font-size: $font-menu;
      font-weight: 600;
      letter-spacing: -0.02em;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @include uppercase-text;
      cursor: pointer;
      background: none;
      border: none;
      @include transition-colors;
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: $radius;
      transition: all $transition-normal $ease-out;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      
      &:hover {
        color: $text-light;
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-1px);
      }
    }

    &-button {
      color: $text-light;
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
      background: none;
      border: none;
      @include transition-colors;
      padding: 0.5rem 0.75rem;
      border-radius: $radius;
      transition: all $transition-normal $ease-out;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      
      &:hover {
        color: $text-light;
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-1px);
      }
    }
  }
}
</style>
