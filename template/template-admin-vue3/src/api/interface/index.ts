/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-19 21:33:18
 * @FilePath: \template-admin-vue3\src\api\interface\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-21 00:27:36
 */
/**请求响应参数(没有data) */
export interface Result {
	code: string;
	msg: string;
}

/**请求响应参数有(data)等其他参数 */
export interface ResultData<T = any> extends Result {
	data: T;
	roles?: string | string[];
}

/**响应分页参数 */
export interface Page<T> {
	list?: T[];
	rows?: T[];
	pageNum: number;
	pageSize: number;
	total: number;
}
/**登录参数 */

export namespace Login {
	export interface LoginParams {
		username: string;
		password: string;
	}
	export interface LoginResultModel {
		access_token: string;
	}
}
