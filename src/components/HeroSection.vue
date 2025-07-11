<template>
  <section class="hero" :style="{ backgroundImage: `url(${currentNews.backgroundImage})` }">
    <div class="hero__overlay"></div>
    <div class="hero__overlay-dark"></div>
    <div class="container-header-width hero__container">
      <div class="hero__content">
        <transition name="slide-fade" mode="out-in">
          <div :key="currentSlide" class="hero__slide">
            <div class="hero__date">{{ currentNews.date }}</div>
            <h1 class="hero__title">
              {{ currentNews.title }}
            </h1>
            <p class="hero__excerpt">{{ currentNews.excerpt }}</p>
            <button class="hero__cta" @click="handleLearnMore">
              <span>Подробнее</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </transition>
      </div>

      <!-- Slider Dots -->
      <div class="hero__dots">
        <button
          v-for="(_, index) in newsList.length"
          :key="index"
          :class="['hero__dot', { 'hero__dot--active': currentSlide === index }]"
          @click="setCurrentSlide(index)"
        />
      </div>

      <!-- Navigation Arrows -->
      <button class="hero__arrow hero__arrow--prev" @click="previousSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="hero__arrow hero__arrow--next" @click="nextSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { newsList, type NewsItem } from "@/data/news";

const router = useRouter();
const currentSlide = ref(0);
let autoSlideInterval: number | null = null;

const currentNews = computed((): NewsItem => newsList[currentSlide.value]);

const setCurrentSlide = (index: number) => {
  currentSlide.value = index;
  resetAutoSlide();
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % newsList.length;
  resetAutoSlide();
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? newsList.length - 1 : currentSlide.value - 1;
  resetAutoSlide();
};

const startAutoSlide = () => {
  autoSlideInterval = window.setInterval(() => {
    nextSlide();
  }, 5000); // Переключать каждые 5 секунд
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

const resetAutoSlide = () => {
  stopAutoSlide();
  startAutoSlide();
};

const handleLearnMore = () => {
  // Переходим на страницу новостей с конкретной новостью
  router.push('/news');
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.hero {
  position: relative;
  min-height: 75vh;
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @include transition-all;
  
  @include respond-to(tablet) {
    min-height: 80vh;
  }
  
  @include respond-to(desktop) {
    min-height: 85vh;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba($primary-color, 0.8) 0%, rgba($primary-light, 0.7) 100%);
    z-index: 1;
  }

  &__overlay-dark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }

  &__container {
    position: relative;
    z-index: 3;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    
    @include respond-to(tablet) {
      min-height: 80vh;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    
    @include respond-to(desktop) {
      min-height: 85vh;
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    color: white;
    max-width: 700px;
    
    @include respond-to(mobile) {
      max-width: 100%;
    }
  }

  &__slide {
    animation: fadeIn 0.6s ease-out;
  }

  &__date {
    font-size: $font-body;
    font-weight: 500;
    margin-bottom: 1rem;
    opacity: 0.9;
    @include uppercase-text;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.8);
    
    @include respond-to(mobile) {
      font-size: $font-body-small;
    }
    
    @include respond-to(tablet) {
      font-size: $font-subtitle;
    }
  }

  &__title {
    font-size: $font-page-title;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    color: white;
    
    @include respond-to(mobile) {
      font-size: $font-section-title;
      line-height: 1.3;
    }
    
    @include respond-to(tablet) {
      font-size: $font-hero-title;
      line-height: 1.2;
    }
    
    @include respond-to(desktop) {
      font-size: $font-display;
      line-height: 1.1;
    }
  }

  &__excerpt {
    font-size: $font-body;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    opacity: 0.95;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    color: rgba(255, 255, 255, 0.95);
    
    @include respond-to(mobile) {
      font-size: $font-body-small;
      margin-bottom: 2rem;
    }
    
    @include respond-to(tablet) {
      font-size: $font-subtitle;
      margin-bottom: 2.5rem;
    }
    
    @include respond-to(desktop) {
      font-size: $font-section-title;
      margin-bottom: 3rem;
    }
  }

  &__cta {
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: $font-body;
    font-weight: 600;
    cursor: pointer;
    @include transition-all;
    backdrop-filter: blur(10px);
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      
      svg {
        transform: translateX(3px);
      }
    }
    
    svg {
      @include transition-all;
    }
    
    @include respond-to(tablet) {
      padding: 1.25rem 2.5rem;
      font-size: $font-subtitle;
    }
    
    @include respond-to(desktop) {
      padding: 1.5rem 3rem;
      font-size: $font-section-title;
    }
  }

  &__dots {
    display: flex;
    justify-content: flex-start;
    gap: 0.75rem;
    margin-top: 3rem;
    
    @include respond-to(tablet) {
      margin-top: 4rem;
    }
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: transparent;
    cursor: pointer;
    @include transition-all;
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.8);
      transform: scale(1.2);
    }
    
    &--active {
      background: white;
      border-color: white;
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
    
    @include respond-to(tablet) {
      width: 14px;
      height: 14px;
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    @include transition-all;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    
    &--prev {
      left: 2rem;
      
      @include respond-to(tablet) {
        left: 3rem;
      }
    }
    
    &--next {
      right: 2rem;
      
      @include respond-to(tablet) {
        right: 3rem;
      }
    }
    
    @include respond-to(mobile) {
      display: none;
    }
    
    @include respond-to(tablet) {
      width: 60px;
      height: 60px;
    }
  }
}

// Анимации переходов
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
