<template>
  <section class="products">
    <div class="container-header-width">
      <h2 class="products__title">НАША <span class="products__title-highlight">ПРОДУКЦИЯ</span></h2>

      <div class="products__grid">
        <router-link
          v-for="product in productItems"
          :key="product.id"
          :to="{ name: 'Equipment' }"
          class="product-link"
        >
          <ProductCard
            :title="product.title"
            :model="product.model"
            :imageUrl="product.imageUrl"
          />
        </router-link>

        <!-- All Products CTA Card -->
        <router-link to="/equipment" class="products__cta-card">
          <TehnekonCompactLogo />
          <span class="products__cta-button">
            ВСЯ ПРОДУКЦИЯ
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import TehnekonCompactLogo from "@/components/icons/TehnekonCompactLogo.vue";

interface Product {
  id: number;
  title: string;
  model: string;
  slug: string;
  imageUrl?: string;
}

const productItems: Product[] = [
  {
    id: 1,
    title: "Системы виброконтроля / мониторинга / диагностики",
    model: "",
    slug: "systems-monitoring",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Переносные виброизмерительные приборы",
    model: "",
    slug: "portable-instruments",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Поверочное оборудование",
    model: "",
    slug: "calibration-equipment",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Датчики и первичные преобразователи",
    model: "",
    slug: "sensors-transducers",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Элементы системы / Контроллеры",
    model: "",
    slug: "system-elements-controllers",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Аксессуары",
    model: "",
    slug: "accessories",
    imageUrl: "/placeholder.svg"
  }
];
</script>

<style lang="scss" scoped>
.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

.products__cta-card {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem;
  box-shadow: $shadow-lg;
  transition: all $transition-normal $ease-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-xl;
  }
}
</style>
