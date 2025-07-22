<template>
  <section class="about">
    <div class="container-header-width">
      <h2 class="about__title" ref="titleRef" :class="{ 'fade-in': isTitleVisible }">
        <span class="about__title-prefix">О </span>
        <span class="about__title-highlight">ЧЁМ</span>
        <span class="about__title-suffix"> МЫ?</span>
      </h2>

      <div class="about__main-content">
        <div class="about__content" ref="contentRef">
          <p v-for="(line, index) in contentLines" 
             :key="index" 
             :class="{ 'slide-in': isContentVisible }"
             :style="{ animationDelay: `${index * 0.1}s` }">
            <span v-html="highlightText(line)"></span>
          </p>

          <button class="about__cta" 
                  @click="handleLearnMore"
                  @mouseenter="buttonHovered = true"
                  @mouseleave="buttonHovered = false"
                  :class="{ 'button-hover': buttonHovered, 'slide-in': isContentVisible }"
                  :style="{ animationDelay: `${contentLines.length * 0.1 + 0.2}s` }">
            <span class="button-text">ПОДРОБНЕЕ</span>
            <span class="button-arrow">→</span>
          </button>
        </div>

        <div class="about__visual" 
             @mouseenter="imageHovered = true"
             @mouseleave="imageHovered = false"
             :class="{ 'image-hover': imageHovered, 'fade-in': isContentVisible }"
             :style="{ animationDelay: `${contentLines.length * 0.1 + 0.4}s` }">
          <div class="about__image-container">
            <img src="@/assets/3d abstraction.svg" 
                 alt="3D абстракция" 
                 class="about__image"
                 :class="{ 'image-animate': imageHovered }" />
            <div class="about__image-glow" :class="{ 'glow-active': imageHovered }"></div>
            <div class="about__image-particles" :class="{ 'particles-active': imageHovered }">
              <div class="particle" v-for="i in 12" :key="i" :style="{ '--delay': `${i * 0.1}s` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const titleRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const isTitleVisible = ref(false)
const isContentVisible = ref(false)
const buttonHovered = ref(false)
const imageHovered = ref(false)

const contentLines = [
  'КАМПАНИЯ С <highlight>1992</highlight> ГОДА ЗАНИМАЕТСЯ',
  'РАЗРАБОТКОЙ,',
  'ПРОИЗВОДСТВОМ И ВНЕДРЕНИЕМ',
  'ШИРОКОГО РЯДА СИСТЕМ',
  'ДЛЯ ДИАГНОСТИКИ ТЕХНИЧЕСКОГО',
  'СОСТОЯНИЯ И <highlight>ЗАЩИТЫ</highlight> ПРОМЫШЛЕННОГО',
  'ОБОРУДОВАНИЯ'
]

const highlightText = (text: string) => {
  return text.replace(/<highlight>(.*?)<\/highlight>/g, '<span class="about__highlight">$1</span>')
}

const handleLearnMore = () => {
  console.log("Learn more about company clicked")
}

onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  }

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isTitleVisible.value = true
        titleObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isContentVisible.value = true
        contentObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  if (titleRef.value) titleObserver.observe(titleRef.value)
  if (contentRef.value) contentObserver.observe(contentRef.value)
})
</script>

<style lang="scss" scoped>
.about {
  padding: 8rem 0;
  background: var(--background-color);
  overflow: hidden;

  &__title {
    font-size: 4rem;
    margin-bottom: 5rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
    text-align: center;
    letter-spacing: 0.1em;

    &.fade-in {
      opacity: 1;
      transform: translateY(0);
    }

    &-highlight {
      color: #2ad0a2;
      &::after {
        display: none;
      }
    }
  }

  &__main-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
    }
  }

  &__content {
    flex: 1;
    min-width: 0;
    max-width: 600px;
    padding: 0 1.5rem;

    p {
      font-size: 1.75rem;
      line-height: 1.4;
      margin-bottom: 0.75rem;
      opacity: 0;
      transform: translateX(-50px);
      text-align: left;
      letter-spacing: 0.02em;
      
      &.slide-in {
        animation: slideIn 0.8s ease-out forwards;
      }

      @media (min-width: 768px) {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      @media (max-width: 768px) {
        text-align: left;
      }
    }
  }

  &__highlight {
    color: var(--primary-color);
    font-weight: bold;
    position: relative;
    padding: 0 0.2em;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(134, 255, 221, 0.2);
      transform: skew(-10deg);
      z-index: -1;
    }
  }

  &__cta {
    margin: 4rem 0 0 0;
    padding: 1.25rem 1.5rem;
    font-size: 1.4rem;
    background: #f8f9fa;
    border: none;
    color: var(--text-dark, #000000);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    overflow: hidden;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    font-weight: 900;
    letter-spacing: 0.1em;
    min-width: 200px;
    width: auto;
    height: 70px;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &.slide-in {
      animation: slideIn 0.8s ease-out forwards;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 0;
    }

    .button-text {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      text-align: center;
    }

    .button-arrow {
      position: absolute;
      right: 1.25rem;
      transform: translateX(20px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }

    &.button-hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(42, 208, 162, 0.2), 0 4px 6px -2px rgba(42, 208, 162, 0.1);

      &::before {
        transform: translateX(0);
      }

      .button-text {
        transform: translateX(-65%);
        color: var(--text-dark, #000000);
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
      }

      .button-arrow {
        transform: translateX(0);
        opacity: 1;
        margin-left: 0.5rem;
        color: var(--text-dark, #000000);
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
      }
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }

  &__visual {
    flex: 0 0 400px;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    // Remove any box-shadow and border on hover
    box-shadow: none !important;
    border: none !important;
    border-width: none !important;
    border-style: none !important;
    border-color: none !important;
    border-image: none !important;
    outline: none !important;
    
    &.fade-in {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @media (max-width: 768px) {
      flex: 0 0 auto;
      max-width: 300px;
      width: 100%;
    }

    &.image-hover {
      box-shadow: none !important;
      border: none !important;
      border-width: none !important;
      border-style: none !important;
      border-color: none !important;
      border-image: none !important;
      outline: none !important;
      .about__image-glow {
        opacity: 1;
      }

      .about__image-particles {
        opacity: 1;
      }
    }
  }

  &__image-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border: none !important;
    outline: none !important;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 10px 20px rgba(134, 255, 221, 0.3));
    animation: float 3s ease-in-out infinite;
    
    &.image-animate {
      /* Hover animation temporarily disabled */
      /*
      transform: perspective(1000px) rotateY(-15deg) rotateX(10deg) scale(1.1);
      filter: drop-shadow(0 20px 40px rgba(134, 255, 221, 0.5));
      animation: none;
      */
    }
  }

  &__image-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    background: radial-gradient(circle, rgba(134, 255, 221, 0.3) 0%, rgba(134, 255, 221, 0.1) 50%, rgba(134, 255, 221, 0) 70%);
    border-radius: 50%;
    transform: scale(0.8);
    
    &.glow-active {
      opacity: 1;
      transform: scale(1.2);
      animation: pulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  }

  &__image-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    &.particles-active {
      opacity: 1;
      
      .particle {
        animation: particleFloat 3s ease-in-out infinite;
        animation-delay: var(--delay);
      }
    }
  }

  &__image-glow,
  &__image-particles {
    pointer-events: none;
  }
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0;
  
  &:nth-child(1) { top: 20%; left: 20%; }
  &:nth-child(2) { top: 30%; right: 25%; }
  &:nth-child(3) { top: 50%; left: 15%; }
  &:nth-child(4) { top: 60%; right: 30%; }
  &:nth-child(5) { top: 70%; left: 40%; }
  &:nth-child(6) { top: 80%; right: 20%; }
  &:nth-child(7) { bottom: 30%; left: 25%; }
  &:nth-child(8) { bottom: 40%; right: 15%; }
  &:nth-child(9) { bottom: 50%; left: 35%; }
  &:nth-child(10) { bottom: 60%; right: 40%; }
  &:nth-child(11) { bottom: 70%; left: 10%; }
  &:nth-child(12) { bottom: 80%; right: 35%; }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.02);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  25% {
    transform: scale(1.2);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
  75% {
    transform: scale(1.2);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
