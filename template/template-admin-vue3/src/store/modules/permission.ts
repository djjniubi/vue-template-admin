/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 15:29:00
 * @FilePath: \template-admin-vue3\src\store\modules\permission.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-05 09:14:59
 */
import { defineStore } from 'pinia';
import { PermissionState } from '../interface/index';
import routerData from '@/assets/json/routerList.json';
import { getFlatMenuList, getBreadcrumb } from '@/utils/index';
export const userPermissionStore = defineStore({
	id: 'minPermissionStore',
	state: (): PermissionState => ({
		routeName: '',
		routeMenuList: [],
	}),
	getters: {
		//菜单权限
		showMenuList: (state) => getFlatMenuList(state.routeMenuList, true),
		//扁平化菜单
		flatMenuList: (state) => getFlatMenuList(state.routeMenuList),
		//面包屑导航数据
		breadcrumbList: (state) => getBreadcrumb(state.routeMenuList),
	},
	actions: {
		//获取路由数据
		getRouterList() {
			this.routeMenuList = routerData.data;
		},
	},
});
