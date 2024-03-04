/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-01-16 11:17:41
 * @FilePath: \vue3-template\src\store\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-22 14:40:44
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
