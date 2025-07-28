# Компонент AdvantagesSection

## Описание
Компонент `AdvantagesSection` предназначен для отображения секции технологических преимуществ продукта. Он был вынесен из страницы STD-3300 для переиспользования на других страницах продуктов.

## Использование

### Базовое использование
```vue
<template>
  <AdvantagesSection />
</template>

<script setup>
import AdvantagesSection from '@/components/AdvantagesSection.vue';
</script>
```

### С кастомными параметрами
```vue
<template>
  <AdvantagesSection 
    :model="'STD-500'" 
    :subtitle="'Почему профессионалы выбирают STD-500'"
    :advantages="customAdvantages" 
  />
</template>

<script setup>
import AdvantagesSection from '@/components/AdvantagesSection.vue';
import PowerIcon from '@/components/icons/PowerIcon.vue';
import TargetIcon from '@/components/icons/TargetIcon.vue';

const customAdvantages = [
  {
    icon: PowerIcon,
    title: "Быстрый анализ",
    description: "Мгновенный спектральный анализ в реальном времени",
    stats: [
      { value: "0.2с", label: "Время анализа" },
      { value: "12.8К", label: "Линий спектра" }
    ]
  },
  {
    icon: TargetIcon,
    title: "Высокая точность",
    description: "Точные измерения с динамическим диапазоном 90 дБ",
    stats: [
      { value: "±2%", label: "Точность" },
      { value: "90 дБ", label: "Динамический диапазон" }
    ]
  }
];
</script>
```

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `model` | String | `'STD-3300'` | Модель прибора для отображения в заголовке |
| `subtitle` | String | `'Почему профессионалы выбирают именно этот анализатор'` | Подзаголовок секции |
| `advantages` | Array | Встроенный массив | Массив преимуществ с иконками, заголовками, описаниями и статистикой |

## Структура объекта преимущества

```javascript
{
  icon: Component,        // Vue компонент иконки
  title: String,         // Заголовок преимущества
  description: String,   // Описание преимущества
  stats: [               // Массив статистических данных
    {
      value: String,     // Значение (например, "0.1с")
      label: String      // Подпись (например, "Время анализа")
    }
  ]
}
```

## Доступные иконки

Компонент использует иконки из папки `@/components/icons/`:
- `PowerIcon.vue`
- `TargetIcon.vue`
- `RefreshIcon.vue`
- `ShieldIcon.vue`
- `BatteryIcon.vue`
- `ControlIcon.vue`

## Стилизация

Компонент имеет встроенные стили с:
- Темным градиентным фоном
- Анимациями при наведении
- Адаптивным дизайном
- Эффектами свечения и пульсации

## Пример для нового продукта

Для создания страницы нового продукта STD-500:

1. Импортируйте компонент:
```vue
import AdvantagesSection from '@/components/AdvantagesSection.vue';
```

2. Создайте кастомные преимущества:
```javascript
const std500Advantages = [
  {
    icon: PowerIcon,
    title: "Компактный размер",
    description: "Малогабаритный анализатор для мобильной диагностики",
    stats: [
      { value: "150г", label: "Вес" },
      { value: "8ч", label: "Время работы" }
    ]
  },
  // ... другие преимущества
];
```

3. Используйте в шаблоне:
```vue
<AdvantagesSection 
  :model="'STD-500'" 
  :subtitle="'Компактный анализатор для базовой диагностики'"
  :advantages="std500Advantages" 
/>
```

## Примечания

- Компонент полностью самодостаточен и не требует дополнительных зависимостей
- Все анимации и стили встроены в компонент
- Адаптивный дизайн работает на всех устройствах
- Можно легко кастомизировать под любой продукт 