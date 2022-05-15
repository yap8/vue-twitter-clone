import { createRouter, createWebHistory } from 'vue-router';

import WelcomePage from '@/pages/WelcomePage';
import HomePage from '@/pages/HomePage';

const routes = [
  {
    path: '/',
    component: WelcomePage,
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
