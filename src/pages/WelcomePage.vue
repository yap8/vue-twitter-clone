<template>
  <div class="flex">
    <!-- left col -->
    <div class="flex items-center justify-center w-1/2">
      <img
        class="h-screen object-cover"
        src="images/welcome.png"
        alt="Welcome background"
      />
      <fa
        class="text-white text-9xl absolute shadow"
        :icon="['fab', 'twitter']"
      />
    </div>
    <!-- right col -->
    <div class="flex flex-col w-1/2 p-10">
      <fa
        class="text-blue-500 text-5xl mr-auto mb-16"
        :icon="['fab', 'twitter']"
      />
      <h1 class="text-8xl font-bold mb-16">Happening now</h1>
      <h2 class="text-5xl font-bold">Join Twitter today.</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
