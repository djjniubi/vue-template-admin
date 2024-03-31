/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-30 01:49:05
 * @FilePath: \template-admin-vue3\src\store\modules\keepAlive.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-30 02:20:17
 */
import { defineStore } from 'pinia';

export const userKeepAlive = defineStore({
	id: 'minkeepAlive',
	state: () => {
		return {
			keepAliveList: [] as string[],
		};
	},
	actions: {
		// 添加需要缓存的组件
		addKeepAlive(name: string) {
			!this.keepAliveList.includes(name) && this.keepAliveList.push(name);
		},
		// 移除需要缓存的组件
		removeKeepAlive(name: string) {
			this.keepAliveList = this.keepAliveList.filter((item) => item !== name);
		},

		// 设置需要缓存的组件
		setKeepAlive(keepAlive: string[] = []) {
			this.keepAliveList = keepAlive;
		},
	},
});
