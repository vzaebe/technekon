<template>
  <footer class="footer">
    <div class="container-header-width">
      <div class="footer__content">
        <!-- Left Column - Contact Info -->
        <div class="footer__contact">
          <div class="footer__phone">(499) 744-60-16/17</div>
          <div class="footer__email">sales@tehnekon.ru</div>
          <address class="footer__address">
            <div>117418, г. Москва,</div>
            <div>ул. Новочерёмушкинская, д. 63,</div>
            <div>корп. 2, эт. 2, пом. XV, ком. 2.</div>
          </address>
        </div>

        <!-- Middle Column - Menu -->
        <div class="footer__menu">
          <button
            v-for="item in footerMenuItems"
            :key="item"
            class="footer__menu-item"
            @click="handleMenuClick(item)"
          >
            {{ item }}
          </button>
        </div>

        <!-- Right Column - Logo -->
        <div class="footer__logo-container">
          <FooterTehnekonLogo class="footer__logo" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterTehnekonLogo from "@/components/icons/FooterTehnekonLogo.vue";

const footerMenuItems = ["ПРОДУКЦИЯ", "УСЛУГИ", "ПОДДЕРЖКА"];

const handleMenuClick = (item: string) => {
  console.log(`Footer menu clicked: ${item}`);
  // Здесь можно добавить логику навигации
};
</script>
