<template>
  <div class="service-offers-page">
    <AppHeader />

    <!-- Используем PageBanner для страницы спецпредложений -->
    <PageBanner 
      :title-lines="['УСЛУГИ', 'ТЕХНЕКОНА']"
      subtitle="Промышленные услуги нового поколения. Увеличьте эффективность производства на 85% с помощью ИИ-диагностики и автоматизации"
      theme="offers"
    />

    <main class="offers-main">
      <!-- Services Grid -->
      <section class="services-grid">
        <div v-for="(service, index) in services" :key="service.id" class="service-wrapper">
          <div class="service-card" 
               :class="{ 'expanded': openId === service.id }"
               @click="toggle(service.id)"
               :data-aos="'fade-up'" 
               :data-aos-delay="index * 100">
            <SectionHeader>
              <template #icon>
                <div class="service-icon">
                  <div class="icon-bg" :style="{ background: service.gradient }"></div>
                  <span class="icon-symbol">{{ service.icon }}</span>
                </div>
              </template>
              <template #title>
                <div class="service-basic-info">
                  <h3 class="service-title" v-html="service.title"></h3>
                  <p class="service-tagline">{{ service.tagline }}</p>
                  <div class="service-price">
                    <span class="price-label">от</span>
                    <span class="price-value">{{ service.price }}</span>
                    <span class="price-period">₽/мес</span>
                  </div>
                </div>
              </template>
              <div class="expand-indicator" :class="{ 'open': openId === service.id }">
                <span class="arrow">▼</span>
              </div>
            </SectionHeader>

            <!-- Service Details (Expanded) -->
            <transition name="slide-down">
              <div v-if="openId === service.id" class="service-details">
                <div class="details-grid">
                  <!-- Description Column -->
                  <div class="details-column">
                    <h4 class="details-title">Что входит в услугу:</h4>
                    <ul class="features-list">
                      <li v-for="feature in service.features" :key="feature" class="feature-item">
                        <span class="check-icon">✓</span>
                        {{ feature }}
                      </li>
                    </ul>
                    <div class="benefits-section">
                      <h4 class="benefits-title">Ваши преимущества:</h4>
                      <div class="benefits-grid">
                        <div v-for="benefit in service.benefits" :key="benefit.title" class="benefit-item">
                          <div class="benefit-icon">{{ benefit.icon }}</div>
                          <div class="benefit-text">
                            <strong>{{ benefit.title }}</strong>
                            <p>{{ benefit.description }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Visual Column -->
                  <div class="visual-column">
                    <div class="service-image-container">
                      <img :src="service.image" :alt="service.title" class="service-image" />
                      <div class="image-overlay">
                        <div class="overlay-stats">
                          <div v-for="stat in service.stats" :key="stat.label" class="overlay-stat">
                            <div class="stat-value">{{ stat.value }}</div>
                            <div class="stat-label">{{ stat.label }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Call to Action -->
                    <div class="cta-section">
                      <div class="urgency-banner">
                        <span class="urgency-icon">●</span>
                        <span class="urgency-text">{{ service.urgency }}</span>
                      </div>
                      <div class="cta-buttons">
                        <router-link to="/contacts" class="cta-primary">
                          <span class="cta-icon">→</span>
                          Получить предложение
                        </router-link>
                        <button class="cta-secondary" @click.stop="showDemo(service.id)">
                          <span class="cta-icon">▶</span>
                          Смотреть демо
                        </button>
                      </div>
                      <div class="guarantee">
                        <span class="guarantee-icon">✓</span>
                        <span class="guarantee-text">{{ service.guarantee }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- Bottom CTA Section -->
      <section class="bottom-cta" data-aos="fade-up">
        <div class="cta-bg">
          <div class="circuit-pattern"></div>
        </div>
        <div class="cta-content">
          <h2 class="cta-title">Готовы к технологическому прорыву?</h2>
          <p class="cta-subtitle">
            Получите персональную консультацию и узнайте, как наши решения 
            могут трансформировать ваше производство
          </p>
          <div class="cta-features">
            <div class="cta-feature">
              <span class="feature-icon">
              <PowerIcon />
            </span>
              <span>Быстрый ROI</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">●</span>
              <span>Индивидуальный подход</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">◆</span>
              <span>Гарантия результата</span>
            </div>
          </div>
          <router-link to="/contacts" class="final-cta">
            <span class="final-cta-text">Связаться с экспертом</span>
            <span class="final-cta-arrow">▶</span>
          </router-link>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import PageBanner from '@/components/PageBanner.vue'
import AOS from 'aos'
import SectionHeader from '@/components/SectionHeader.vue'
import PowerIcon from '@/components/icons/PowerIcon.vue'

interface ServiceBenefit {
  icon: string
  title: string
  description: string
}

interface ServiceStat {
  value: string
  label: string
}

interface Service {
  id: number
  title: string
  tagline: string
  price: string
  icon: string
  gradient: string
  features: string[]
  benefits: ServiceBenefit[]
  stats: ServiceStat[]
  image: string
  urgency: string
  guarantee: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'ИИ-диагностика <span class="accent">оборудования</span>',
    tagline: 'Предсказывайте поломки за 3 недели до их возникновения',
    price: '89 000',
    icon: 'PowerIcon',
    gradient: 'linear-gradient(135deg, #2ad0a2 0%, #86ffdd 100%)',
    features: [
      'Установка 50+ беспроводных датчиков вибрации',
      'Облачная платформа с ИИ-алгоритмами',
      'Мобильное приложение с push-уведомлениями',
      'Интеграция с 1С и SAP',
      'Обучение персонала (16 часов)',
      '24/7 мониторинг и техподдержка'
    ],
    benefits: [
      {
        icon: 'CurrencyIcon',
        title: 'Экономия до 15 млн ₽/год',
        description: 'За счет предотвращения внеплановых простоев'
      },
      {
        icon: 'TrendIcon',
        title: '+40% эффективности',
        description: 'Оптимизация графиков обслуживания'
      },
      {
        icon: 'CircleIcon',
        title: '99.7% точность',
        description: 'Прогнозирования критических состояний'
      }
    ],
    stats: [
      { value: '150+', label: 'предприятий' },
      { value: '3-21', label: 'дней прогноза' },
      { value: '85%', label: 'снижение аварий' }
    ],
    image: '/placeholder.svg',
    urgency: 'Акция до конца месяца: -30% на внедрение',
    guarantee: '100% возврат средств, если не окупится за год'
  },
  {
    id: 2,
    title: 'Роботизация <span class="accent">производства</span>',
    tagline: 'Автоматизируйте сложные процессы с ROI 250%',
    price: '350 000',
    icon: 'GearIcon',
    gradient: 'linear-gradient(135deg, #00f026 0%, #2ad0a2 100%)',
    features: [
      'Проектирование роботизированной линии',
      'Поставка и монтаж промышленных роботов',
      'Разработка управляющего ПО',
      'Система компьютерного зрения',
      'Цифровой двойник производства',
      'Обучение операторов и инженеров'
    ],
    benefits: [
      {
        icon: '↑',
        title: '+300% скорость',
        description: 'Производства относительно ручного труда'
      },
      {
        icon: '✓',
        title: '0.01% брака',
        description: 'Благодаря компьютерному зрению'
      },
      {
        icon: '∞',
        title: '24/7 работа',
        description: 'Без выходных и человеческого фактора'
      }
    ],
    stats: [
      { value: '250%', label: 'ROI за 2 года' },
      { value: '15-30%', label: 'экономия ФОТ' },
      { value: '99.99%', label: 'время работы' }
    ],
    image: '/placeholder.svg',
    urgency: 'Господдержка: возмещение до 70% затрат',
    guarantee: 'Гарантия окупаемости в течение 24 месяцев'
  },
  {
    id: 3,
    title: 'Цифровая <span class="accent">трансформация</span>',
    tagline: 'Превратите ваш завод в предприятие Индустрии 4.0',
    price: '180 000',
    icon: 'DiamondIcon',
    gradient: 'linear-gradient(135deg, #86ffdd 0%, #00ffb8 100%)',
    features: [
      'Аудит текущих процессов и IT-архитектуры',
      'Внедрение IoT-платформы (1000+ датчиков)',
      'Создание цифрового двойника предприятия',
      'Big Data аналитика и BI-дашборды',
      'Интеграция с MES/ERP системами',
      'Программа цифровых компетенций'
    ],
    benefits: [
      {
        icon: '▲',
        title: 'Полная прозрачность',
        description: 'Всех процессов в режиме реального времени'
      },
      {
        icon: '■',
        title: 'Data-driven решения',
        description: 'На основе анализа больших данных'
      },
      {
        icon: '→',
        title: '+60% производительности',
        description: 'За счет оптимизации процессов'
      }
    ],
    stats: [
      { value: '500+', label: 'KPI в реальном времени' },
      { value: '90%', label: 'автоматизации процессов' },
      { value: '18 мес', label: 'срок окупаемости' }
    ],
    image: '/placeholder.svg',
    urgency: 'Льготная программа для предприятий ОПК',
    guarantee: 'Поэтапная оплата по результатам каждого этапа'
  },
  {
    id: 4,
    title: 'Удаленный <span class="accent">мониторинг</span>',
    tagline: 'Следите за оборудованием с любой точки мира',
    price: '45 000',
    icon: 'MonitorIcon',
    gradient: 'linear-gradient(135deg, #2ad0a2 0%, #00ffb8 100%)',
    features: [
      'Облачная платформа мониторинга',
      'Мобильные и веб-приложения',
      'Настраиваемые алерты и уведомления',
      'Видео-наблюдение с ИИ-анализом',
      'Генерация автоматических отчетов',
      'API для интеграции с вашими системами'
    ],
    benefits: [
      {
        icon: '●',
        title: 'Глобальный контроль',
        description: 'Управляйте всеми площадками из одного центра'
      },
      {
        icon: '⚡',
        title: 'Мгновенное реагирование',
        description: 'Получайте уведомления за секунды'
      },
      {
        icon: '◉',
        title: 'Всегда на связи',
        description: 'Контроль через смартфон 24/7'
      }
    ],
    stats: [
      { value: '5000+', label: 'объектов под контролем' },
      { value: '<5 сек', label: 'время реакции' },
      { value: '99.9%', label: 'доступность сервиса' }
    ],
    image: '/placeholder.svg',
    urgency: 'Первый месяц мониторинга БЕСПЛАТНО',
    guarantee: 'Возврат средств если не найдем проблемы за месяц'
  }
]

const openId = ref<number | null>(1)

const toggle = (id: number) => {
  openId.value = openId.value === id ? null : id
}

const showDemo = (serviceId: number) => {
  console.log(`Показать демо для услуги ${serviceId}`)
  // Здесь можно добавить логику показа демо-видео или открытия модального окна
}

onMounted(() => {
  AOS.refresh()
})
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.service-offers-page {
  min-height: 100vh;
  background: #ffffff;
}

// Hero Section
.hero-section {
  position: relative;
  padding: 4rem 1rem 6rem;
  overflow: hidden;
  background: linear-gradient(135deg, 
    rgba(42, 208, 162, 0.03) 0%, 
    rgba(134, 255, 221, 0.05) 100%);

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .floating-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(42, 208, 162, 0.2);
      border-radius: 50%;
      animation: float-up linear infinite;
    }
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: $text-dark;
  }

  .hero-badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: linear-gradient(135deg, $primary-color, $primary-light);
    color: white;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 2rem;
    box-shadow: 0 4px 15px rgba(42, 208, 162, 0.3);
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: $text-dark;

    .gradient-text {
      background: linear-gradient(45deg, $primary-color, $primary-accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    color: $text-secondary;
    opacity: 0.8;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;

    .stat-item {
      text-align: center;
      padding: 1.5rem;
      background: white;
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(42, 208, 162, 0.1);
      border: 1px solid rgba(42, 208, 162, 0.1);

      .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: $primary-color;
      }

      .stat-label {
        font-size: 0.9rem;
        color: $text-secondary;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
}

// Services Grid
.services-grid {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.service-wrapper {
  perspective: 1000px;
}

.service-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(42, 208, 162, 0.08);
  border: 1px solid rgba(42, 208, 162, 0.1);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(42, 208, 162, 0.15);
    border-color: rgba(42, 208, 162, 0.2);
  }

  &.expanded {
    transform: scale(1.01);
    box-shadow: 0 25px 50px rgba(42, 208, 162, 0.2);
    border-color: $primary-color;
  }
}

.service-details {
  border-top: 1px solid #f0f0f0;
  padding: 2rem;

  .details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .details-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: $text-dark;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;

    .feature-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #f5f5f5;

      .check-icon {
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, $primary-color, $primary-accent);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
        flex-shrink: 0;
      }
    }
  }

  .benefits-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $text-dark;
  }

  .benefits-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .benefit-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9ff;
      border-radius: 12px;

      .benefit-icon {
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: 10px;
        flex-shrink: 0;
        color: $primary-color;
        font-weight: bold;
        border: 2px solid rgba(42, 208, 162, 0.2);
      }

      .benefit-text {
        strong {
          color: $primary-color;
          display: block;
          margin-bottom: 0.25rem;
        }

        p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }
      }
    }
  }

  .visual-column {
    .service-image-container {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 2rem;

      .service-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(42, 208, 162, 0.85), rgba(0, 240, 38, 0.75));
        display: flex;
        align-items: center;
        justify-content: center;

        .overlay-stats {
          display: flex;
          gap: 2rem;
          text-align: center;
          color: white;

          .overlay-stat {
            .stat-value {
              font-size: 2rem;
              font-weight: 700;
              color: white;
            }

            .stat-label {
              font-size: 0.9rem;
              opacity: 0.9;
              color: rgba(255, 255, 255, 0.9);
            }
          }
        }
      }
    }

    .cta-section {
      .urgency-banner {
        background: linear-gradient(135deg, $primary-color, $primary-accent);
        color: white;
        padding: 1rem;
        border-radius: 12px;
        text-align: center;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: 0 4px 15px rgba(42, 208, 162, 0.3);

        .urgency-icon {
          font-size: 1.2rem;
          animation: pulse 2s infinite;
          color: white;
          font-weight: bold;
        }

        .urgency-text {
          font-weight: 600;
        }
      }

      .cta-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;

        .cta-primary, .cta-secondary {
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;

          .cta-icon {
            font-weight: bold;
          }
        }

        .cta-primary {
          background: linear-gradient(135deg, $primary-color, $primary-accent);
          color: white;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
        }

        .cta-secondary {
          background: white;
          color: $primary-color;
          border: 2px solid $primary-color;

          &:hover {
            background: $primary-color;
            color: white;
          }
        }
      }

      .guarantee {
        text-align: center;
        padding: 1rem;
        background: rgba(42, 208, 162, 0.1);
        border: 1px solid rgba(42, 208, 162, 0.2);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .guarantee-icon {
          color: $primary-color;
        }

        .guarantee-text {
          font-size: 0.9rem;
          color: $primary-color;
          font-weight: 500;
        }
      }
    }
  }
}

// Bottom CTA
.bottom-cta {
  background: linear-gradient(135deg, 
    rgba(42, 208, 162, 0.05) 0%, 
    rgba(134, 255, 221, 0.08) 100%);
  color: $text-dark;
  padding: 4rem 1rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(42, 208, 162, 0.1);

  .cta-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.05;

    .circuit-pattern {
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 25% 25%, $primary-color 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, $primary-color 2px, transparent 2px);
      background-size: 50px 50px;
      animation: circuit-move 20s linear infinite;
    }
  }

  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;

    .cta-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: $text-dark;
    }

    .cta-subtitle {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      opacity: 0.8;
      line-height: 1.6;
      color: $text-secondary;
    }

    .cta-features {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;

      .cta-feature {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: $text-secondary;

        .feature-icon {
          font-size: 1.5rem;
          color: $primary-color;
        }
      }
    }

    .final-cta {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      background: linear-gradient(135deg, $primary-color, $primary-accent);
      color: white;
      padding: 1.5rem 3rem;
      border-radius: 60px;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(42, 208, 162, 0.3);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(42, 208, 162, 0.4);

        .final-cta-arrow {
          transform: translateX(5px);
        }
      }

      .final-cta-arrow {
        font-size: 1.5rem;
        transition: transform 0.3s ease;
      }
    }
  }
}

// Animations
@keyframes float-up {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes circuit-move {
  0% {
    background-position: 0 0, 25px 25px;
  }
  100% {
    background-position: 50px 50px, 75px 75px;
  }
}

// Transitions
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: top;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

// Responsive Design
@media (max-width: 768px) {
  .details-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }

  .service-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem !important;
  }

  .hero-stats {
    gap: 2rem !important;
  }

  .cta-features {
    flex-direction: column !important;
    gap: 1rem !important;
  }

  .overlay-stats {
    flex-direction: column !important;
    gap: 1rem !important;
  }
}

@media (max-width: 480px) {
  .services-grid {
    padding: 2rem 1rem !important;
  }

  .service-header {
    padding: 1.5rem !important;
  }

  .service-details {
    padding: 1.5rem !important;
  }

  .hero-section {
    padding: 3rem 1rem 4rem !important;
  }

  .bottom-cta {
    padding: 3rem 1rem !important;
  }
}
</style> 