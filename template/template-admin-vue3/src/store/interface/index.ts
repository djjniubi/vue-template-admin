/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 11:15:50
 * @FilePath: \vue3-template\src\store\interface\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-28 17:16:11
 */

export type LayoutType = 'vertical' | 'classical';
/**userInterface */
export interface UserState {
	token: string;
	userInfo: {
		name: string;
	};
}

/**permissionInterface */

export interface PermissionState {
	routeName: string;
	routeMenuList: Menu.MenuOptions[];
}

/**globalInterface */

export interface GlobalState {
	isCollapse: boolean;
	isDark: boolean;
	layout: LayoutType;
}
