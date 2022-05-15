import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import router from './router';
import App from './App.vue';
import store from './store';
import components from '@/components/UI';
import './index.css';

const app = createApp(App);

// importing components
library.add(faTimes, faTwitter);
app.component('fa', FontAwesomeIcon);

components.forEach((component) => app.component(component.name, component));

// adding vuex and router
app.use(store).use(router);

// initializing
app.mount('#app');
