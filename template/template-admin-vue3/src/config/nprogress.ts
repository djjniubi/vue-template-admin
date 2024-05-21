/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-04-18 23:04:31
 * @FilePath: \template-admin-vue3\src\config\nprogress.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-19 23:04:09
 */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Nprogress 的默认样式
NProgress.configure({
	easing: 'ease', // css3动画方式
	speed: 500, // 进度条动画的速度
	showSpinner: true, // 是否显示旋转的加载器
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3, // 进度条最小百分比 默认0.08
});

export default NProgress;
