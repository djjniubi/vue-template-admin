<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-05-21 19:03:50
 * @FilePath: \vue-template-admin\template\template-admin-vue3\src\layouts\components\Header\components\InfoDialog.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-05-21 22:54:59
-->
<template>
	<el-dialog v-model="dialogVisible" title="个人信息" width="500" @close="closeDialog">
		<el-row :gutter="20">
			<el-col :span="7">
				<div class="grid-content ep-bg-purple flex-col-center-start">
					<el-avatar class="mb-15" :size="120" :src="circleUrl" />

					<el-upload ref="upload" class="upload-demo" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :disabled="!isUpdate" :limit="1" :auto-upload="false" :on-success="uploadSuccess">
						<el-link class="mx-1" type="primary" :disabled="!isUpdate" :underline="false">修改头像</el-link>
					</el-upload>
				</div>
			</el-col>
			<el-col :span="1">
				<div class="grid-content ep-bg-purple" style="height: 100%">
					<el-divider direction="vertical" style="height: 100%; margin: 0" />
				</div>
			</el-col>
			<el-col :span="16">
				<div class="grid-content ep-bg-purple">
					<el-form :model="form" label-width="auto">
						<el-form-item label="用户名称">
							<el-input v-model="form.name" :disabled="!isUpdate" />
						</el-form-item>
						<el-form-item label="手机号码">
							<el-input v-model="form.phone" :disabled="!isUpdate" />
						</el-form-item>
						<el-form-item label="电子邮箱">
							<el-input v-model="form.email" :disabled="!isUpdate" />
						</el-form-item>
						<el-form-item label="所属部门">
							<el-input v-model="form.department" disabled />
						</el-form-item>
						<el-form-item label="性别">
							<el-radio-group v-model="form.resource" :disabled="!isUpdate">
								<el-radio value="1">男</el-radio>
								<el-radio value="0">女</el-radio>
								<el-radio value="2">其他</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="dialogVisible = false">取消</el-button>
				<el-button type="primary" plain @click="modification">修改</el-button>
				<el-button v-if="isUpdate" type="primary" @click="submit"> 保存 </el-button>
				<el-button v-else type="primary" @click="dialogVisible = false"> 确定 </el-button>
			</div>
		</template>
	</el-dialog>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
const dialogVisible = ref(false);
const state = reactive({
	circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
	squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
	sizeList: ['small', '', 'large'] as const,
});
const form = reactive({
	name: 'admin',
	phone: '1232456854',
	email: 'dfads45455@163.com',
	department: '研发部',
	resource: '1',
});
const upload = ref<InstanceType<typeof ElUpload> | null>(null);
const { circleUrl, squareUrl, sizeList } = toRefs(state);
const isUpdate = ref(false);
const openDialog = () => {
	dialogVisible.value = true;
};
const closeDialog = () => {
	isUpdate.value = false;
};
const modification = () => {
	isUpdate.value = true;
};
const submit = () => {
	isUpdate.value = false;
};
const uploadSuccess = () => {};
defineExpose({ openDialog });
</script>
<style lang="scss" scoped>
:deep(.upload-demo) {
	.el-upload-list {
		display: none; /* 隐藏上传列表 */
	}
}
</style>
