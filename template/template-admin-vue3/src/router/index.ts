/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-16 23:09:26
 * @FilePath: \template-admin-vue3\src\router\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-18 23:25:18
 */
import { createRouter, createWebHistory } from 'vue-router';
import { staticRouter, errorRouter } from './modules/staticRouter';
import { userStores } from '@/store/modules/user';
import { userPermissionStore } from '@/store/modules/permission';
import { initDynamicRouter } from './modules/dynamicRoute';
import NProgress from '@/config/nprogress';
const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRouter, ...errorRouter],
	scrollBehavior: () => ({ top: 0, left: 0 }),
});

router.beforeEach(async (to, from, next) => {
	const userStore = userStores();
	const authStore = userPermissionStore();
	NProgress.start();
	if (to.path.toLocaleLowerCase() === '/login') {
		if (userStore.token) return next(from.fullPath);
		return next();
	}
	//如果没有登录直接跳转登陆页
	if (!userStore.token) return next({ path: '/login', replace: true });
	if (!authStore.routeMenuList.length) {
		await initDynamicRouter();
		return next({ ...to, replace: true });
	}

	next();
});
router.afterEach(() => {
	NProgress.done();
});
export default router;
