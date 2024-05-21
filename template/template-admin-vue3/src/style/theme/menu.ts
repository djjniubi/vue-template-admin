/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-04-21 01:52:10
 * @FilePath: \template-admin-vue3\src\style\theme\menu.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-21 18:05:59
 */
// 侧边导航栏反转色配置
const light = (isMenuType: boolean) => {
	let style: { [key: string]: string } = {
		'--el-menu-bg-color': 'var(--el-fill-color-blank)',
		'--el-aside-logo-text-color': '#303133',
		'--el-menu-text-color': '#303133',
	};
	if (isMenuType) {
		style['--el-menu-active-bg-color'] = 'var(--el-color-primary-light-9)';
		style['--el-menu-hover-bg-color'] = '#ecf5ff';
	} else {
		style['--el-menu-active-color-white'] = 'var(--el-color-white)';
	}
	return style;
};
// 反转配色
const inverted = (isMenuType: boolean) => {
	let style: { [key: string]: string } = {
		'--el-menu-bg-color': '#141414',
		'--el-aside-logo-text-color': '#dadada',
		'--el-menu-text-color': '#bdbdc0',
		'--el-menu-hover-bg-color': '#000000',
	};
	if (isMenuType) {
		style['--el-menu-active-bg-color'] = '#000000';
	} else {
		style['--el-menu-active-color-white'] = 'var(--el-color-white)';
	}
	return style;
};
export const menuTheme: { [key: string]: any } = {
	//light 配色
	light: light,
	//反转配色
	inverted: inverted,

	//dark 配色
};
