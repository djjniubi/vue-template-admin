/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-19 21:29:19
 * @FilePath: \template-admin-vue3\src\api\modules\login.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-25 18:28:44
 */
import http from '@/api/index';
// import routerData from '@/assets/json/routerList.json';
//登录接口
import { Login } from '@/api/interface/index';
export const loginApi = (data: Login.LoginParams) => {
	return http.post<Login.LoginResultModel>('/login', data);
};

//菜单接口
export const menuApiList = () => {
	return http.get('/menu/list');
	//本地菜单
	// return Promise.resolve(routerData);
};

//获取用户信息
export const getUserInfo = () => {
	return http.get('/getInfo');
};
