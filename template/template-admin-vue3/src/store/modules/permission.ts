/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 15:29:00
 * @FilePath: \vue3-template\src\store\modules\permission.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-22 16:37:11
 */
import { defineStore } from 'pinia';
import { PermissionState } from '../interface/index';
import routerData from '@/assets/json/routerList.json';

export const permissionStore = defineStore({
	id: 'minPermissionStore',
	state: (): PermissionState => ({
		routeName: '',
		routeMenuList: [],
	}),
	getters: {},
	actions: {
		//获取路由数据
		getRouterList() {
			this.routeMenuList = routerData.data;
		},
	},
});
