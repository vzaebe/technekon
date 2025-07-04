<template>
  <div class="news-detail-page">
    <AppHeader />

    <main class="news-detail-main">
      <!-- Hero Section -->
      <section class="news-hero" data-aos="fade-down">
        <div class="hero-background">
          <div class="hero-gradient"></div>
          <div class="hero-pattern"></div>
        </div>
        <div class="container">
          <div class="hero-content">
            <div class="breadcrumb" data-aos="fade-right" data-aos-delay="200">
              <router-link to="/news" class="breadcrumb-link">Новости</router-link>
              <span class="breadcrumb-separator">→</span>
              <span class="breadcrumb-current">Инновационная линия роботизации</span>
            </div>
            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="300">
              Технекон запускает инновационную линию промышленной роботизации
            </h1>
            <div class="hero-meta" data-aos="fade-up" data-aos-delay="400">
              <div class="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>15 января 2025</span>
              </div>
              <div class="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Пресс-служба Технекон</span>
              </div>
              <div class="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <span>5 мин чтения</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="news-content-section">
        <div class="container">
          <div class="content-grid">
            <!-- Article Content -->
            <article class="article-content" data-aos="fade-up">
              <!-- Featured Image -->
              <div class="featured-image" data-aos="zoom-in">
                <img src="/src/assets/products/STD-3300.png" alt="Роботизированный станок Технекон" />
                <div class="image-caption">
                  Новый роботизированный станок серии STD-3300 на производственной линии
                </div>
              </div>

              <!-- Article Text -->
              <div class="article-text">
                <div class="lead-paragraph">
                  <strong>Компания Технекон объявила о запуске революционной линии роботизированных станков, которая кардинально изменит подход к автоматизации тяжелых производственных процессов в российской промышленности.</strong>
                </div>

                <p>
                  Новая серия оборудования STD-3300 представляет собой комплексное решение для предприятий металлообработки, включающее в себя не только высокоточные станки, но и интеллектуальную систему управления производством на базе искусственного интеллекта.
                </p>

                <blockquote class="quote">
                  <div class="quote-text">
                    "Это не просто новое оборудование — это новая философия производства. Мы создали экосистему, которая думает, анализирует и оптимизирует процессы в режиме реального времени"
                  </div>
                  <div class="quote-author">
                    — Алексей Петров, технический директор Технекон
                  </div>
                </blockquote>

                <h2>Ключевые особенности новой линии</h2>

                <div class="features-grid">
                  <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h3>ИИ-контроль качества</h3>
                    <p>Система машинного обучения анализирует каждую деталь и предотвращает брак еще на стадии производства</p>
                  </div>
                  <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Увеличение эффективности</h3>
                    <p>Производительность возрастает на 40% при снижении энергопотребления на 25%</p>
                  </div>
                  <div class="feature-card">
                    <div class="feature-icon">🔧</div>
                    <h3>Автономное обслуживание</h3>
                    <p>Система самодиагностики и предиктивного обслуживания минимизирует простои</p>
                  </div>
                  <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Аналитика в реальном времени</h3>
                    <p>Детальная статистика и прогнозы для оптимизации производственных процессов</p>
                  </div>
                </div>

                <h2>Первые результаты внедрения</h2>

                <p>
                  Пилотное внедрение новой линии на заводе-партнёре в Казани показало впечатляющие результаты. За первые три месяца работы удалось достичь следующих показателей:
                </p>

                <div class="stats-grid">
                  <div class="stat-item">
                    <div class="stat-number">40%</div>
                    <div class="stat-label">Рост производительности</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">95%</div>
                    <div class="stat-label">Снижение брака</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">60%</div>
                    <div class="stat-label">Экономия на обслуживании</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Непрерывная работа</div>
                  </div>
                </div>

                <!-- Image Gallery -->
                <div class="image-gallery">
                  <h2>Фотогалерея</h2>
                  <div class="gallery-grid">
                    <div class="gallery-item" v-for="(image, index) in galleryImages" :key="index" @click="openModal(index)">
                      <img :src="image.thumb" :alt="image.caption" />
                      <div class="gallery-overlay">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Планы на будущее</h2>

                <p>
                  Компания планирует расширить линейку роботизированных решений и к концу 2025 года представить полную экосистему Industry 4.0, включающую:
                </p>

                <ul class="styled-list">
                  <li>Интеграцию с облачными платформами</li>
                  <li>Модули дополненной реальности для обучения операторов</li>
                  <li>Блокчейн-систему отслеживания качества продукции</li>
                  <li>Интеграцию с ERP-системами предприятий</li>
                </ul>

                <div class="call-to-action">
                  <h3>Заинтересованы в модернизации производства?</h3>
                  <p>Свяжитесь с нашими специалистами для получения персональной консультации</p>
                  <router-link to="/contacts" class="cta-button">
                    Получить консультацию
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </router-link>
                </div>
              </div>
            </article>

            <!-- Sidebar -->
            <aside class="sidebar" data-aos="fade-left">
              <!-- Share Section -->
              <div class="sidebar-section">
                <h3>Поделиться</h3>
                <div class="share-buttons">
                  <button class="share-btn telegram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 5L19 20L7 12L3 8L21 5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16 8L7 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Telegram
                  </button>
                  <button class="share-btn whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9965 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00347 9.92179 4.44058 8.37488 5.27072 7.03258C6.10086 5.69028 7.28825 4.60571 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94696 20.885 8.91565 21 11V11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    WhatsApp
                  </button>
                  <button class="share-btn email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Email
                  </button>
                </div>
              </div>

              <!-- Related News -->
              <div class="sidebar-section">
                <h3>Похожие новости</h3>
                <div class="related-news">
                  <article class="related-item" v-for="item in relatedNews" :key="item.id">
                    <div class="related-image">
                      <div :class="`related-gradient gradient-${item.id}`"></div>
                    </div>
                    <div class="related-content">
                      <h4>{{ item.title }}</h4>
                      <div class="related-date">{{ item.date }}</div>
                    </div>
                  </article>
                </div>
              </div>

              <!-- Tags -->
              <div class="sidebar-section">
                <h3>Теги</h3>
                <div class="tags">
                  <span class="tag" v-for="tag in tags" :key="tag">#{{ tag }}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>

    <!-- Modal for Image Gallery -->
    <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <img :src="galleryImages[currentImageIndex]?.full" :alt="galleryImages[currentImageIndex]?.caption" />
        <div class="modal-caption">{{ galleryImages[currentImageIndex]?.caption }}</div>
        <div class="modal-nav">
          <button @click="prevImage" class="nav-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button @click="nextImage" class="nav-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

const modalOpen = ref(false);
const currentImageIndex = ref(0);

const galleryImages = ref([
  {
    thumb: '/src/assets/products/STD-3300.png',
    full: '/src/assets/products/STD-3300.png',
    caption: 'Роботизированный станок STD-3300 в работе'
  },
  {
    thumb: '/src/assets/3d abstraction.svg',
    full: '/src/assets/3d abstraction.svg',
    caption: 'Система управления производством'
  },
  {
    thumb: '/src/assets/products/STD-3300.png',
    full: '/src/assets/products/STD-3300.png',
    caption: 'Интерфейс системы мониторинга'
  },
  {
    thumb: '/src/assets/3d abstraction.svg',
    full: '/src/assets/3d abstraction.svg',
    caption: 'Производственная линия после модернизации'
  }
]);

const relatedNews = ref([
  {
    id: 2,
    title: 'Технекон подписал соглашение с университетом ИТМО',
    date: '2 февраля 2025'
  },
  {
    id: 3,
    title: 'Новый сервисный центр в Новосибирске',
    date: '18 марта 2025'
  },
  {
    id: 4,
    title: 'Экосистема Industry 4.0 на выставке',
    date: '5 мая 2025'
  }
]);

const tags = ref([
  'роботизация',
  'промышленность',
  'инновации',
  'ИИ',
  'автоматизация',
  'Industry4.0'
]);

const openModal = (index: number) => {
  currentImageIndex.value = index;
  modalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modalOpen.value = false;
  document.body.style.overflow = 'auto';
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length;
};

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? galleryImages.value.length - 1 
    : currentImageIndex.value - 1;
};

onMounted(() => {
  AOS.refresh();
});
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.news-detail-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.news-detail-main {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Hero Section
.news-hero {
  position: relative;
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  color: white;
  padding: 8rem 0 6rem;
  overflow: hidden;

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(42, 208, 162, 0.9) 0%, rgba(134, 255, 221, 0.7) 100%);
  }

  .hero-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/src/assets/3d abstraction.svg') center/cover no-repeat;
    opacity: 0.1;
    mix-blend-mode: overlay;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .breadcrumb {
    margin-bottom: 2rem;
    font-size: 0.9rem;
    
    .breadcrumb-link {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: white;
      }
    }
    
    .breadcrumb-separator {
      margin: 0 0.75rem;
      opacity: 0.6;
    }
    
    .breadcrumb-current {
      opacity: 0.9;
    }
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hero-meta {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.9;
      
      svg {
        flex-shrink: 0;
      }
    }
  }
}

// Content Section
.news-content-section {
  padding: 6rem 0;
  background: #fafafa;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;
}

// Article Content
.article-content {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.featured-image {
  margin-bottom: 3rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  .image-caption {
    padding: 1rem 1.5rem;
    background: #f8f9fa;
    font-size: 0.9rem;
    color: $text-gray;
    font-style: italic;
    text-align: center;
  }
}

.article-text {
  .lead-paragraph {
    font-size: 1.25rem;
    line-height: 1.6;
    color: $text-dark;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(42, 208, 162, 0.05) 0%, rgba(134, 255, 221, 0.05) 100%);
    border-radius: 10px;
    border-left: 4px solid $primary-color;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: $text-dark;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: $text-dark;
    margin: 3rem 0 1.5rem;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 60px;
      height: 3px;
      background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: $text-dark;
    margin: 2rem 0 1rem;
  }
}

.quote {
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  border-left: 5px solid $primary-color;
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: $primary-color;
    font-family: serif;
    line-height: 1;
  }
  
  .quote-text {
    font-size: 1.25rem;
    font-style: italic;
    line-height: 1.6;
    color: $text-dark;
    margin-bottom: 1rem;
  }
  
  .quote-author {
    font-weight: 600;
    color: $primary-color;
  }
}

// Features Grid
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.feature-card {
  background: white;
  border: 2px solid #f1f5f9;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: $primary-color;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(42, 208, 162, 0.15);
  }
  
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 0.95rem;
    color: $text-gray;
    line-height: 1.5;
    margin: 0;
  }
}

// Stats Grid
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  border-radius: 20px;
  color: white;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.95rem;
    opacity: 0.9;
  }
}

// Image Gallery
.image-gallery {
  margin: 4rem 0;
  
  h2 {
    margin-bottom: 2rem;
  }
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(42, 208, 162, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    svg {
      color: white;
    }
  }
  
  &:hover {
    img {
      transform: scale(1.1);
    }
    
    .gallery-overlay {
      opacity: 1;
    }
  }
}

// Styled List
.styled-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: $primary-color;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
}

// Call to Action
.call-to-action {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  
  h3 {
    font-size: 1.75rem;
    color: $text-dark;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    color: $text-gray;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: $primary-color;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background: darken($primary-color, 10%);
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(42, 208, 162, 0.3);
    }
    
    svg {
      transition: transform 0.3s ease;
    }
    
    &:hover svg {
      transform: translateX(4px);
    }
  }
}

// Sidebar
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-section {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 1.5rem;
  }
}

// Share Buttons
.share-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.telegram {
    background: #0088cc;
    color: white;
    
    &:hover {
      background: darken(#0088cc, 10%);
    }
  }
  
  &.whatsapp {
    background: #25d366;
    color: white;
    
    &:hover {
      background: darken(#25d366, 10%);
    }
  }
  
  &.email {
    background: #ea4335;
    color: white;
    
    &:hover {
      background: darken(#ea4335, 10%);
    }
  }
}

// Related News
.related-news {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.related-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  transition: background 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: #f8f9fa;
  }
  
  .related-image {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
  }
  
  .related-gradient {
    width: 100%;
    height: 100%;
    
    &.gradient-2 {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    &.gradient-3 {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }
    &.gradient-4 {
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    }
  }
  
  .related-content {
    flex: 1;
    
    h4 {
      font-size: 0.95rem;
      font-weight: 600;
      color: $text-dark;
      line-height: 1.3;
      margin-bottom: 0.5rem;
    }
    
    .related-date {
      font-size: 0.8rem;
      color: $text-gray;
    }
  }
}

// Tags
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

// Modal
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  
  img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 10px;
  }
  
  .modal-caption {
    color: white;
    text-align: center;
    margin-top: 1rem;
    font-size: 1rem;
  }
}

.modal-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    opacity: 0.7;
  }
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  
  .nav-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s ease;
    pointer-events: auto;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}

// Responsive Design
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-meta {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .news-hero {
    padding: 6rem 0 4rem;
    
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
  
  .article-content {
    padding: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .call-to-action {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }
  
  .article-content {
    padding: 1.5rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-overlay {
    padding: 1rem;
  }
}
</style> 