<template>
  <button
    class="w-full text-xl cursor-pointer text-blue-400 border font-semibold py-3 px-4 rounded-full transition hover:bg-slate-100"
    v-if="variant === 'outlined'"
  >
    <slot />
  </button>
  <button
    class="w-full text-xl cursor-pointer bg-blue-400 text-white font-semibold py-3 px-4 rounded-full transition hover:bg-blue-500"
    v-else-if="variant === 'filled'"
  >
    <slot />
  </button>
  <button
    class="w-full text-xl cursor-pointer font-semibold py-3 px-4 rounded-full transition hover:bg-slate-100"
    v-else
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: ['variant'],
};
</script>

<style></style>
