<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-16 23:35:24
 * @FilePath: \vue3-template\src\views\login\index.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-22 14:46:20
-->
<template>
	<div class="login-container">
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/login-log.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/vue.svg" alt="log" />
					<h2 class="logo-text">欢迎登录</h2>
				</div>
				<el-form ref="loginForm" :model="formModel" :rules="formRules">
					<el-form-item prop="username">
						<el-input v-model="formModel.username" placeholder="用户名：admin">
							<template #prefix>
								<el-icon><User /></el-icon>
							</template>
						</el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="formModel.password" type="password" placeholder="密码：123456" show-password autocomplete="new-password">
							<template #prefix>
								<el-icon><Lock /></el-icon>
							</template>
						</el-input>
					</el-form-item>
				</el-form>
				<div class="form-btn">
					<el-button icon="CircleClose" round size="large" @click="resetForm(loginForm)"> 重置 </el-button>
					<el-button icon="UserFilled" round size="large" type="primary" :loading="loading" @click="login(loginForm)"> 登录 </el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { userStores } from '@/store/modules/user';
import { useRouter } from 'vue-router';
import type { ElForm } from 'element-plus';
type FormInstace = InstanceType<typeof ElForm>;
const loading = ref(false);
const loginForm = ref<FormInstace>();
const formModel = reactive({
	username: '',
	password: '',
});
const userStore = userStores();
const router = useRouter();
const formRules = reactive({
	username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
/**重置表单 */
const resetForm = (e: FormInstace | undefined) => {
	if (!e) return;
	e.resetFields();
};
/**登录 */
const login = (e: FormInstace | undefined) => {
	if (!e) return;
	e.validate(async (valid) => {
		if (!valid) return;
		loading.value = true;
		console.log('登录', valid);
		if (formModel.username !== 'admin' && formModel.password !== '123456') {
			ElMessage({
				message: '账号或密码错误',
				type: 'error',
			});
			loading.value = false;
			return;
		}
		setTimeout(() => {
			ElMessage({
				message: '登录成功',
				type: 'success',
			});
			userStore.setToken('asd123456');
			userStore.setUserInfo({ username: formModel.username });
			loading.value = false;
			router.push('/home/index');
		}, 800);
	});
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
