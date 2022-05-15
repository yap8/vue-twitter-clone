import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import router from './router';
import App from './App.vue';
import store from './store';
import './index.css';

library.add(fas);

const app = createApp(App);

app.component('fa', FontAwesomeIcon).use(store).use(router).mount('#app');
