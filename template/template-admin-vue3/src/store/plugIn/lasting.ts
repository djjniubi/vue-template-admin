/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 11:23:54
 * @FilePath: \vue3-template\src\store\plugIn\lasting.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-22 11:39:18
 */
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';

const piniaPluginConfig = (key: string, paths?: string[]) => {
	const persist: PersistedStateOptions = {
		key,
		storage: localStorage,
		paths,
	};
	return persist;
};

export default piniaPluginConfig;
