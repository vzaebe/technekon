<template>
  <header class="header">
    <!-- Top Row - Logo and Contact -->
    <div class="header__top-row">
      <div class="header__contact-info">
        <div>(499) 744-60-16/17</div>
        <div>sales@tehnekon.ru</div>
      </div>
      <TehnekonLogo />
    </div>

    <!-- Divider -->
    <div class="header__divider"></div>

    <!-- Navigation Menu -->
    <nav class="header__navigation">
      <button
        v-for="item in navigationItems"
        :key="item"
        class="header__navigation-item"
        @click="handleNavClick(item)"
      >
        {{ item }}
      </button>
    </nav>

    <!-- Bottom Divider -->
    <div class="header__divider header__divider--bottom"></div>

    <!-- Mobile Menu -->
    <div class="header__mobile-menu">
      <button class="header__mobile-menu-item">КОНТАКТЫ</button>
      <button class="header__mobile-menu-button">≡</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import TehnekonLogo from "@/components/icons/TehnekonLogo.vue";

const navigationItems = [
  "КОНТАКТЫ",
  "УСЛУГИ",
  "О КОМПАНИИ",
  "ПОДДЕРЖКА",
  "ПРОДУКЦИЯ",
];

const handleNavClick = (item: string) => {
  console.log(`Navigation clicked: ${item}`);
  // Здесь можно добавить логику навигации
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 1.5rem 2rem;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @include respond-to(tablet) {
    padding: 2rem 3rem;
  }

  @include respond-to(desktop) {
    padding: 2.5rem 4rem;
  }

  @include respond-to(large) {
    padding: 3rem 5rem;
  }

  &__top-row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    
    @include respond-to(tablet) {
      margin-bottom: 2.5rem;
    }

    @include respond-to(desktop) {
      margin-bottom: 3rem;
    }
  }

  &__contact-info {
    color: $text-dark;
    font-size: $font-sm;
    font-weight: 400;
    @include uppercase-text;
    text-align: center;
    line-height: 1.4;
    
    @include respond-to(mobile) {
      font-size: $font-base;
    }
    
    @include respond-to(tablet) {
      position: absolute;
      right: 0;
      text-align: right;
      font-size: $font-lg;
    }
    
    @include respond-to(desktop) {
      font-size: $font-xl;
    }

    @include respond-to(large) {
      font-size: $font-2xl;
    }

    div {
      line-height: 1.2;
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__navigation {
    display: none;

    @include respond-to(desktop) {
      @include flex-between;
      width: 100%;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    @include respond-to(large) {
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    @include respond-to(xl) {
      gap: 2rem;
    }

    &-item {
      color: $text-dark;
      font-size: $font-xl;
      font-weight: 500;
      @include uppercase-text;
      cursor: pointer;
      background: none;
      border: none;
      @include transition-colors;
      white-space: nowrap;
      padding: 0.75rem 0;
      
      &:hover {
        color: $primary-color;
      }

      @include respond-to(large) {
        font-size: $font-2xl;
      }
      
      @include respond-to(xl) {
        font-size: $font-3xl;
      }

      @include respond-to(xxl) {
        font-size: $font-4xl;
      }
    }
  }

  &__divider {
    width: 100%;
    height: 2px;
    background: $primary-color;
    margin-bottom: 2rem;
    
    @include respond-to(tablet) {
      margin-bottom: 2.5rem;
    }

    @include respond-to(desktop) {
      margin-bottom: 3rem;
    }

    &--bottom {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>
