<template>
  <section class="contact">
    <div class="container">
      <h2 class="contact__title" ref="titleRef" :class="{ 'fade-in': isTitleVisible }">
        <span>ОСТАЛИСЬ ВОПРОСЫ?</span>
        <br />
        <span>СВЯЖИТЕСЬ С НАМИ!</span>
      </h2>

      <form class="contact__form" @submit.prevent="handleSubmit" ref="formRef" :class="{ 'slide-in': isFormVisible }">
        <div class="contact__fields">
          <div class="contact__field">
            <label class="contact__label" for="contact-name">Имя</label>
            <div class="contact__input-container">
              <input
                id="contact-name"
                v-model="name"
                type="text"
                placeholder="Ваше имя"
                class="contact__input"
                required
                :disabled="status === 'success'"
              />
            </div>
          </div>
          <div class="contact__field">
            <label class="contact__label" for="contact-email">Email</label>
            <div class="contact__input-container">
              <input
                id="contact-email"
                v-model="email"
                type="email"
                placeholder="Email"
                class="contact__input"
                required
                :disabled="status === 'success'"
              />
            </div>
          </div>
          <div class="contact__field">
            <label class="contact__label" for="contact-phone">Телефон</label>
            <div class="contact__input-container">
              <input
                id="contact-phone"
                v-model="phone"
                type="tel"
                placeholder="Телефон"
                class="contact__input"
                :disabled="status === 'success'"
              />
            </div>
          </div>
          <div class="contact__field">
            <label class="contact__label" for="contact-message">Сообщение</label>
            <div class="contact__input-container contact__input-container--textarea">
              <textarea
                id="contact-message"
                v-model="message"
                placeholder="Ваш вопрос или сообщение..."
                class="contact__textarea"
                rows="3"
                :disabled="status === 'success'"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="contact__actions">
          <button
            class="contact__submit"
            type="submit"
            :disabled="status === 'success' || status === 'loading'"
            @mouseenter="buttonHovered = true"
            @mouseleave="buttonHovered = false"
            :class="{ 'button-hover': buttonHovered }"
          >
            <span v-if="status === 'loading'" class="loader"></span>
            <span v-else>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="send-icon">
                <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="#2ad0a2"/>
              </svg>
            </span>
            <span class="contact__submit-text">Отправить</span>
          </button>
        </div>
        <transition name="fade">
          <div v-if="status === 'success'" class="contact__status contact__status--success">
            Спасибо! Мы свяжемся с вами.
          </div>
        </transition>
        <transition name="fade">
          <div v-if="status === 'error'" class="contact__status contact__status--error">
            Ошибка. Попробуйте ещё раз.
          </div>
        </transition>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const status = ref<'' | 'success' | 'error' | 'loading'>('');
const buttonHovered = ref(false);
const isTitleVisible = ref(false);
const isFormVisible = ref(false);
const titleRef = ref<HTMLElement | null>(null);
const formRef = ref<HTMLElement | null>(null);

const handleSubmit = async () => {
  if (!name.value || !email.value) return;
  status.value = 'loading';
  try {
    // Имитация отправки (заменить на реальный API)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    status.value = 'success';
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
    setTimeout(() => status.value = '', 3000);
  } catch (e) {
    status.value = 'error';
    setTimeout(() => status.value = '', 3000);
  }
};

onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };
  if (titleRef.value) {
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isTitleVisible.value = true;
          titleObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    titleObserver.observe(titleRef.value);
  }
  if (formRef.value) {
    const formObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isFormVisible.value = true;
          formObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    formObserver.observe(formRef.value);
  }
});
</script>
