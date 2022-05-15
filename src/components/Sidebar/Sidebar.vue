<template>
  <aside class="p-2 h-screen border-r">
    <SidebarHeader />
    <SidebarNav />
    <AppButton variant="filled">Tweet</AppButton>
    <SidebarProfile />
  </aside>
</template>

<script>
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import SidebarProfile from './SidebarProfile';

export default {
  components: {
    SidebarHeader,
    SidebarNav,
    SidebarProfile,
  },
};
</script>
