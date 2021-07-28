import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';

// 1. 重置样式的库
import 'normalize.css';
// 2. 自己项目的重置样式和公用样式
import '@/assets/styles/common.less';

createApp(App).use(store, key).use(router).mount('#app');
