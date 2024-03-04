/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 11:56:06
 * @FilePath: \vue3-template\src\hooks\theme.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-26 12:03:41
 */
import { userGlobalStore } from '@/store/modules/global';
export const useTheme = () => {
	const globalStore = userGlobalStore();
	//切换暗黑模式
	const switchDark = () => {
		const html = document.documentElement;
		globalStore?.isDark ? html.setAttribute('class', 'dark') : html.setAttribute('class', '');
	};

	return {
		switchDark,
	};
};
