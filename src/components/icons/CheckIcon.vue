<template>
  <svg
    width="73"
    height="73"
    viewBox="0 0 79 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <path
      d="M21.0666 41.5607L32.046 52.54L57.6645 26.9215M39.3654 76.3285C59.5777 76.3285 75.9633 59.9429 75.9633 39.7307C75.9633 19.5182 59.5777 3.13281 39.3654 3.13281C19.153 3.13281 2.76758 19.5182 2.76758 39.7307C2.76758 59.9429 19.153 76.3285 39.3654 76.3285Z"
      stroke="#86FFDD"
      stroke-width="5.48968"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  className?: string;
}

withDefaults(defineProps<Props>(), {
  className: "check-icon",
});
</script>

<style lang="scss" scoped>
.check-icon {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
}
</style>
