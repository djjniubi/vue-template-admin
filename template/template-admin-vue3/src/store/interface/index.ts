/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 11:15:50
 * @FilePath: \template-admin-vue3\src\store\interface\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-21 00:17:29
 */

export type LayoutType = 'vertical' | 'classical';
/**userInterface */
export interface UserState {
	token: string;
	userInfo: {
		name: string;
		username?: string;
		roles?: string;
	};
}

/**permissionInterface */

export interface PermissionState {
	routeName: string;
	routeMenuList: Menu.MenuOptions[];
	authButtonList: {
		[key: string]: string[];
	};
}

/** 全局接口State 属性值 */

export interface GlobalState {
	isCollapse: boolean;
	isDark: boolean;
	layout: LayoutType;
	primary: string;
	isMenuType: boolean;
	isColorWeakness: boolean;
	isGray: boolean;
	isBreadcrumb: boolean;
	isBreadcrumbIcon: boolean;
	isTabBar: boolean;
	isTabBarIcon: boolean;
	isBreadcrumbNav: boolean;
	sideInversion: boolean;
}

// 标签导航栏所需要的属性值
export interface TabBarProps {
	icon: string;
	title: string;
	path: string;
	name: string;
	close: boolean;
	isKeepAlive: boolean;
}

// 标签导航栏State
export interface TabBarState {
	tabBarList: TabBarProps[];
}
