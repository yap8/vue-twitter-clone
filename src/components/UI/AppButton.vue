<template>
  <button
    class="flex items-center justify-center w-full text-xl cursor-pointer text-blue-400 border font-semibold p-3 rounded-full transition hover:bg-slate-100"
    v-if="variant === 'outlined'"
  >
    <slot />
  </button>
  <button
    class="flex items-center justify-center w-full text-xl cursor-pointer bg-blue-400 text-white font-semibold p-3 rounded-full transition hover:bg-blue-500"
    v-else-if="variant === 'filled'"
  >
    <slot />
  </button>
  <button
    class="flex items-center justify-center w-full text-xl cursor-pointer font-semibold p-3 rounded-full transition hover:bg-slate-100"
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
