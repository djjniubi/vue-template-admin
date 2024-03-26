/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-18 23:06:30
 * @FilePath: \template-admin-vue3\src\directives\index.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-21 00:36:47
 */
import { userPermissionStore } from '@/store/modules/permission';
import type { DirectiveBinding } from 'vue';
import { userStores } from '@/store/modules/user';
const auth = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		const { value } = binding;
		const permissionStore = userPermissionStore();
		permissionStore.getButtonList();
		const userStore = userStores();
		const currentPageRole = permissionStore.authButtonListGet[userStore.userInfo.roles as string];
		if (Array.isArray(value) && currentPageRole.length) {
			const hasPermission = value.every((item) => currentPageRole.includes(item));
			if (!hasPermission) {
				el.remove();
			}
		} else {
			if (!currentPageRole.includes(value)) {
				el.remove();
			}
		}
	},
};

const directives = {
	install: function (app: any) {
		app.directive('auth', auth);
	},
};

export default directives;
