<template>
  <section class="products">
    <div class="container">
      <h2 class="products__title">НАШИ ПРИБОРЫ</h2>

      <div class="products__grid">
        <ProductCard
          v-for="product in productItems"
          :key="product.id"
          :title="product.title"
          :imageUrl="product.imageUrl"
        />

        <!-- All Products CTA Card -->
        <div class="products__cta-card">
          <TehnekonCompactLogo />
          <button class="products__cta-button" @click="handleViewAllProducts">
            ВСЯ ПРОДУКЦИЯ
          </button>
        </div>
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
  imageUrl?: string;
}

const productItems: Product[] = [
  { 
    id: 1, 
    title: "Виброанализатор STD-500",
    imageUrl: "/placeholder.svg"
  },
  { 
    id: 2, 
    title: "Виброанализатор STD-500",
    imageUrl: "/placeholder.svg"
  },
  { 
    id: 3, 
    title: "Виброанализатор STD-500",
    imageUrl: "/placeholder.svg"
  },
  { 
    id: 4, 
    title: "Виброанализатор STD-500",
    imageUrl: "/placeholder.svg"
  },
  { 
    id: 5, 
    title: "Виброанализатор STD-500",
    imageUrl: "/placeholder.svg"
  },
  { 
    id: 6, 
    title: "Виброанализатор STD-500",
    imageUrl: "/placeholder.svg"
  },
  { 
    id: 7, 
    title: "Виброанализатор STD-500",
    imageUrl: "/placeholder.svg"
  }
];

const handleViewAllProducts = () => {
  console.log("View all products clicked");
  // Здесь можно добавить логику для перехода к каталогу продукции
};
</script>
