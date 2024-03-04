/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 16:08:33
 * @FilePath: \vue3-template\src\router\modules\dynamicRoute.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-28 17:14:40
 */
import router from '@/router/index';
import { permissionStore } from '@/store/modules/permission';
import { RouteRecordRaw } from 'vue-router';
//获取views文件夹下所有vue文件
const viewModules = import.meta.glob('/src/views/**/*.vue');

export const initDynamicRouter = () => {
	const authStore = permissionStore();
	authStore.getRouterList();
	console.log('viewModules', viewModules);

	authStore.routeMenuList.forEach((item) => {
		item.component = viewModules[`/src/views${item.component}.vue`];
		console.log('component', item.component, viewModules[`/src/views${item.component}.vue`]);
		router.addRoute('layout', item as RouteRecordRaw);
	});
	console.log('authStore', authStore.routeMenuList);
};
