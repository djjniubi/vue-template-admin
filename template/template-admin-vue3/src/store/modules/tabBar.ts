/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-30 02:02:05
 * @FilePath: \template-admin-vue3\src\store\modules\tabBar.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-30 23:42:26
 */
import { defineStore } from 'pinia';
import router from '@/router/index';
import { userKeepAlive } from './keepAlive';
import { TabBarState, TabBarProps } from '../interface/index';
import piniaPluginConfig from '../plugIn/lasting';
const keepAliveStore = userKeepAlive();

export const useTabBarStore = defineStore({
	id: 'minTabBar',
	state: (): TabBarState => ({
		tabBarList: [],
	}),
	actions: {
		// 添加标签导航栏
		async addTabs(tab: TabBarProps) {
			if (this.tabBarList.every((item) => item.path !== tab.path)) {
				this.tabBarList.push(tab);
			}

			// 添加缓存组件
			if (!keepAliveStore.keepAliveList.includes(tab.name) && tab.isKeepAlive) {
				keepAliveStore.addKeepAlive(tab.name);
			}
		},
		// 移除标签导航栏
		async removeTab(tabPath: string) {
			this.tabBarList.forEach((item, index) => {
				if (item.path !== tabPath) return;
				// 当删除标签时，能确保指定到离删除标签最近的一个标签
				const nextTab = this.tabBarList[index + 1] || this.tabBarList[index - 1];
				if (!nextTab) return;
				router.push(nextTab.path);
			});

			// 移除缓存组件
			const keepAliveName = this.tabBarList.find((item) => item.path === tabPath);
			keepAliveName?.isKeepAlive && keepAliveStore.removeKeepAlive(keepAliveName.name);
			// 移除标签
			this.tabBarList = this.tabBarList.filter((item) => item.path !== tabPath);
		},
	},
	persist: piniaPluginConfig('tabBarList'),
});
