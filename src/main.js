import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import router from './router';
import App from './App.vue';
import store from './store';
import './index.css';

library.add(faCoffee, faTwitter);

const app = createApp(App);

app.component('fa', FontAwesomeIcon).use(store).use(router).mount('#app');
