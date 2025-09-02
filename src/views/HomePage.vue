<template>
  <div class="page">
    <AppHeader />
    <main class="main">
      <section class="section section--hero">
        <HeroSection />
      </section>
      <Divider spacing="tight" />
      <section class="section">
        <ProductsSection />
      </section>
      <Divider />
      <section class="section">
        <AboutSection />
      </section>
      <Divider />
      <section class="section">
        <BenefitsSection />
      </section>
      <Divider />
      <section class="section">
        <ContactSection />
      </section>
      <Divider />
      <section class="section">
        <PartnersSection />
      </section>
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import BenefitsSection from "@/components/BenefitsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import PartnersSection from "@/components/PartnersSection.vue";
import AppFooter from "@/components/AppFooter.vue";
import Divider from "@/components/Divider.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

.section {
  width: 100%;
  
  &--hero {
    padding: 0;
  }
}
</style>
