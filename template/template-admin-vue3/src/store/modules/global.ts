/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 09:56:57
 * @FilePath: \template-admin-vue3\src\store\modules\global.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-31 00:23:20
 */
import { defineStore } from 'pinia';
import { GlobalState } from '../interface/index';
import piniaPluginConfig from '../plugIn/lasting';
type ObjeKeyValuArr<T> = {
	[k in keyof T]: [k, T[K]];
}[keyof T];
export const userGlobalStore = defineStore({
	id: 'minGlobalStore',
	state: (): GlobalState => ({
		//折叠菜单
		isCollapse: false,
		//是否启用暗黑模式
		isDark: false,
		//当前布局
		layout: 'vertical',
		//全局颜色
		primary: '#409eff',
		//灰色模式
		isGray: false,
		//色弱模式
		isColorWeakness: false,
		//是否显示面包屑导航
		isBreadcrumb: true,
		//是否显示面包屑图标
		isBreadcrumbIcon: true,
		//是否显示标签栏
		isTabBar: true,
		//是否显示标签栏图标
		isTabBarIcon: true,
	}),
	actions: {
		setGlobalStoreConfig(...args: ObjeKeyValuArr<GlobalState>) {
			this.$patch({ [args[0]]: args[1] });
		},
	},
	persist: piniaPluginConfig('minGlobalStore'),
});
