/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-16 23:29:27
 * @FilePath: \vue3-template\src\router\modules\staticRouter.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-22 10:48:50
 */
import { RouteRecordRaw } from 'vue-router';
/**
 * staticRouter 静态路由
 */
export const staticRouter: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/home/index',
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/layout',
		name: 'layout',
		component: () => import('@/layouts/index.vue'),
		redirect: '/home/index',
		children: [],
	},
];

/**
 * errorRouter 错误路由
 */

export const errorRouter = [
	{
		path: '/403',
		name: '403',
		component: () => import('@/components/ErrorMessage/403.vue'),
		meta: {
			title: '403',
		},
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/components/ErrorMessage/404.vue'),
		meta: {
			title: '404',
		},
	},
	{
		path: '/500',
		name: '500',
		component: () => import('@/components/ErrorMessage/500.vue'),
		meta: {
			title: '500',
		},
	},
];
