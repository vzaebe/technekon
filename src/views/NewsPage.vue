<template>
  <div class="news-page">
    <AppHeader />

    <main class="news-main">
      <!-- Page Header -->
      <section class="page-header" data-aos="fade-down">
        <div class="container">
          <h1 class="page-title">Новости Технекон</h1>
          <p class="page-subtitle">Последние события и достижения компании</p>
        </div>
      </section>

      <!-- News Grid -->
      <section class="news-grid" data-aos="fade-up">
        <div class="container">
          <div class="news-cards">
            <article
              v-for="item in newsList"
              :key="item.id"
              class="news-card"
              data-aos="fade-up"
              :data-aos-delay="item.id * 100"
            >
              <!-- Card Image -->
              <div class="news-card__image">
                <div class="news-card__gradient" :class="`gradient-${item.id}`"></div>
                <div class="news-card__date">{{ item.date }}</div>
              </div>

              <!-- Card Content -->
              <div class="news-card__content">
                <h2 class="news-card__title">{{ item.title }}</h2>
                <div class="news-card__excerpt">
                  {{ item.content[0] }}
                </div>
                <router-link :to="item.id === 1 ? '/news/robotics-line' : '#'" class="news-card__read-more">
                  Читать далее
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </router-link>
              </div>

              <!-- Expandable Full Content -->
              <div class="news-card__full-content" :class="{ 'expanded': expandedNews.includes(item.id) }">
                <div class="news-card__full-text">
                  <p v-for="(paragraph, idx) in item.content" :key="idx">{{ paragraph }}</p>
                </div>
                <button class="news-card__collapse" @click="toggleNews(item.id)">
                  {{ expandedNews.includes(item.id) ? 'Свернуть' : 'Развернуть' }}
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string[];
}

const expandedNews = ref<number[]>([]);

const toggleNews = (id: number) => {
  const index = expandedNews.value.indexOf(id);
  if (index > -1) {
    expandedNews.value.splice(index, 1);
  } else {
    expandedNews.value.push(id);
  }
};

// Five fictional news items about Tehnekon
const newsList = ref<NewsItem[]>([
  {
    id: 1,
    title: 'Технекон запускает инновационную линию промышленной роботизации',
    date: '15 января 2025',
    content: [
      'Компания Технекон объявила о запуске новой линии роботизированных станков для автоматизации тяжелых производственных процессов.',
      'Новая серия оборудована собственной интеллектуальной системой контроля качества и уже прошла первые испытания на заводе-партнёре в Казани.',
      'Ожидается, что новое оборудование повысит эффективность производства на 40% и снизит количество брака до минимума.'
    ],
  },
  {
    id: 2,
    title: 'Технекон подписал стратегическое соглашение с университетом ИТМО',
    date: '2 февраля 2025',
    content: [
      'Стороны договорились о совместных исследованиях в области аддитивных технологий и высокопрочных композитов.',
      'Студенты и аспиранты университета смогут проходить практику на производственных площадках Технекон.',
      'Партнёрство также предусматривает создание совместной лаборатории по разработке материалов нового поколения.'
    ],
  },
  {
    id: 3,
    title: 'Новый сервисный центр Технекон открыт в Новосибирске',
    date: '18 марта 2025',
    content: [
      'Центр станет ключевым хабом по обслуживанию оборудования для предприятий Сибири и Дальнего Востока.',
      'Ожидается, что благодаря новому центру время реакции на заявки сократится до 24 часов.',
      'В центре работают 25 высококвалифицированных специалистов, готовых оказать техническую поддержку 24/7.'
    ],
  },
  {
    id: 4,
    title: 'Технекон представил экосистему Industry 4.0 на выставке «Металлообработка-2025»',
    date: '5 мая 2025',
    content: [
      'На стенде компании посетители увидели комплексное решение по цифровизации цехов, включающее IoT-датчики и облачную аналитику.',
      'Разработки Технекон вызвали интерес крупных машиностроительных холдингов.',
      'Компания получила более 50 коммерческих предложений от потенциальных партнёров и клиентов.'
    ],
  },
  {
    id: 5,
    title: 'Технекон снизил углеродный след производства на 30%',
    date: '22 июня 2025',
    content: [
      'Компания продолжает реализовывать ESG-стратегию и объявила итоги первого года программы энергоэффективности.',
      'Экономия электроэнергии составила более 4 млн кВт⋅ч, что эквивалентно годовому потреблению небольшого посёлка.',
      'Внедрение замкнутого цикла охлаждения стало ключевым фактором достижения этих результатов.'
    ],
  },
]);

onMounted(() => {
  AOS.refresh();
});
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.news-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
}

.news-main {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;

  .page-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .page-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    font-weight: 300;
  }
}

.news-grid {
  padding: 6rem 0;
}

.news-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.news-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  &__image {
    position: relative;
    height: 240px;
    overflow: hidden;
  }

  &__gradient {
    width: 100%;
    height: 100%;
    position: relative;

    &.gradient-1 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    &.gradient-2 {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    &.gradient-3 {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }
    &.gradient-4 {
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    }
    &.gradient-5 {
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/src/assets/3d abstraction.svg') center/cover no-repeat;
      opacity: 0.3;
      mix-blend-mode: overlay;
    }
  }

  &__date {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.95);
    color: $text-dark;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    backdrop-filter: blur(10px);
  }

  &__content {
    padding: 2rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  &__excerpt {
    color: $text-gray;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  &__read-more {
    background: none;
    border: 2px solid $primary-color;
    color: $primary-color;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    &:hover {
      background: $primary-color;
      color: white;
      transform: translateX(2px);
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  }

  &__full-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    border-top: 1px solid #eee;

    &.expanded {
      max-height: 1000px;
    }
  }

  &__full-text {
    padding: 2rem;
    padding-top: 1.5rem;

    p {
      color: $text-dark;
      line-height: 1.7;
      margin-bottom: 1rem;
      font-size: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__collapse {
    width: 100%;
    background: #f8f9fa;
    border: none;
    padding: 1rem;
    color: $primary-color;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #e9ecef;
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .page-header {
    padding: 4rem 0 3rem;

    .page-title {
      font-size: 2.5rem;
    }

    .page-subtitle {
      font-size: 1.1rem;
    }
  }

  .news-cards {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .news-card {
    &__title {
      font-size: 1.3rem;
    }

    &__content {
      padding: 1.5rem;
    }

    &__full-text {
      padding: 1.5rem;
      padding-top: 1rem;
    }
  }
}

@media (max-width: 480px) {
  .news-cards {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .news-card__image {
    height: 180px;
  }
}
</style> 