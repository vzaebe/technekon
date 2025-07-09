<template>
  <div class="document-card">
    <div class="document-header">
      <div class="document-icon-wrapper">
        <span class="document-icon">{{ computedIcon }}</span>
      </div>
      
      <div class="document-info">
        <div v-if="category" class="result-category">{{ category }}</div>
        <h4 class="document-title">{{ title }}</h4>
        <p v-if="description" class="document-description">{{ description }}</p>
        
        <div class="document-meta">
          <span v-if="size" class="file-size">{{ size }}</span>
          <span v-if="date" class="file-date">{{ date }}</span>
          <span v-if="format" class="document-format">{{ format }}</span>
          <span v-if="isNew" class="new-badge">НОВЫЙ</span>
          <span v-if="type" class="doc-type-badge" :class="type">{{ getTypeLabel(type) }}</span>
        </div>
      </div>
    </div>
    
    <div class="document-actions">
      <button 
        @click="$emit('download')" 
        class="download-btn"
      >
        <span class="download-icon">⬇</span>
        Скачать
      </button>
      
      <button 
        v-if="showPreview" 
        @click="$emit('preview')" 
        class="preview-btn"
      >
        <span class="preview-icon">👁</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description?: string
  icon?: string
  size?: string
  date?: string
  format?: string
  type?: 'firmware' | 'software' | 'manual' | 'document'
  category?: string
  isNew?: boolean
  showPreview?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPreview: true
})

defineEmits<{
  download: []
  preview: []
}>()

const getDocIcon = (name: string) => {
  if (props.icon) return props.icon
  
  const title = name.toLowerCase()
  if (title.includes('прошивка')) return '⚙️'
  if (title.includes('симулятор')) return '💻'
  if (title.includes('руководство') || title.includes('инструкция')) return '📖'
  if (title.includes('техническое')) return '🔧'
  return '📄'
}

const computedIcon = computed(() => getDocIcon(props.title))

const getTypeLabel = (type: string) => {
  const labels = {
    firmware: 'Прошивка',
    software: 'ПО', 
    manual: 'Документация',
    document: 'Документ'
  }
  return labels[type as keyof typeof labels] || 'Документ'
}
</script>

<script lang="ts">
export default {
  name: 'DocumentCard'
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

// Современные стили карточек документов
.document-card {
  background: linear-gradient(145deg, #ffffff 0%, #fafbfc 100%);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 
    0 10px 30px -5px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(42, 208, 162, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%; // Занимает всю доступную высоту
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, $primary-color 0%, $primary-accent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 40px -10px rgba(42, 208, 162, 0.25),
      0 0 0 1px rgba(42, 208, 162, 0.1),
      0 0 60px rgba(42, 208, 162, 0.1);
    border-color: rgba(42, 208, 162, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
}

.document-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex: 1; // Занимает оставшееся место
}

.document-icon-wrapper {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 50%, #00ffb3 100%);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 
    0 8px 20px rgba(42, 208, 162, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, $primary-color, $primary-accent, #00ffb3);
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .document-icon {
    font-size: 2.8rem;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;
  }
  
  .document-card:hover & {
    transform: rotate(5deg) scale(1.1);
    box-shadow: 
      0 12px 25px rgba(42, 208, 162, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
      
    &::before {
      opacity: 1;
    }
    
    .document-icon {
      transform: scale(1.1);
    }
  }
}

.document-info {
  flex: 1;
  min-width: 0;
}

.result-category {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: rgba(100, 116, 139, 0.1);
  border-radius: 1rem;
  display: inline-block;
}

.document-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
  
  .document-card:hover & {
    color: $primary-color;
  }
}

.document-description {
  font-size: 1.1rem;
  color: #64748b;
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
  font-weight: 400;
}

.document-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  
  .file-size, .file-date, .document-format {
    font-size: 0.95rem;
    color: #64748b;
    font-weight: 500;
    padding: 0.3rem 0.8rem;
    background: rgba(100, 116, 139, 0.08);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(42, 208, 162, 0.1);
      color: $primary-color;
    }
  }
}

.new-badge {
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
}

.doc-type-badge {
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.firmware {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
  &.software {
    background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
  }
  &.manual {
    background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
  }
  &.document {
    background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
  }
}

.document-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto; // Прижимает к низу карточки
  flex-shrink: 0; // Не сжимается
}

.download-btn {
  background: linear-gradient(135deg, $primary-color 0%, $primary-accent 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(42, 208, 162, 0.3);
  letter-spacing: 0.3px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(42, 208, 162, 0.5);
    background: linear-gradient(135deg, #22b085 0%, #1fa88a 100%);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  .download-icon {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover .download-icon {
    transform: translateY(-2px);
  }
}

.preview-btn {
  background: rgba(255, 255, 255, 0.8);
  color: #475569;
  border: 2px solid rgba(100, 116, 139, 0.15);
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(42, 208, 162, 0.1);
    border-color: rgba(42, 208, 162, 0.3);
    color: $primary-color;
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(42, 208, 162, 0.2);
  }
  
  .preview-icon {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover .preview-icon {
    transform: scale(1.2);
  }
}

// Responsive стили
@media (max-width: 768px) {
  .document-card {
    padding: 2rem;
    
    .document-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .document-actions {
      justify-content: stretch;
      
      .download-btn {
        flex: 1;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 480px) {
  .document-card {
    padding: 1.5rem;
  }
  
  .document-header {
    gap: 0.75rem;
  }
  
  .document-meta {
    gap: 0.5rem;
  }
  
  .document-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style> 