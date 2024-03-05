<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 09:35:43
 * @FilePath: \template-admin-vue3\src\layouts\VerticalLayout\index.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-04 14:28:32
-->
<template>
	<el-container class="layout">
		<el-aside>
			<div class="aside-box" :style="{ width: globalStore.isCollapse ? '65px' : '254px' }">
				<div class="flex-row-center-center login">
					<img src="@/assets/images/vue.svg" alt="log" style="margin-right: 6px" />
					<span v-show="!globalStore.isCollapse" style="color: var(--el-aside-logo-text-color)">Vue+vite+ts</span>
				</div>
				<el-scrollbar>
					<el-menu :collapse="globalStore.isCollapse" :default-active="activeName">
						<NavMenu :menuList="menuList" />
					</el-menu>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-container>
			<el-header class="flex-row-center-between">
				<ToolBarLeft />
				<ToolBarRight />
			</el-header>
			<Main />
		</el-container>
	</el-container>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavMenu from '../components/Menu/NavMenu.vue';
import ToolBarLeft from '../components/Header/ToolBarLeft.vue';
import ToolBarRight from '../components/Header/ToolBarRight.vue';
import Main from '../components/Main/Main.vue';
import { userGlobalStore } from '@/store/modules/global';
import { userPermissionStore } from '@/store/modules/permission';
const globalStore = userGlobalStore();
const permissionStore = userPermissionStore();
const route = useRoute();
console.log('permissionStore', permissionStore.showMenuList);
const menuList = computed(() => permissionStore.showMenuList);
const activeName = computed(() => (route.meta.activeName ? route.meta.activeName : route.path));
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
