/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-01 16:12:18
 * @FilePath: \template-admin-vue3\src\store\modules\user.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-21 00:36:23
 */
import { defineStore } from 'pinia';
import { UserState } from '../interface/index';
import piniaPluginConfig from '../plugIn/lasting';

export const userStores = defineStore({
	id: 'minUserStore',
	state: (): UserState => ({
		token: '',
		userInfo: { name: '', username: '', roles: '' },
	}),
	actions: {
		setToken(token: string) {
			this.token = token;
		},
		setUserInfo(userInfo: UserState['userInfo']) {
			this.userInfo = userInfo;
		},
	},
	persist: piniaPluginConfig('minUserStore'),
});
