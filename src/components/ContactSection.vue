<template>
  <section class="contact">
    <div class="contact__background">
      <div class="contact__decorative-circle contact__decorative-circle--1"></div>
      <div class="contact__decorative-circle contact__decorative-circle--2"></div>
      <div class="contact__decorative-circle contact__decorative-circle--3"></div>
    </div>
    
    <div class="container-header-width">
      <div class="contact__content">
        <div class="contact__info" ref="titleRef" :class="{ 'fade-in': isTitleVisible }">
          <h2 class="contact__title">
            <span class="contact__title-main">ОСТАЛИСЬ ВОПРОСЫ?</span>
            <span class="contact__title-sub">Свяжитесь с нами и мы поможем!</span>
          </h2>
          <div class="contact__description">
            <p>Наши специалисты готовы ответить на любые вопросы и предоставить подробную консультацию по нашему оборудованию.</p>
          </div>
        </div>
        <div class="contact__form-wrapper">
          <form class="contact__form" @submit.prevent="handleSubmit" ref="formRef" :class="{ 'slide-in': isFormVisible }">
            <div class="contact__fields">
              <div class="contact__field-group">
                <div class="contact__field">
                  <label class="contact__label" for="contact-name">Имя *</label>
                  <div class="contact__input-container">
                    <input
                      id="contact-name"
                      v-model="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      class="contact__input"
                      required
                      :disabled="status === 'success'"
                    />
                  </div>
                </div>
                <div class="contact__field">
                  <label class="contact__label" for="contact-email">Email *</label>
                  <div class="contact__input-container">
                    <input
                      id="contact-email"
                      v-model="email"
                      type="email"
                      placeholder="example@email.com"
                      class="contact__input"
                      required
                      :disabled="status === 'success'"
                    />
                  </div>
                </div>
              </div>
              
              <div class="contact__field">
                <label class="contact__label" for="contact-phone">Телефон</label>
                <div class="contact__input-container">
                  <input
                    id="contact-phone"
                    v-model="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
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
                    placeholder="Расскажите о ваших потребностях или задайте вопрос..."
                    class="contact__textarea"
                    rows="4"
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
                <span v-else class="contact__submit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                  </svg>
                </span>
                <span class="contact__submit-text">
                  {{ status === 'loading' ? 'Отправляем...' : 'Отправить сообщение' }}
                </span>
              </button>
            </div>
            <transition name="fade">
              <div v-if="status === 'success'" class="contact__status contact__status--success">
                <div class="contact__status-icon">✓</div>
                <div>
                  <strong>Спасибо за обращение!</strong>
                  <p>Мы получили ваше сообщение и свяжемся с вами в ближайшее время.</p>
                </div>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="status === 'error'" class="contact__status contact__status--error">
                <div class="contact__status-icon">!</div>
                <div>
                  <strong>Ошибка отправки</strong>
                  <p>Произошла ошибка при отправке сообщения. Попробуйте ещё раз.</p>
                </div>
              </div>
            </transition>
          </form>
        </div>
      </div>
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
