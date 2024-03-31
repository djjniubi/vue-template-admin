<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 16:51:46
 * @FilePath: \template-admin-vue3\src\layouts\components\Menu\NavMenu.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-30 16:10:24
-->
<template>
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu v-if="item.children?.length" :index="item.path">
			<template #title>
				<el-icon><location /></el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<NavMenu :menu-list="item.children" />
		</el-sub-menu>
		<el-menu-item v-else :index="item.path" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }" @click="handleClickMenu(item)">
			<el-icon><setting /></el-icon>
			<template #title>{{ item.meta.title }}</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { userGlobalStore } from '@/store/modules/global';
defineProps<{ menuList: Menu.MenuOptions[] }>();
const router = useRouter();
const globalStore = userGlobalStore();
const handleClickMenu = (subItem: Menu.MenuOptions) => {
	router.push(subItem.path);
};
</script>
<style lang="scss" scoped>
.el-menu-item {
	border-radius: 12px;

	&.is-active {
		background-color: var(--el-color-primary) !important;
		color: var(--el-color-white);
	}
}
</style>
