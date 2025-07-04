<template>
  <div class="history-page" @mousemove="handleMouseMove" ref="pageRef">
    <AppHeader />

    <!-- Advanced Background Graphics -->
    <div class="bg-graphics">
      <!-- Animated Grid -->
      <div class="cyber-grid" :style="{ transform: `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)` }"></div>
      
      <!-- 3D Rotating Gears -->
      <div class="gear-system">
        <div class="gear gear-xl" :style="{ transform: `rotate(${scrollProgress * 360}deg)` }"></div>
        <div class="gear gear-large" :style="{ transform: `rotate(${-scrollProgress * 280}deg)` }"></div>
        <div class="gear gear-medium" :style="{ transform: `rotate(${scrollProgress * 420}deg)` }"></div>
        <div class="gear gear-small" :style="{ transform: `rotate(${-scrollProgress * 500}deg)` }"></div>
      </div>
      
      <!-- Matrix Rain Effect -->
      <div class="matrix-rain" ref="matrixRef"></div>
      
      <!-- Holographic Waves -->
      <div class="holo-waves">
        <div v-for="n in 5" :key="n" class="wave" :style="{ animationDelay: `${n * 0.3}s` }"></div>
      </div>
      
      <!-- Particle System -->
      <div class="particle-system">
        <div v-for="n in 20" :key="n" class="particle" 
             :style="{ 
               left: `${Math.random() * 100}%`, 
               animationDelay: `${Math.random() * 10}s`,
               animationDuration: `${8 + Math.random() * 4}s`
             }"></div>
      </div>
      
      <!-- Energy Beams -->
      <div class="energy-beams">
        <div class="beam beam-1"></div>
        <div class="beam beam-2"></div>
        <div class="beam beam-3"></div>
      </div>
    </div>

    <!-- Progress Indicator -->
    <div class="scroll-progress">
      <div class="progress-ring">
        <svg class="progress-svg" width="60" height="60">
          <circle cx="30" cy="30" r="25" class="progress-bg"></circle>
          <circle cx="30" cy="30" r="25" class="progress-fill" 
                  :style="{ strokeDashoffset: circumference - (scrollProgress * circumference) }"></circle>
        </svg>
        <div class="progress-text">{{ Math.round(scrollProgress * 100) }}%</div>
      </div>
    </div>

    <main class="history-main" ref="mainRef">
      <!-- Epic Hero Section -->
      <div class="history-hero" data-aos="zoom-in-up" data-aos-duration="1500">
        <div class="hero-content">
          <div class="title-container">
            <h1 class="history-title">
              <span class="title-line glitch" data-text="ИСТОРИЯ">ИСТОРИЯ</span>
              <span class="title-line gradient-text neon-glow" data-text="ИННОВАЦИЙ">ИННОВАЦИЙ</span>
            </h1>
            <div class="title-effects">
              <div class="scanning-line"></div>
              <div class="hologram-flicker"></div>
            </div>
          </div>
          
          <div class="history-line">
            <div class="line-fill" :style="{ width: `${scrollProgress * 100}%` }"></div>
          </div>
          
          <p class="hero-subtitle typewriter">
            <span ref="typewriterRef">32 года в авангарде вибродиагностики</span>
          </p>
          
          <!-- Interactive Stats Counter -->
          <div class="hero-stats">
            <div v-for="stat in heroStats" :key="stat.label" class="hero-stat" 
                 @click="animateStatCounter(stat)">
              <div class="stat-value" :ref="`stat-${stat.label}`">{{ stat.currentValue }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-sparkle" :class="{ active: stat.isAnimating }"></div>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
        </div>
      </div>

      <!-- Epic Interactive Timeline -->
      <section class="history-timeline">
        <div class="timeline-track">
          <div class="track-progress" :style="{ height: `${timelineProgress}%` }"></div>
          <div class="track-glow"></div>
        </div>
        
        <!-- Timeline Navigation -->
        <div class="timeline-nav">
          <button v-for="(milestone, index) in milestones" :key="index"
                  @click="scrollToMilestone(index)"
                  :class="{ active: currentMilestone === index }"
                  class="nav-dot">
            <span class="dot-year">{{ milestone.period.split('–')[0] }}</span>
          </button>
        </div>
        
        <article
          v-for="(milestone, index) in milestones"
          :key="index"
          :ref="`milestone-${index}`"
          class="milestone"
          :class="{ 
            'milestone-right': index % 2 === 1,
            'milestone-active': currentMilestone === index,
            'milestone-viewed': viewedMilestones.includes(index)
          }"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 200"
          @click="activateMilestone(index)"
        >
          <!-- Enhanced Timeline Node -->
          <div class="timeline-node">
            <div class="node-circle">
              <div class="node-inner">
                <div class="node-icon">{{ milestone.icon }}</div>
              </div>
              <div class="node-ring"></div>
              <div class="node-pulse" v-if="currentMilestone === index"></div>
            </div>
            <div class="node-year">{{ milestone.period }}</div>
            <div class="node-connector"></div>
          </div>

          <!-- Enhanced Content Card -->
          <div class="milestone-card" 
               :style="{ transform: `perspective(1000px) rotateY(${index % 2 === 0 ? mouseX * 0.01 : -mouseX * 0.01}deg)` }">
            
            <!-- Card Glow Effect -->
            <div class="card-glow" :class="{ active: currentMilestone === index }"></div>
            
            <div class="card-header">
              <h2 class="milestone-title">
                <span class="title-text">{{ milestone.title }}</span>
                <div class="title-highlight"></div>
              </h2>
              <div class="title-accent">
                <div class="accent-fill" :style="{ width: viewedMilestones.includes(index) ? '100%' : '0%' }"></div>
              </div>
            </div>
            
            <div class="card-body">
              <!-- Interactive Image with Parallax -->
              <div class="milestone-image" 
                   @mouseenter="handleImageHover(index)"
                   @mouseleave="handleImageLeave(index)">
                <img 
                  :src="`/placeholder-${index + 1}.jpg`" 
                  :alt="milestone.title"
                  class="card-img"
                  :style="{ transform: `scale(${hoveredImage === index ? 1.1 : 1})` }"
                />
                <div class="img-overlay" :class="{ active: hoveredImage === index }">
                  <div class="overlay-content">
                    <div class="scan-line"></div>
                    <div class="overlay-icon">🔍</div>
                    <div class="overlay-text">ДЕТАЛИ</div>
                  </div>
                </div>
                
                <!-- Image Particles -->
                <div class="image-particles" v-if="hoveredImage === index">
                  <div v-for="n in 10" :key="n" class="img-particle"></div>
                </div>
              </div>
              
              <div class="milestone-content">
                <p class="milestone-desc" v-html="milestone.description"></p>
                
                <!-- Enhanced Achievement Badges -->
                <div class="achievement-badges" v-if="milestone.achievements">
                  <span 
                    v-for="(achievement, achIndex) in milestone.achievements"
                    :key="achievement"
                    class="badge enhanced-badge"
                    :style="{ animationDelay: `${achIndex * 0.2}s` }"
                    @click="celebrateBadge(achievement)"
                  >
                    <span class="badge-text">{{ achievement }}</span>
                    <div class="badge-shine"></div>
                  </span>
                </div>

                <!-- Team Members with Animations -->
                <div class="team-preview" v-if="milestone.teamSize">
                  <div class="team-avatars">
                    <div 
                      v-for="n in Math.min(milestone.teamSize, 4)"
                      :key="n"
                      class="avatar animated-avatar"
                      :style="{ animationDelay: `${n * 0.1}s` }"
                      @click="animateAvatar(n)"
                    >
                      <img :src="`/team-${index}-${n}.jpg`" :alt="`Команда ${n}`" />
                      <div class="avatar-ring"></div>
                    </div>
                    <div v-if="milestone.teamSize > 4" class="avatar-more pulse-more">
                      +{{ milestone.teamSize - 4 }}
                      <div class="more-explosion" v-if="showTeamExplosion"></div>
                    </div>
                  </div>
                  <span class="team-count">Команда: {{ milestone.teamSize }} человек</span>
                </div>
              </div>
            </div>

            <!-- Enhanced Interactive Stats -->
            <div class="card-stats" v-if="milestone.stats">
              <div 
                v-for="(stat, statIndex) in milestone.stats"
                :key="statIndex"
                class="stat-item enhanced-stat"
                :data-aos="'fade-up'"
                :data-aos-delay="(index * 200) + (statIndex * 100)"
                @click="animateStat(stat, statIndex)"
              >
                <div class="stat-chart">
                  <div class="chart-fill" :style="{ height: `${stat.percentage || 60}%` }"></div>
                </div>
                <div class="stat-number">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
                <div class="stat-pulse" :class="{ active: animatedStats.includes(statIndex) }"></div>
              </div>
            </div>
            
            <!-- Card Border Animation -->
            <div class="card-border-glow"></div>
          </div>
        </article>
      </section>

      <!-- Epic Partners Section -->
      <section class="partners-timeline" data-aos="fade-up">
        <h2 class="section-title">
          <span class="title-main">Наши партнёры</span>
          <span class="title-sub">через годы инноваций</span>
          <div class="title-waves">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </h2>
        
        <div class="partners-grid">
          <div 
            v-for="n in 8"
            :key="n"
            class="partner-card enhanced-partner"
            :data-aos="'zoom-in'"
            :data-aos-delay="n * 100"
            @click="celebratePartner(n)"
          >
            <div class="partner-glow"></div>
            <img :src="`/partner-${n}.png`" :alt="`Партнёр ${n}`" />
            <div class="partner-overlay">
              <span>Партнёр {{ n }}</span>
              <div class="partner-stats">
                <div class="stat">{{ Math.floor(Math.random() * 15) + 5 }} лет</div>
                <div class="stat">{{ Math.floor(Math.random() * 50) + 10 }} проектов</div>
              </div>
            </div>
            <div class="card-sparkles" v-if="celebratedPartners.includes(n)">
              <div v-for="i in 6" :key="i" class="sparkle"></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed, nextTick } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AOS from 'aos'

interface Milestone {
  period: string
  title: string
  description: string
  achievements?: string[]
  teamSize?: number
  stats?: { value: string; label: string; percentage?: number }[]
  icon?: string
}

// Reactive data
const pageRef = ref(null)
const mainRef = ref(null)
const matrixRef = ref(null)
const typewriterRef = ref(null)

const mouseX = ref(0)
const mouseY = ref(0)
const scrollProgress = ref(0)
const timelineProgress = ref(0)
const currentMilestone = ref(0)
const viewedMilestones = ref<number[]>([])
const hoveredImage = ref(-1)
const animatedStats = ref<number[]>([])
const celebratedPartners = ref<number[]>([])
const showTeamExplosion = ref(false)

const circumference = computed(() => 2 * Math.PI * 25)

const heroStats = reactive([
  { label: 'Годы опыта', currentValue: 0, targetValue: 32, isAnimating: false },
  { label: 'Проекты', currentValue: 0, targetValue: 500, isAnimating: false },
  { label: 'Патенты', currentValue: 0, targetValue: 25, isAnimating: false },
  { label: 'Страны', currentValue: 0, targetValue: 15, isAnimating: false },
])

const milestones: Milestone[] = [
  {
    period: '1992–1995',
    title: 'Гаражный старт и первые победы',
    description:
      'В морозном январе 1992 года четверо инженеров-энтузиастов сняли старый гараж в Томске и собрали из подручных деталей первый прототип анализатора вибраций.<br>К 1995-му прибор уже спас турбину ТЭЦ-1 от аварии и получил первое коммерческое применение.',
    achievements: ['Первое коммерческое применение'],
    teamSize: 4,
    stats: [
      { value: '1992', label: 'Год начала проекта', percentage: 25 },
      { value: '1995', label: 'Год коммерческого применения', percentage: 40 },
    ],
    icon: '🚀',
  },
  {
    period: '1996–2000',
    title: 'Выход на рынок и научное признание',
    description:
      'После громкой публикации в «Известиях» заказы посыпались со всей страны.<br>Команда выиграла грант РАН и открыла собственный вибро-полигон, где круглосуточно испытывала оборудование на экстремальных нагрузках.',
    achievements: ['Грант РАН'],
    teamSize: 10,
    stats: [
      { value: '1996', label: 'Год выхода на рынок', percentage: 60 },
      { value: '2000', label: 'Год получения гранта РАН', percentage: 80 },
    ],
    icon: '🔬',
  },
  {
    period: '2001–2008',
    title: 'Патенты и глобальное признание',
    description:
      'Запатентована технология адаптивного спектрального анализа, ставшая отраслевым стандартом.<br>Мы открыли офис в Гамбурге и выпустили первую мультиязычную версию ПО.',
    achievements: ['Отраслевой стандарт'],
    teamSize: 5,
    stats: [
      { value: '2001', label: 'Год получения патента', percentage: 70 },
      { value: '2008', label: 'Год выпуска мультиязычной версии ПО', percentage: 90 },
    ],
    icon: '📋',
  },
  {
    period: '2009–2015',
    title: 'Космос и большие данные',
    description:
      'Совместно с «Роскосмосом» мы установили систему мониторинга на борту МКС, собрали терабайты уникальных данных и внедрили предиктивные модели.<br>Заработал собственный научно-исследовательский центр на 120 сотрудников.',
    achievements: ['Система мониторинга на МКС'],
    teamSize: 120,
    stats: [
      { value: '2009', label: 'Год начала проекта', percentage: 95 },
      { value: '2015', label: 'Год запуска научно-исследовательского центра', percentage: 100 },
    ],
    icon: '🛸',
  },
  {
    period: '2016–2020',
    title: 'TehCloud и взрывной рост',
    description:
      'Запуск облачного сервиса TehCloud вывел диагностику на новый уровень — данные доступны 24/7, алгоритмы ИИ предсказывают поломки с точностью 96 %.<br>По версии Deloitte мы вошли в топ-10 самых быстрорастущих инжиниринговых компаний Восточной Европы.',
    achievements: ['Топ-10 самых быстрорастущих компаний Восточной Европы'],
    teamSize: 50,
    stats: [
      { value: '2016', label: 'Год запуска TehCloud', percentage: 85 },
      { value: '2020', label: 'Год входа в топ-10 самых быстрорастущих компаний Восточной Европы', percentage: 95 },
    ],
    icon: '☁️',
  },
  {
    period: '2021–2024',
    title: 'IoT-датчики и дроны-диагносты',
    description:
      'Мы представили линейку беспроводных датчиков STD-3300 с автономной работой до 10 лет и запустили первый нейросетевой конвейер по их сборке.<br>В 2024-м на рынок вышли наши дроны-диагносты, способные обследовать трубопроводы без участия человека.',
    achievements: ['Линейка беспроводных датчиков STD-3300', 'Дроны-диагносты'],
    teamSize: 100,
    stats: [
      { value: '2021', label: 'Год начала проекта', percentage: 90 },
      { value: '2024', label: 'Год выпуска дрон-диагност', percentage: 100 },
    ],
    icon: '🤖',
  },
]

// Methods
const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const animateStatCounter = (stat: any) => {
  stat.isAnimating = true
  let current = 0
  const increment = stat.targetValue / 50
  const timer = setInterval(() => {
    current += increment
    if (current >= stat.targetValue) {
      current = stat.targetValue
      clearInterval(timer)
      stat.isAnimating = false
    }
    stat.currentValue = Math.floor(current)
  }, 20)
}

const scrollToMilestone = (index: number) => {
  currentMilestone.value = index
  const element = document.querySelector(`[ref="milestone-${index}"]`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const activateMilestone = (index: number) => {
  currentMilestone.value = index
  if (!viewedMilestones.value.includes(index)) {
    viewedMilestones.value.push(index)
  }
}

const handleImageHover = (index: number) => {
  hoveredImage.value = index
}

const handleImageLeave = (index: number) => {
  hoveredImage.value = -1
}

const celebrateBadge = (achievement: string) => {
  // Add celebration effect
  console.log('Celebrating:', achievement)
}

const animateAvatar = (n: number) => {
  // Add avatar animation
  console.log('Animating avatar:', n)
}

const animateStat = (stat: any, index: number) => {
  if (!animatedStats.value.includes(index)) {
    animatedStats.value.push(index)
    setTimeout(() => {
      animatedStats.value = animatedStats.value.filter(i => i !== index)
    }, 2000)
  }
}

const celebratePartner = (n: number) => {
  if (!celebratedPartners.value.includes(n)) {
    celebratedPartners.value.push(n)
  }
}

onMounted(() => {
  // Обновляем AOS при монтировании страницы
  AOS.refresh()
  
  // Initialize scroll tracking
  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = Math.min(scrollTop / docHeight, 1)
    
    // Update timeline progress
    const timelineElement = document.querySelector('.history-timeline')
    if (timelineElement) {
      const rect = timelineElement.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height))
      timelineProgress.value = progress * 100
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Initialize hero stats animation
  setTimeout(() => {
    heroStats.forEach(stat => animateStatCounter(stat))
  }, 1000)
  
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.history-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

/* Background Graphics */
.bg-graphics {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.08;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, $primary-color 1px, transparent 1px),
    linear-gradient(0deg, $primary-color 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.05;
}

.gear-system {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.08;
}

.gear {
  position: absolute;
  border: 3px solid $primary-color;
  border-radius: 50%;
  animation: rotate 20s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border: 2px solid $primary-color;
    border-radius: 50%;
  }
}

.gear-xl {
  width: 150px;
  height: 150px;
  top: 10%;
  right: 10%;
  animation-duration: 15s;
}

.gear-large {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 5%;
  animation-duration: 25s;
  animation-direction: reverse;
}

.gear-medium {
  width: 80px;
  height: 80px;
  top: 50%;
  right: 5%;
  animation-duration: 18s;
}

.gear-small {
  width: 60px;
  height: 60px;
  top: 50%;
  right: 5%;
  animation-duration: 18s;
}

.circuit-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, $primary-color 1px, transparent 1px),
    linear-gradient(0deg, $primary-color 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.05;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: $primary-color;
    border-radius: 50%;
    animation: float 15s ease-in-out infinite;
  }
  
  &::before {
    top: 20%;
    left: 20%;
    animation-delay: -5s;
  }
  
  &::after {
    bottom: 30%;
    right: 30%;
    animation-delay: -10s;
  }
}

/* Hero Section */
.history-main {
  flex: 1;
  padding: 2rem 1rem 4rem;
}

.history-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto 6rem;
  padding: 4rem 0;
  min-height: 400px;
}

.hero-content {
  flex: 1;
}

.history-title {
  font-size: 4.5rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 2rem;
  
  .title-line {
    display: block;
    color: $text-dark;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, $primary-color, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.history-line {
  width: 200px;
  height: 6px;
  background: linear-gradient(90deg, $primary-color, #00d4ff);
  margin-bottom: 1.5rem;
  border-radius: 3px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: $text-gray;
  font-weight: 300;
  letter-spacing: 1px;
}

.hero-visual {
}

/* Timeline */
.history-timeline {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;
}

.timeline-track {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, transparent, $primary-color, transparent);
  transform: translateX(-50%);
}

.track-progress {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, transparent, $primary-color, transparent);
}

.track-glow {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, $primary-color, transparent);
  box-shadow: 0 0 0 1px rgba($primary-color, 0.5);
}

.timeline-nav {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-dot {
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  margin: 0 0.5rem;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
  
  &.active {
    transform: scale(1.2);
  }
}

.dot-year {
  font-size: 0.8rem;
  color: $text-gray;
  font-weight: 300;
}

.milestone {
  display: flex;
  margin-bottom: 4rem;
  position: relative;
  
  &.milestone-right {
    flex-direction: row-reverse;
    
    .milestone-card {
      text-align: right;
    }
    
    .timeline-node {
      transform: translateX(50%);
    }
  }
}

.timeline-node {
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translateX(-50%);
  z-index: 10;
}

.node-circle {
  width: 60px;
  height: 60px;
  background: $background-light;
  border: 4px solid $primary-color;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba($primary-color, 0.3);
}

.node-inner {
  width: 20px;
  height: 20px;
  background: $primary-color;
  border-radius: 50%;
  animation: pulse-node 2s ease-in-out infinite;
}

.node-year {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: $primary-color;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  white-space: nowrap;
}

.milestone-card {
  flex: 1;
  background: $background-light;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin: 0 3rem;
  max-width: 500px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
}

.card-header {
  padding: 2rem 2rem 1rem;
  position: relative;
}

.milestone-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: $text-dark;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.title-accent {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, $primary-color, #00d4ff);
  border-radius: 2px;
}

.card-body {
  padding: 0 2rem 2rem;
}

.milestone-image {
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($primary-color, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}

.overlay-icon {
  font-size: 2rem;
  opacity: 0.5;
}

.milestone-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  color: $text-dark;
  margin-bottom: 1.5rem;
}

.achievement-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.badge {
  background: linear-gradient(135deg, $primary-color, #00d4ff);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.team-preview {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.team-avatars {
  display: flex;
  margin-bottom: 0.5rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: -10px;
  border: 3px solid white;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.avatar-more {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: $primary-color;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.team-count {
  color: $text-gray;
  font-size: 0.9rem;
}

.card-stats {
  background: #f8f9fa;
  padding: 1.5rem 2rem;
  display: flex;
  gap: 2rem;
  border-top: 1px solid #eee;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: $primary-color;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.8rem;
  color: $text-gray;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Partners Section */
.partners-timeline {
  max-width: 1200px;
  margin: 6rem auto 0;
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: $text-dark;
  margin-bottom: 3rem;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.partner-card {
  position: relative;
  height: 100px;
  background: white;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }
  
  &:hover img {
    filter: grayscale(0%);
  }
}

.partner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem 0.5rem 0.5rem;
  font-size: 0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.partner-card:hover .partner-overlay {
  opacity: 1;
}

/* Animations */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes pulse-node {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.7;
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .history-hero {
    flex-direction: column;
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .hero-visual {
    margin-top: 2rem;
  }
  
  .history-title {
    font-size: 3rem;
  }
  
  .timeline-track {
    left: 2rem;
  }
  
  .milestone {
    flex-direction: column !important;
    padding-left: 4rem;
    
    &.milestone-right .milestone-card {
      text-align: left;
    }
  }
  
  .timeline-node {
    left: 2rem;
    transform: none;
  }
  
  .milestone-card {
    margin: 0;
    max-width: none;
  }
  
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .history-title {
    font-size: 2.5rem;
  }
  
  .partners-grid {
    grid-template-columns: 1fr;
  }
}

/* Enhanced Styles */

/* Matrix Rain & Holographic Effects */
.matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 70%, rgba($primary-color, 0.1), transparent);
  animation: matrix-glow 4s ease-in-out infinite alternate;
}

.holo-waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wave {
  position: absolute;
  width: 200%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $primary-color, transparent);
  animation: wave-move 8s linear infinite;
  opacity: 0.3;
}

.wave:nth-child(1) { top: 20%; }
.wave:nth-child(2) { top: 40%; }
.wave:nth-child(3) { top: 60%; }
.wave:nth-child(4) { top: 80%; }
.wave:nth-child(5) { bottom: 10%; }

.particle-system {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: $primary-color;
  border-radius: 50%;
  animation: particle-float 12s linear infinite;
}

.energy-beams {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.beam {
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, $primary-color, transparent);
  animation: beam-pulse 3s ease-in-out infinite;
}

.beam-1 { left: 10%; animation-delay: 0s; }
.beam-2 { left: 50%; animation-delay: 1s; }
.beam-3 { right: 15%; animation-delay: 2s; }

/* Progress Indicator */
.scroll-progress {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 1000;
}

.progress-ring {
  position: relative;
  width: 60px;
  height: 60px;
}

.progress-svg {
  transform: rotate(-90deg);
}

.progress-bg {
  fill: none;
  stroke: rgba($primary-color, 0.2);
  stroke-width: 3;
}

.progress-fill {
  fill: none;
  stroke: $primary-color;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 157;
  transition: stroke-dashoffset 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  font-weight: 600;
  color: $primary-color;
}

/* Enhanced Hero Section */
.title-container {
  position: relative;
  overflow: hidden;
}

.glitch {
  position: relative;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    animation: glitch-1 2s infinite;
    color: #ff0000;
    z-index: -1;
  }
  
  &::after {
    animation: glitch-2 2s infinite;
    color: #00ffff;
    z-index: -2;
  }
}

.neon-glow {
  text-shadow: 
    0 0 5px $primary-color,
    0 0 10px $primary-color,
    0 0 20px $primary-color,
    0 0 40px $primary-color;
  animation: neon-flicker 3s ease-in-out infinite alternate;
}

.title-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.scanning-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $primary-color, transparent);
  animation: scan-line 4s linear infinite;
}

.hologram-flicker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 48%, rgba($primary-color, 0.1) 49%, rgba($primary-color, 0.1) 51%, transparent 52%);
  animation: hologram-flicker 0.3s linear infinite;
}

.line-fill {
  height: 100%;
  background: linear-gradient(90deg, $primary-color, #00d4ff);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.typewriter span {
  border-right: 2px solid $primary-color;
  animation: typewriter-cursor 1s infinite;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.hero-stat {
  text-align: center;
  cursor: pointer;
  position: relative;
  padding: 1rem;
  border-radius: 15px;
  background: rgba($background-light, 0.5);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba($primary-color, 0.1);
  }
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: $primary-color;
  margin-bottom: 0.5rem;
}

.stat-sparkle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  
  &.active {
    animation: sparkle-burst 1s ease-out;
  }
}

/* Enhanced Timeline */
.milestone-active {
  .milestone-card {
    box-shadow: 0 30px 60px rgba($primary-color, 0.3);
    transform: scale(1.02);
  }
}

.milestone-viewed {
  .title-accent .accent-fill {
    width: 100% !important;
  }
}

.node-ring {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid rgba($primary-color, 0.3);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: node-ring-pulse 3s ease-in-out infinite;
}

.node-pulse {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid $primary-color;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s ease-out infinite;
}

.node-icon {
  font-size: 1.2rem;
}

.node-connector {
  position: absolute;
  width: 20px;
  height: 2px;
  background: $primary-color;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}

.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, $primary-color, #00d4ff, $primary-color);
  border-radius: 22px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  
  &.active {
    opacity: 0.3;
    animation: card-glow-pulse 2s ease-in-out infinite;
  }
}

.title-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: $primary-color;
  transition: width 0.5s ease;
}

.milestone-active .title-highlight {
  width: 100%;
}

.accent-fill {
  height: 100%;
  background: linear-gradient(90deg, $primary-color, #00d4ff);
  border-radius: 2px;
  transition: width 0.8s ease;
}

/* Enhanced Image Effects */
.scan-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $primary-color, transparent);
  animation: image-scan 2s ease-in-out infinite;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.overlay-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: $primary-color;
}

.image-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.img-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: $primary-color;
  border-radius: 50%;
  animation: img-particle-float 2s ease-out forwards;
}

.img-particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.img-particle:nth-child(2) { top: 30%; left: 80%; animation-delay: 0.1s; }
.img-particle:nth-child(3) { top: 70%; left: 30%; animation-delay: 0.2s; }
.img-particle:nth-child(4) { top: 80%; left: 70%; animation-delay: 0.3s; }

/* Enhanced Badges */
.enhanced-badge {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
}

.badge-text {
  position: relative;
  z-index: 2;
}

.badge-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: badge-shine 3s ease-in-out infinite;
}

/* Enhanced Team Avatars */
.animated-avatar {
  position: relative;
  
  &:hover {
    transform: scale(1.1);
  }
}

.avatar-ring {
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border: 2px solid $primary-color;
  border-radius: 50%;
  opacity: 0;
  animation: avatar-ring-appear 0.5s ease-out forwards;
}

.pulse-more {
  animation: pulse-more 2s ease-in-out infinite;
}

.more-explosion {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, $primary-color, transparent);
  border-radius: 50%;
  animation: explosion 1s ease-out forwards;
}

/* Enhanced Stats */
.enhanced-stat {
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
  }
}

.stat-chart {
  width: 100%;
  height: 30px;
  background: rgba($primary-color, 0.1);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.chart-fill {
  width: 100%;
  background: linear-gradient(90deg, $primary-color, #00d4ff);
  border-radius: 15px;
  transition: height 0.8s ease;
}

.stat-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($primary-color, 0.1);
  border-radius: 10px;
  opacity: 0;
  
  &.active {
    animation: stat-pulse 1s ease-out;
  }
}

.card-border-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 20px;
  background: linear-gradient(45deg, $primary-color, #00d4ff) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  animation: border-glow 4s ease-in-out infinite;
}

/* Enhanced Partners */
.enhanced-partner {
  position: relative;
  
  &:hover .partner-glow {
    opacity: 1;
  }
}

.partner-glow {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(45deg, $primary-color, #00d4ff);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.partner-stats {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.partner-stats .stat {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
}

.card-sparkles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: $primary-color;
  border-radius: 50%;
  animation: sparkle 1s ease-out forwards;
}

.sparkle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.sparkle:nth-child(2) { top: 30%; left: 80%; animation-delay: 0.1s; }
.sparkle:nth-child(3) { top: 70%; left: 30%; animation-delay: 0.2s; }

/* Enhanced Section Title */
.section-title {
  position: relative;
  
  .title-main {
    display: block;
    font-size: 2.5rem;
    font-weight: 600;
    color: $text-dark;
  }
  
  .title-sub {
    display: block;
    font-size: 1.2rem;
    color: $text-gray;
    font-weight: 300;
  }
}

.title-waves {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20px;
}

.title-waves .wave {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, $primary-color, transparent);
  animation: title-wave 3s ease-in-out infinite;
}

.title-waves .wave:nth-child(2) { animation-delay: 0.3s; }
.title-waves .wave:nth-child(3) { animation-delay: 0.6s; }

/* Animations */
@keyframes matrix-glow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

@keyframes wave-move {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes particle-float {
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}

@keyframes beam-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
}

@keyframes neon-flicker {
  0%, 100% { text-shadow: 0 0 5px $primary-color, 0 0 10px $primary-color, 0 0 20px $primary-color; }
  50% { text-shadow: 0 0 2px $primary-color, 0 0 5px $primary-color, 0 0 10px $primary-color; }
}

@keyframes scan-line {
  0% { top: 0; }
  100% { top: 100%; }
}

@keyframes hologram-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes typewriter-cursor {
  0%, 50% { border-color: $primary-color; }
  51%, 100% { border-color: transparent; }
}

@keyframes sparkle-burst {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(1); }
}

@keyframes node-ring-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
}

@keyframes card-glow-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes image-scan {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes img-particle-float {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-30px) scale(0); opacity: 0; }
}

@keyframes badge-shine {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

@keyframes avatar-ring-appear {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes pulse-more {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes explosion {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}

@keyframes stat-pulse {
  0% { opacity: 0; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
  100% { opacity: 0; transform: scale(1); }
}

@keyframes border-glow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.8; }
}

@keyframes sparkle {
  0% { transform: scale(0) rotate(0deg); opacity: 1; }
  100% { transform: scale(2) rotate(180deg); opacity: 0; }
}

@keyframes title-wave {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style> 