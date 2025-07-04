<template>
  <div class="services-page">
    <AppHeader />

    <main class="services-main">
      <!-- Hero Title -->
      <section class="services-hero" data-aos="fade-down">
        <h1 class="services-title">Инструкции, обновления прошивок,<br/>симуляторы устройств, программное обеспечение, утилиты</h1>
      </section>

      <!-- Search and Controls -->
      <section class="search-section" data-aos="fade-up">
        <div class="search-container">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Поиск документов..."
              class="search-input"
            />
            <button v-if="searchQuery" @click="clearSearch" class="clear-search">✕</button>
          </div>
          <div class="controls">
            <button @click="toggleAll" class="toggle-all-btn">
              {{ allExpanded ? 'Свернуть все' : 'Развернуть все' }}
            </button>
            <div class="results-info" v-if="searchQuery">
              Найдено: {{ filteredResults.length }} документов
            </div>
          </div>
        </div>
      </section>

      <!-- Search Results (when searching) -->
      <section v-if="searchQuery && filteredResults.length > 0" class="search-results" data-aos="fade-up">
        <h3 class="results-title">Результаты поиска</h3>
        <div class="results-grid">
          <div v-for="result in filteredResults" :key="`${result.serviceId}-${result.doc.name}`" class="result-card">
            <div class="result-header">
              <span class="result-category">{{ result.serviceTitle }}</span>
              <span class="doc-type-badge" :class="getDocType(result.doc.name)">
                {{ getDocTypeLabel(result.doc.name) }}
              </span>
            </div>
            <h4 class="result-title">{{ result.doc.name }}</h4>
            <div class="result-meta">
              <span class="file-size">{{ result.doc.size || '2.1 МБ' }}</span>
              <span class="file-date">{{ result.doc.date || '15.01.2024' }}</span>
              <span v-if="result.doc.isNew" class="new-badge">НОВЫЙ</span>
            </div>
            <div class="result-actions">
              <button @click="downloadFile(result.doc)" class="download-btn primary">
                <span class="download-icon">⬇</span>
                Скачать
              </button>
              <button @click="previewFile(result.doc)" class="preview-btn">
                <span class="preview-icon">👁</span>
                Просмотр
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- No Results -->
      <section v-else-if="searchQuery && filteredResults.length === 0" class="no-results" data-aos="fade-up">
        <div class="no-results-content">
          <span class="no-results-icon">📄</span>
          <h3>Документы не найдены</h3>
          <p>Попробуйте изменить поисковый запрос</p>
        </div>
      </section>

      <!-- Services List (when not searching) -->
      <section v-else class="services-list">
        <div
          v-for="(service, idx) in services"
          :key="service.id"
          class="service-item"
          :data-aos="'fade-up'"
          :data-aos-delay="idx * 150"
        >
          <button class="service-toggle" @click="toggle(service.id)">
            <span class="arrow" :class="{ open: isOpen(service.id) }">▶</span>
            <div class="service-header">
              <span v-html="service.title" class="service-title-text"></span>
              <span class="docs-count">{{ service.docs.length }} документов</span>
            </div>
          </button>

          <transition name="slide-fade">
            <div v-if="isOpen(service.id)" class="service-docs">
              <div class="docs-grid">
                <div v-for="doc in service.docs" :key="doc.name" class="doc-card">
                  <div class="doc-header">
                    <span class="doc-icon" :class="getDocType(doc.name)">
                      {{ getDocIcon(doc.name) }}
                    </span>
                    <div class="doc-info">
                      <h4 class="doc-name">{{ doc.name }}</h4>
                      <div class="doc-meta">
                        <span class="file-size">{{ doc.size || '2.1 МБ' }}</span>
                        <span class="file-date">{{ doc.date || '15.01.2024' }}</span>
                        <span v-if="doc.isNew" class="new-badge">НОВЫЙ</span>
                      </div>
                    </div>
                  </div>
                  <div class="doc-actions">
                    <button @click="downloadFile(doc)" class="download-btn primary">
                      <span class="download-icon">⬇</span>
                      Скачать
                    </button>
                    <button @click="previewFile(doc)" class="preview-btn">
                      <span class="preview-icon">👁</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AOS from 'aos'
import { onMounted } from 'vue'

interface Doc { 
  name: string; 
  link: string;
  size?: string;
  date?: string;
  isNew?: boolean;
}
interface Service { id: number; title: string; docs: Doc[] }

const services: Service[] = [
  {
    id: 1,
    title: 'по «<span class="accent">Вибродизайнер – SCADA</span>»',
    docs: [
      { name: 'Руководство оператора', link: '#', size: '3.2 МБ', date: '20.01.2024' },
      { name: 'Описание функциональных характеристик', link: '#', size: '1.8 МБ', date: '18.01.2024' },
      { name: 'Инструкция по установке и эксплуатации ПО', link: '#', size: '5.4 МБ', date: '15.01.2024', isNew: true },
      { name: 'Руководство пользователя «Клиентский пакет»', link: '#', size: '2.7 МБ', date: '12.01.2024' },
      { name: 'Инструкция по эксплуатации «Серверный пакет»', link: '#', size: '3.1 МБ', date: '10.01.2024' }
    ]
  },
  {
    id: 2,
    title: 'Виброанализатор <span class="accent">STD-3300</span>',
    docs: [
      { name: 'Прошивка v1.2.0', link: '#', size: '12.5 МБ', date: '22.01.2024', isNew: true },
      { name: 'Симулятор устройства', link: '#', size: '45.2 МБ', date: '19.01.2024' }
    ]
  },
  {
    id: 3,
    title: 'Виброключ <span class="accent">CTD-1010</span>',
    docs: [
      { name: 'Инструкция пользователя', link: '#', size: '1.9 МБ', date: '16.01.2024' }
    ]
  }
]

const openIds = ref<Set<number>>(new Set([1]))
const searchQuery = ref('')

const allExpanded = computed(() => openIds.value.size === services.length)

const isOpen = (id: number) => openIds.value.has(id)

const toggle = (id: number) => {
  if (openIds.value.has(id)) {
    openIds.value.delete(id)
  } else {
    openIds.value.add(id)
  }
}

const toggleAll = () => {
  if (allExpanded.value) {
    openIds.value.clear()
  } else {
    openIds.value = new Set(services.map(s => s.id))
  }
}

const clearSearch = () => {
  searchQuery.value = ''
}

const filteredResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  
  const query = searchQuery.value.toLowerCase()
  const results: Array<{serviceId: number, serviceTitle: string, doc: Doc}> = []
  
  services.forEach(service => {
    const cleanTitle = service.title.replace(/<[^>]*>/g, '')
    service.docs.forEach(doc => {
      if (
        doc.name.toLowerCase().includes(query) ||
        cleanTitle.toLowerCase().includes(query)
      ) {
        results.push({
          serviceId: service.id,
          serviceTitle: cleanTitle,
          doc
        })
      }
    })
  })
  
  return results
})

const getDocType = (name: string) => {
  if (name.toLowerCase().includes('прошивка')) return 'firmware'
  if (name.toLowerCase().includes('симулятор')) return 'software'
  if (name.toLowerCase().includes('руководство') || name.toLowerCase().includes('инструкция')) return 'manual'
  return 'document'
}

const getDocTypeLabel = (name: string) => {
  const type = getDocType(name)
  const labels = {
    firmware: 'Прошивка',
    software: 'ПО',
    manual: 'Документация',
    document: 'Документ'
  }
  return labels[type as keyof typeof labels]
}

const getDocIcon = (name: string) => {
  const type = getDocType(name)
  const icons = {
    firmware: '⚙️',
    software: '💻',
    manual: '📖',
    document: '📄'
  }
  return icons[type as keyof typeof icons]
}

const downloadFile = (doc: Doc) => {
  // В реальном приложении здесь будет логика скачивания
  console.log('Downloading:', doc.name)
  window.open(doc.link, '_blank')
}

const previewFile = (doc: Doc) => {
  // В реальном приложении здесь будет логика предпросмотра
  console.log('Previewing:', doc.name)
}

onMounted(() => AOS.refresh())
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.services-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.services-main {
  flex: 1;
  padding: 4rem 1rem 2rem;
  text-align: center;
}

.services-title {
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  color: $text-dark;
  max-width: 900px;
  margin: 0 auto 3rem;
  line-height: 1.4;
}

// Search Section
.search-section {
  max-width: 900px;
  margin: 0 auto 3rem;
}

.search-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 500px;
  
  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: $text-gray;
    font-size: 1.1rem;
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem 3rem 0.75rem 3rem;
    border: 2px solid #e5e7eb;
    border-radius: $radius;
    font-size: 1.1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: $primary-color;
    }
  }
  
  .clear-search {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: $text-gray;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.2rem;
    
    &:hover {
      color: $text-dark;
    }
  }
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.toggle-all-btn {
  background: $primary-color;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: $radius;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
}

.results-info {
  color: $text-gray;
  font-size: 0.9rem;
}

// Search Results
.search-results {
  max-width: 1200px;
  margin: 0 auto 3rem;
  text-align: left;
}

.results-title {
  font-size: 1.4rem;
  color: $text-dark;
  margin-bottom: 1.5rem;
  text-align: center;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.result-card {
  background: white;
  border-radius: $radius;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.result-category {
  font-size: 0.8rem;
  color: $text-gray;
  text-transform: uppercase;
}

.result-title {
  font-size: 1.1rem;
  color: $text-dark;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
}

// No Results
.no-results {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 1rem;
}

.no-results-content {
  .no-results-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  h3 {
    color: $text-dark;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: $text-gray;
  }
}

// Services List
.services-list {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.service-item + .service-item {
  margin-top: 2rem;
}

.service-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: $text-dark;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.2rem;
  border-radius: $radius;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
  }
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
  color: $primary-color;
  font-size: 1rem;
}
.arrow.open {
  transform: rotate(90deg);
}

.service-header {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.service-title-text {
  text-transform: uppercase;
}

.docs-count {
  font-size: 0.9rem;
  color: $text-gray;
  background: #f1f3f4;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
}

.accent {
  color: $primary-color;
}

// Documents
.service-docs {
  margin-top: 1rem;
  padding: 0 1rem;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.doc-card {
  background: white;
  border-radius: $radius;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 1.25rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
}

.doc-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.doc-icon {
  font-size: 1.5rem;
  
  &.firmware { filter: hue-rotate(240deg); }
  &.software { filter: hue-rotate(120deg); }
  &.manual { filter: hue-rotate(30deg); }
}

.doc-info {
  flex: 1;
}

.doc-name {
  font-size: 1.05rem;
  color: $text-dark;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.doc-meta, .result-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  
  .file-size, .file-date {
    font-size: 0.9rem;
    color: $text-gray;
  }
}

.new-badge, .doc-type-badge {
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
}

.new-badge {
  background: #e7f5e7;
  color: #2d7d2d;
}

.doc-type-badge {
  &.firmware {
    background: #e3f2fd;
    color: #1565c0;
  }
  &.software {
    background: #f3e5f5;
    color: #7b1fa2;
  }
  &.manual {
    background: #fff3e0;
    color: #ef6c00;
  }
  &.document {
    background: #f5f5f5;
    color: #666;
  }
}

// Actions
.doc-actions, .result-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.download-btn {
  background: $primary-color;
  color: white;
  border: none;
  padding: 0.65rem 1.2rem;
  border-radius: $radius;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
  
  .download-icon {
    font-size: 0.9rem;
  }
}

.preview-btn {
  background: transparent;
  color: $text-gray;
  border: 1px solid #e5e7eb;
  padding: 0.65rem;
  border-radius: $radius;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: $text-dark;
    border-color: $text-gray;
  }
  
  .preview-icon {
    font-size: 0.9rem;
  }
}

// Animations
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

// Responsive
@media (max-width: 768px) {
  .services-title {
    font-size: 1.2rem;
  }
  
  .search-container {
    align-items: stretch;
  }
  
  .controls {
    justify-content: space-between;
  }
  
  .results-grid, .docs-grid {
    grid-template-columns: 1fr;
  }
  
  .service-toggle {
    font-size: 1.1rem;
    padding: 1rem;
  }
  
  .service-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .doc-actions, .result-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .search-box .search-input {
    font-size: 16px; // Prevents zoom on iOS
  }
  
  .services-title {
    font-size: 1.1rem;
  }
  
  .doc-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style> 