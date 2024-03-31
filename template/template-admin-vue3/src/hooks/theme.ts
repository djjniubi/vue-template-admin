/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 11:56:06
 * @FilePath: \template-admin-vue3\src\hooks\theme.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-31 16:12:20
 */
import { userGlobalStore } from '@/store/modules/global';
import { getColorDeepen, getColorShallow } from '@/utils/hexToRgb';
export const useTheme = () => {
	const globalStore = userGlobalStore();
	//切换暗黑模式
	const switchDark = () => {
		const html = document.documentElement;
		globalStore?.isDark ? html.setAttribute('class', 'dark') : html.setAttribute('class', '');
	};

	//修改主题颜色
	const changePrimary = (val: string | null) => {
		if (!val) return;
		console.log('val', val);

		//修改主题颜色
		document.documentElement.style.setProperty('--el-color-primary', val ? val : '#409eff');
		document.documentElement.style.setProperty('--el-color-primary-dark-2', globalStore.isDark ? `${getColorShallow(val as string, 0.2)}` : `${getColorDeepen(val as string, 0.3)}`);
		for (let i = 0; i < 9; i++) {
			const primaryColor = globalStore.isDark ? `${getColorDeepen(val as string, i / 10)}` : `${getColorShallow(val as string, i / 10)}`;
			document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
		}
		globalStore.setGlobalStoreConfig('primary', val);
	};

	//灰色和色弱的切换
	const grayAndWeakColor = (type: string, state: boolean) => {
		const body = document.body as HTMLElement;
		if (!state) return body.removeAttribute('style');
		const style: any = {
			gray: 'filter: grayscale(1)',
			colorWeakness: 'filter: invert(80%)',
		};
		body.setAttribute('style', style[type]);
		globalStore.setGlobalStoreConfig(type === 'gray' ? 'isGray' : 'isColorWeakness', state);
	};

	return {
		switchDark,
		changePrimary,
		grayAndWeakColor,
	};
};
