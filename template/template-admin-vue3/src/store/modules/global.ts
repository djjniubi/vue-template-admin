/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 09:56:57
 * @FilePath: \vue3-template\src\store\modules\global.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-28 17:23:18
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
	}),
	actions: {
		setGlobalStoreConfig(...args: ObjeKeyValuArr<GlobalState>) {
			this.$patch({ [args[0]]: args[1] });
		},
	},
	persist: piniaPluginConfig('minGlobalStore'),
});
