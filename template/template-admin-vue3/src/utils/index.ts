/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-04 10:45:09
 * @FilePath: \template-admin-vue3\src\utils\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-05 09:20:32
 */
/**
 * @description 扁平化菜单
 * @param {Array} menuList 左侧菜单列表
 * @param {boolean} isFilter 是否启用过滤菜单列表（控制路由权限isHide）
 * @returns {Array} 扁平化后的菜单
 */

export function getFlatMenuList(menuList: Menu.MenuOptions[], isFilter: boolean = false): Menu.MenuOptions[] | any[] {
	let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
	if (isFilter) {
		return newMenuList.filter((item) => {
			item.children?.length && (item.children = getFlatMenuList(item.children));
			return !item.meta?.isHide;
		});
	} else {
		return newMenuList.flatMap((item) => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
	}
}

/**
 * @description 面包屑导航,拿到当前所有导航
 * @param {Array} menuList 菜单列表
 * @param {Array} parentLevel 父级菜单
 * @param {Object} 处理后的数据
 */
export function getBreadcrumb(menuList: Menu.MenuOptions[], parentLevel = [], newData: { [key: string]: any } = {}) {
	const newMenuList = JSON.parse(JSON.stringify(menuList));
	for (const item of newMenuList) {
		newData[item.path] = [...parentLevel, item];
		if (item.children) getBreadcrumb(item.children, newData[item.path], newData);
	}
	return newData;
}
