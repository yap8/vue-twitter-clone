import { createRouter, createWebHistory } from 'vue-router';

import GuestPage from '@/pages/GuestPage';
import HomePage from '@/pages/HomePage';

const routes = [
  {
    path: '/',
    component: GuestPage,
  },
  {
    path: '/home',
    component: HomePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
