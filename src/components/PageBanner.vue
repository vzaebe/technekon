<template>
  <div class="page-banner">
    <div class="banner-container">
      <div class="banner-content">
        <h1 class="banner-title">
          <span 
            v-for="(line, index) in titleLines" 
            :key="index" 
            class="title-line"
          >
            {{ line }}
          </span>
        </h1>
        <p class="banner-subtitle">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

interface Props {
  titleLines: string[];
  subtitle: string;
  theme?: 'equipment' | 'services' | 'about' | 'news' | 'contacts' | 'offers';
}

withDefaults(defineProps<Props>(), {
  theme: 'equipment'
});

defineComponent({
  name: 'PageBanner'
})
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.page-banner {
  width: 100%;
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: $shadow-primary;
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
}

.banner-container {
  width: 60%;
  margin: 0 auto;
  padding: 2rem 2rem;

  @include respond-to(tablet) {
    padding: 2.5rem 3rem;
  }

  @include respond-to(desktop) {
    padding: 3rem 4rem;
  }

  @include respond-to(large) {
    padding: 3.5rem 5rem;
  }
}

.banner-content {
  text-align: center;
  color: $text-light;
}

.banner-title {
  margin: 0 0 1rem 0;
  font-family: 'Arial Black', 'Helvetica', sans-serif;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  
  .title-line {
    display: block;
    font-size: 2.5rem;
    color: $text-light;
    margin-bottom: 0.2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    @include respond-to(tablet) {
      font-size: 3rem;
    }
    
    @include respond-to(desktop) {
      font-size: 3.5rem;
    }
    
    @include respond-to(large) {
      font-size: 4rem;
    }
  }
}

.banner-subtitle {
  margin: 0;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  @include respond-to(tablet) {
    font-size: 1.2rem;
  }
  
  @include respond-to(desktop) {
    font-size: 1.3rem;
  }
  
  @include respond-to(large) {
    font-size: 1.4rem;
  }
}

// Адаптивность
@media (max-width: 1200px) {
  .banner-container {
    width: 100%;
    padding: 2rem 1rem;
  }
}

@media (max-width: 768px) {
  .banner-container {
    padding: 1.5rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .banner-container {
    padding: 1rem 0.25rem;
  }
}
</style> 