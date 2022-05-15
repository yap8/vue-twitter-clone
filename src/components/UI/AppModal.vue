<template>
  <div
    class="flex items-center justify-center bg-black bg-opacity-30 absolute top-0 left-0 right-0 bottom-0 z-50"
    v-if="open === true"
    @click.self="$emit('close')"
  >
    <div class="w-full max-w-2xl bg-white p-3 pb-5 rounded-3xl">
      <!-- header -->
      <header class="flex items-center relative">
        <AppButton class="w-auto" @click="$emit('close')">
          <fa class="h-6 w-6" icon="times" />
        </AppButton>
        <fa
          class="text-blue-400 text-4xl absolute left-1/2 -translate-x-1/2"
          :icon="['fab', 'twitter']"
        />
      </header>
      <!-- content -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
