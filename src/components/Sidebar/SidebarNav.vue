<template>
  <nav class="max-w-md">
    <ul>
      <li class="mb-2">
        <SidebarNavButton to="/home">
          <fa class="mr-4 w-8" icon="home" />
          <div class="text-2xl">Home</div>
        </SidebarNavButton>
      </li>
      <li class="mb-2">
        <SidebarNavButton to="/profile">
          <fa class="mr-4 w-8" icon="user" />
          <div class="text-2xl">Profile</div>
        </SidebarNavButton>
      </li>
      <li class="mb-2">
        <SidebarNavButton to="/settings">
          <fa class="mr-4 w-8" icon="cog" />
          <div class="text-2xl">More</div>
        </SidebarNavButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import SidebarNavButton from './SidebarNavButton';

export default {
  components: {
    SidebarNavButton,
  },
};
</script>

<style></style>
