/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 09:56:57
 * @FilePath: \template-admin-vue3\src\store\modules\global.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-26 23:40:24
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
	}),
	actions: {
		setGlobalStoreConfig(...args: ObjeKeyValuArr<GlobalState>) {
			this.$patch({ [args[0]]: args[1] });
		},
	},
	persist: piniaPluginConfig('minGlobalStore'),
});
