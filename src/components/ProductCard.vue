<template>
  <div class="product-card">
    <div class="product-card__content">
      <div class="product-card__image-area">
        <div class="product-card__image-container">
          <img v-if="imageUrl" :src="imageUrl" :alt="title" class="product-card__image">
          <div v-else class="product-card__image-placeholder">
            <div class="product-card__abstract-shape"></div>
          </div>
          <div class="product-card__overlay">
            <span class="product-card__view-details">Подробнее</span>
          </div>
        </div>
      </div>
      <div class="product-card__info">
        <div class="product-card__title">
          <div class="product-card__title-main">Виброанализатор</div>
          <div class="product-card__title-model">STD-500</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  imageUrl?: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.product-card {
  width: 100%;
  height: 300px;
  border-radius: $radius-xl;
  background: white;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);

    .product-card__overlay {
      opacity: 1;
    }

    .product-card__image-container {
      transform: scale(1.1);
    }

    .product-card__abstract-shape {
      transform: rotate(225deg);
    }
  }

  @include respond-to(mobile) {
    height: 320px;
  }

  @include respond-to(tablet) {
    height: 340px;
  }

  @include respond-to(desktop) {
    height: 360px;
  }

  &__content {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &__image-area {
    position: relative;
    width: 100%;
    height: 75%;
    overflow: hidden;
    background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
  }

  &__image-container {
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image-placeholder {
    width: 60%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  &__abstract-shape {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, 
                                     rgba(255, 255, 255, 0.4) 50%, 
                                     rgba(255, 255, 255, 0.2) 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: rotate(45deg);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 20%;
      left: 20%;
      width: 30%;
      height: 30%;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 20%;
      right: 20%;
      width: 20%;
      height: 20%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }
  }

  &__info {
    padding: 0.75rem;
    background: white;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    color: $text-dark;
    text-align: center;
    @include uppercase-text;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &-main {
      font-size: $font-base;
      font-weight: 600;

      @include respond-to(tablet) {
        font-size: $font-lg;
      }
    }

    &-model {
      font-size: $font-sm;
      font-weight: 700;
      color: $primary-color;

      @include respond-to(tablet) {
        font-size: $font-base;
      }
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
                              rgba($primary-color, 0.9) 0%, 
                              rgba($secondary-color, 0.9) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &__view-details {
    color: white;
    font-weight: 600;
    font-size: $font-base;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}
</style>
