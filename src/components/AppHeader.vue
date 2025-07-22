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
    width: 60%;
    margin: 0 auto;
    padding: 0 2rem;
    @include respond-to(tablet) { padding: 0 3rem; }
    @include respond-to(desktop) { padding: 0 4rem; }
    @include respond-to(large) { padding: 0 5rem; }
  }

  &__divider {
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, $primary-color 0%, $primary-accent 100%);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba($primary-color, 0.08);
    &--top { margin-bottom: 1.25rem; }
    &--bottom { margin-top: 1.25rem; }
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
    font-size: $font-body-small;
    font-weight: 500;
    @include uppercase-text;
    text-align: center;
    line-height: 1.4;
    @include respond-to(mobile) { font-size: $font-body; }
    @include respond-to(tablet) {
      position: absolute;
      right: 0;
      text-align: right;
      font-size: $font-subtitle;
    }
    @include respond-to(desktop) { font-size: $font-section-title; }
    @include respond-to(large) { font-size: $font-page-title; }
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
      gap: 1rem;
      width: 100%;
      margin: 0 auto 1.25rem auto;
    }
    @include respond-to(large) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }
    @include respond-to(xl) {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    &-item {
      color: $text-dark;
      font-size: $font-subtitle;
      font-weight: 600;
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

  &__mobile-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    @include respond-to(desktop) { display: none; }
    &-item {
      color: $text-dark;
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
      @include transition-all;
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: $radius;
      position: relative;
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
      &:hover {
        color: $primary-color;
        background: none;
        &::after {
          width: 220%;
          height: 220%;
        }
        transform: translateY(-1px) scale(1.04);
      }
    }
    &-button {
      color: $text-dark;
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
      background: none;
      border: none;
      @include transition-all;
      padding: 0.5rem 0.75rem;
      border-radius: $radius;
      position: relative;
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
      &:hover {
        color: $primary-color;
        background: none;
        &::after {
          width: 220%;
          height: 220%;
        }
        transform: translateY(-1px) scale(1.04);
      }
    }
  }
}
</style>
