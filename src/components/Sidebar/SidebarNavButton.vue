<template>
  <AppButton class="w-auto">
    <router-link class="flex items-center pl-4 pr-8" :to="to">
      <slot />
    </router-link>
  </AppButton>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
