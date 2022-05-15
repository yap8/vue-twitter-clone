<template>
  <div>
    <!-- <label class="absolute text-sm focus:left-2 focus:top-1" :for="name">{{
      name.charAt(0).toUpperCase() + name.slice(1)
    }}</label> -->
    <input
      class="w-full p-2 py-4 border text-xl rounded"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="name.charAt(0).toUpperCase() + name.slice(1)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
