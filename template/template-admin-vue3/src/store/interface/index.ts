/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 11:15:50
 * @FilePath: \template-admin-vue3\src\store\interface\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-26 23:39:31
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

/**globalInterface */

export interface GlobalState {
	isCollapse: boolean;
	isDark: boolean;
	layout: LayoutType;
	primary: string;
	isColorWeakness: boolean;
	isGray: boolean;
}
