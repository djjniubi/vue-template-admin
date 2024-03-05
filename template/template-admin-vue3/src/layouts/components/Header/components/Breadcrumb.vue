<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-04 16:26:44
 * @FilePath: \template-admin-vue3\src\layouts\components\Header\components\Breadcrumb.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-05 11:01:52
-->
<template>
	<div class="ml-10 breadcrumb-box">
		<el-breadcrumb separator-icon="ArrowRight">
			<transition-group name="breadcrumb">
				<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
					<div class="breadcrumb-item" v-if="!item.children" @click="breadcrumbClick(item, index)">
						<el-icon class="mr-6" size="16"><component :is="item.meta.icon"></component></el-icon>
						<span>{{ item.meta.title }}</span>
					</div>
					<el-dropdown trigger="hover" v-else>
						<a>
							<div class="breadcrumb-item">
								<el-icon class="mr-6" size="16"><component :is="item.meta.icon"></component></el-icon>
								<span class="mr-6">{{ item.meta.title }}</span>
								<el-icon><ArrowDown /></el-icon>
							</div>
						</a>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item :icon="menuItem.meta.icon" v-for="menuItem in item.children" :key="menuItem.path" @click="router.push(menuItem.path)">{{ menuItem.meta.title }}</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { userPermissionStore } from '@/store/modules/permission';
const permissionStore = userPermissionStore();
const route = useRoute();
const router = useRouter();
const breadcrumbList = computed(() => {
	return permissionStore.breadcrumbList[route.matched[route.matched.length - 1].path] ?? [];
});
//
const breadcrumbClick = (menu: Menu.MenuOptions, index: number) => {
	if (index !== breadcrumbList.value.length - 1) {
		router.push(menu.path);
	}
};
</script>
<style lang="scss" scoped>
.breadcrumb-box {
	display: flex;
	align-items: center;
	overflow: hidden;

	.breadcrumb-item {
		display: inline-flex;
	}

	/** 解决下拉框出现边框览器默认的焦点样式 */

	.el-dropdown,
	.el-dropdown * {
		outline: none;
	}
}
</style>
