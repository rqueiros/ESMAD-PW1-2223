import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

const app = createApp(App);

app.use(router);

app.mount('#app');

