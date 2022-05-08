import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import storage from '@/plugins/Storage'
import './assets/tailwind.css'

createApp(App).use(store).use(storage).use(router).mount('#app');
