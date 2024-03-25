/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 15:29:00
 * @FilePath: \template-admin-vue3\src\store\modules\permission.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-20 00:09:46
 */
import { defineStore } from 'pinia';
import { PermissionState } from '../interface/index';
import { menuApiList } from '@/api/modules/login';

import button from '@/assets/json/button.json';
import { getFlatMenuList, getBreadcrumb } from '@/utils/index';
export const userPermissionStore = defineStore({
	id: 'minPermissionStore',
	state: (): PermissionState => ({
		routeName: '',
		routeMenuList: [],
		authButtonList: {},
	}),
	getters: {
		//菜单权限
		showMenuList: (state) => getFlatMenuList(state.routeMenuList, true),
		//扁平化菜单
		flatMenuList: (state) => getFlatMenuList(state.routeMenuList),
		//面包屑导航数据
		breadcrumbList: (state) => getBreadcrumb(state.routeMenuList),
		//按钮权限列表
		authButtonListGet: (state) => state.authButtonList,
	},
	actions: {
		//获取路由数据
		async getRouterList() {
			const { data } = await menuApiList();
			this.routeMenuList = data;
		},
		//获取按钮权限
		getButtonList() {
			this.authButtonList = button.data;
		},
	},
});
