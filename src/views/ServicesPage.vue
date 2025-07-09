<template>
  <div class="services-page">
    <AppHeader />

    <!-- Используем PageBanner для страницы услуг -->
    <PageBanner 
      :title-lines="['СЕРВИС', 'ТЕХНЕКОНА']"
      subtitle="Инструкции, обновления прошивок, симуляторы устройств, программное обеспечение, утилиты"
      theme="services"
    />

    <main class="services-main">
      <!-- Search and Controls -->
      <section class="search-section" data-aos="fade-up">
        <div class="search-container">
          <div class="search-box">
                          <span class="search-icon">
                <SearchIcon />
              </span>
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
          <DocumentCard
            v-for="result in filteredResults"
            :key="`${result.serviceId}-${result.doc.name}`"
            :title="result.doc.name"
            :category="result.serviceTitle"
            :size="result.doc.size || '2.1 МБ'"
            :date="result.doc.date || '15.01.2024'"
            :type="getDocType(result.doc.name)"
            :is-new="result.doc.isNew"
            @download="downloadFile(result.doc)"
            @preview="previewFile(result.doc)"
          />
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
        <AnimatedGroup
          v-for="(service, idx) in services"
          :key="service.id"
          :is-expanded="isOpen(service.id)"
          @toggle="(isOpenValue) => handleServiceToggle(service.id, isOpenValue)"
          :style="{ '--delay': `${idx * 0.15}s` }"
          class="service-animated-group"
        >
          <template #header="{ isOpen }">
            <div class="service-header-content">
              <span class="arrow" :class="{ open: isOpen }">▶</span>
              <SectionHeader :class="{ 'arrow-rotated': isOpen }">
                <template #title>
                  <span v-html="service.title" class="service-title-text"></span>
                </template>
                <DocsCount :count="service.docs.length" label="документ(ов)" />
              </SectionHeader>
            </div>
          </template>
          
          <template #content>
            <div class="service-docs">
              <div class="docs-grid">
                <AnimatedCard
                  v-for="(doc, docIdx) in service.docs"
                  :key="doc.name"
                  :delay="docIdx * 0.1"
                >
                  <DocumentCard
                    :title="doc.name"
                    :size="doc.size || '2.1 МБ'"
                    :date="doc.date || '15.01.2024'"
                    :type="getDocType(doc.name)"
                    :is-new="doc.isNew"
                    @download="downloadFile(doc)"
                    @preview="previewFile(doc)"
                  />
                </AnimatedCard>
              </div>
            </div>
          </template>
        </AnimatedGroup>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import PageBanner from '@/components/PageBanner.vue'
import AOS from 'aos'
import { onMounted } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'
import DocsCount from '@/components/DocsCount.vue'
import DocumentCard from '@/components/DocumentCard.vue'
import AnimatedGroup from '@/components/AnimatedGroup.vue'
import AnimatedCard from '@/components/AnimatedCard.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'


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

const handleServiceToggle = (id: number, isOpenValue: boolean) => {
  if (isOpenValue) {
    openIds.value.add(id)
  } else {
    openIds.value.delete(id)
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
@import '../styles/variables';

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
    background: #22b085;
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
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.service-animated-group {
  animation-delay: var(--delay, 0s);
}

.service-header-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

// Убираем старые стили service-toggle и service-item

.arrow {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: $primary-color;
  font-size: 1rem;
  
  &.open {
    transform: rotate(90deg);
  }
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
  margin-top: 0;
  padding: 0;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

// Стили для результатов поиска
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

// Стили для поворота стрелочки в SectionHeader
:deep(.arrow-rotated .section-header__icon svg) {
  transform: rotate(90deg);
}

:deep(.section-header__icon svg) {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
  
  .doc-actions, .result-actions {
    flex-direction: column;
  }
  
  .doc-card {
    .doc-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .doc-actions {
      margin-left: 0;
      width: 100%;
      justify-content: stretch;
      
      .download-btn {
        flex: 1;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 480px) {
  .search-box .search-input {
    font-size: 16px; // Prevents zoom on iOS
  }
  
  .services-title {
    font-size: 1.1rem;
  }
  
  .doc-card {
    padding: 1.5rem;
  }
  
  .doc-header {
    gap: 0.75rem;
  }
  
  .doc-meta {
    gap: 0.5rem;
  }
}
</style> 