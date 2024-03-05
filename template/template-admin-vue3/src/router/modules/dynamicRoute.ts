/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 16:08:33
 * @FilePath: \vue-template-admin\template\template-admin-vue3\src\router\modules\dynamicRoute.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-04 11:47:20
 */
import router from '@/router/index';
import { userPermissionStore } from '@/store/modules/permission';
import { RouteRecordRaw } from 'vue-router';
//获取views文件夹下所有vue文件
const viewModules = import.meta.glob('/src/views/**/*.vue');

export const initDynamicRouter = () => {
	const authStore = userPermissionStore();
	authStore.getRouterList();
	console.log('viewModules', viewModules);

	authStore.flatMenuList.forEach((item) => {
		if(item.component && typeof item.component=="string"){
			item.component = viewModules[`/src/views${item.component}.vue`];
		}
		if(item.meta.isFull){
			router.addRoute( item as unknown as RouteRecordRaw);
		}else{
			router.addRoute('layout', item as unknown as RouteRecordRaw);
		}		
	});
};
