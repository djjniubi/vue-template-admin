import { defineStore } from 'pinia';
import { UserState } from '../interface/index';
import piniaPluginConfig from '../plugIn/lasting';

export const userStores = defineStore({
	id: 'minUserStore',
	state: (): UserState => ({
		token: '',
		userInfo: {},
	}),
	actions: {
		setToken(token: string) {
			this.token = token;
		},
		setUserInfo(userInfo: UserState['userInfo']) {
			this.userInfo = userInfo;
		},
	},
	persist: piniaPluginConfig('minUserStore'),
});
