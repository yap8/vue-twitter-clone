<template>
  <nav class="max-w-md">
    <ul>
      <li>
        <SidebarNavButton to="/home">
          <fa class="mr-4 w-5" icon="home" />
          <div class="text-2xl">Home</div>
        </SidebarNavButton>
      </li>
      <li>
        <SidebarNavButton to="/profile">
          <fa class="mr-4 w-5" icon="user" />
          <div class="text-2xl">Profile</div>
        </SidebarNavButton>
      </li>
      <li>
        <SidebarNavButton to="/settings">
          <fa class="mr-4 w-5" icon="cog" />
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
