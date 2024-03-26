/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-19 23:08:11
 * @FilePath: \template-admin-vue3\src\enums\httpEnum.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-19 23:11:03
 */
export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export enum ContentType {
	JSON = 'application/json',
	FORM = 'application/x-www-form-urlencoded',
}

export enum ResultEnum {
	SUCCESS = 200,
	ERROR = 500,
	OVERDUE = 401,
	NOTFOUND = 404,
}
