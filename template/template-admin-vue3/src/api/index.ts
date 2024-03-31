/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-19 15:56:45
 * @FilePath: \template-admin-vue3\src\api\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-30 16:41:02
 */
import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { userStores } from '@/store/modules/user';
import { ResultEnum } from '@/enums/httpEnum';
import { ResultData } from '@/api/interface/index';
import router from '@/router';
const config = {
	//请求地址
	baseURL: import.meta.env.VITE_API_URL,
	//设置超时时间
	timeout: 10000,
	// 跨域时候允许携带凭证
	withCredentials: true,
};

class RequestHttp {
	http: AxiosInstance;
	constructor(config: AxiosRequestConfig) {
		this.http = axios.create(config);
		/**请求拦截 */
		this.http.interceptors.request.use(
			(config) => {
				const userStore = userStores();
				console.log('config', config);
				//判断是是否有token
				if (userStore.token) config.headers['Authorization'] = 'Bearer ' + userStore.token;
				return config;
			},
			(error) => {
				return Promise.reject(error);
			},
		);
		/**响应拦截 */

		this.http.interceptors.response.use(
			(response: AxiosResponse) => {
				const userStore = userStores();
				const { data } = response;
				if (data.code === ResultEnum.OVERDUE) {
					userStore.setToken('');
					router.replace('/login');
					ElMessage.error(data.msg);
					return Promise.reject(data);
				}
				return data;
			},
			(error) => {
				return Promise.reject(error);
			},
		);
	}

	get<T>(url: string, params?: object): Promise<ResultData<T>> {
		return this.http.get(url, { params });
	}
	post<T>(url: string, params?: object): Promise<ResultData<T>> {
		return this.http.post(url, { ...params });
	}
	put<T>(url: string, params?: object): Promise<ResultData<T>> {
		return this.http.put(url, { params });
	}
	delete<T>(url: string, params?: object): Promise<ResultData<T>> {
		return this.http.delete(url, { params });
	}
}

export default new RequestHttp(config);
