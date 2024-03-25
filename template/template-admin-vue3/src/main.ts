/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-01-12 10:19:14
 * @FilePath: \template-admin-vue3\src\main.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-18 23:17:48
 */
import { createApp } from 'vue';
import '@/assets/iconfont/iconfont.scss';
import '../src/style/index.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
//暗黑模式样式
import 'element-plus/theme-chalk/dark/css-vars.css';
import router from '@/router/index';
import App from './App.vue';
import pinia from '@/store';
import directives from '@/directives/index';
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.use(directives).use(router).use(pinia).mount('#app');
