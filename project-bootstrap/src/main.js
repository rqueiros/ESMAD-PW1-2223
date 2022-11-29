// Change the createApp line to this
import Vue, { createApp } from '@vue/compat';
import App from './App.vue';

// Import BootstrapVue and its default styles
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

import './assets/main.css';

createApp(App).mount('#app');

