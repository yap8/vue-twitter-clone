<template>
  <h2 class="max-w-md m-auto mb-6 text-3xl font-semibold">
    Create your account
  </h2>
  <form class="max-w-md m-auto" @submit.prevent="handleSubmit">
    <AppInput class="mb-4" type="email" name="email" v-model="email" />
    <AppInput class="mb-4" type="password" name="password" v-model="password" />
    <AppButton class="m-auto" variant="filled">Sign in</AppButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      alert(this.email, this.password);

      // CHECK IF USER EXISTS IN DB AND RETURN TOKEN

      this.email = '';
      this.password = '';
    },
  },
};
</script>
