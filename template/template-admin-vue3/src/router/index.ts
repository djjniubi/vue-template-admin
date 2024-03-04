/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-16 23:09:26
 * @FilePath: \vue3-template\src\router\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-22 16:47:28
 */
import { createRouter, createWebHistory } from 'vue-router';
import { staticRouter, errorRouter } from './modules/staticRouter';
import { userStores } from '@/store/modules/user';
import { permissionStore } from '@/store/modules/permission';
import { initDynamicRouter } from './modules/dynamicRoute';
const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRouter, ...errorRouter],
	scrollBehavior: () => ({ top: 0, left: 0 }),
});

router.beforeEach(async (to, from, next) => {
	const userStore = userStores();
	const authStore = permissionStore();
	if (to.path.toLocaleLowerCase() === '/login') {
		if (userStore.token) return next(from.fullPath);
		return next();
	}
	//如果没有登录直接跳转登陆页
	if (!userStore.token) return next({ path: '/login', replace: true });
	if (!authStore.routeMenuList.length) {
		initDynamicRouter();
		return next({ ...to, replace: true });
	}

	next();
});

export default router;
