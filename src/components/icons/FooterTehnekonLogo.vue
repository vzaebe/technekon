<template>
  <svg
    width="443"
    height="128"
    viewBox="0 0 443 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <path
      d="M41.7769 21.2979H61.0261M80.5314 21.2979H61.0261M61.0261 21.2979L61.2309 53.1922"
      stroke="white"
      stroke-width="2.9693"
    />
    <path
      d="M119.081 21.5029H87.2378V36.1446M119.081 52.3222H87.2378V36.1446M87.2378 36.1446H117.955"
      stroke="white"
      stroke-width="2.9693"
    />
    <path
      d="M143.859 33.7129L160.027 19.6084H164.457L164.495 19.6523L146.101 35.6973L166.25 53.7236L166.175 53.8066H161.888L143.863 37.6787L125.968 53.8066H121.691L121.62 53.7275L141.622 35.7012L123.225 19.6523L123.263 19.6084H127.693L143.859 33.7129Z"
      fill="white"
    />
    <path
      d="M172.938 19.8135V36.247M173.041 53.9604L172.938 36.247M209.031 36.247H172.938M209.031 36.247V53.9604M209.031 36.247L209.082 19.8135"
      stroke="white"
      stroke-width="2.9693"
    />
    <path
      d="M253.416 21.1953H221.573V36.1442M253.416 52.0146H221.573V36.1442M221.573 36.1442H252.239"
      stroke="white"
      stroke-width="2.9693"
    />
    <path
      d="M264.832 34.6338H272.986L295.543 19.6602H300.913L276.109 36.123L302.262 53.6172L302.169 53.7559H297.128L272.982 37.6035H264.832V53.7559H261.863V19.6602H264.832V34.6338Z"
      fill="white"
    />
    <path
      d="M340.55 21.1953H324.63H313.417C310.024 21.1953 307.273 23.9458 307.273 27.3387V46.076C307.273 49.4689 310.024 52.2194 313.417 52.2194H340.55C343.943 52.2194 346.693 49.4689 346.693 46.076V27.3387C346.693 23.9458 343.943 21.1953 340.55 21.1953Z"
      stroke="white"
      stroke-width="2.16982"
    />
    <path
      d="M359.39 19.6084V36.0419M359.492 53.7553L359.39 36.0419M395.482 36.0419H359.39M395.482 36.0419V53.7553M395.482 36.0419L395.533 19.6084"
      stroke="white"
      stroke-width="2.9693"
    />
    <rect
      x="35.4998"
      y="1.34307"
      width="372.102"
      height="70.5409"
      stroke="white"
      stroke-width="1.54356"
    />
    <text
      fill="white"
      xml:space="preserve"
      style="white-space: pre"
      font-family="Inter"
      font-size="18.0636"
      font-weight="500"
      letter-spacing="0em"
    >
      <tspan x="0.271484" y="122.739">
        COPYRIGHT © 2006 - 2024 ООО "ТД "ТЕХНЕКОН"
      </tspan>
    </text>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  className?: string;
}

withDefaults(defineProps<Props>(), {
  className: "footer-tehnekon-logo",
});
</script>

<style lang="scss" scoped>
.footer-tehnekon-logo {
  width: 100%;
  max-width: 443px;
  height: auto;
}
</style>
