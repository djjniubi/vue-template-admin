<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-28 08:53:17
 * @FilePath: \template-admin-vue3\src\layouts\ClassicalLayout\index.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-19 14:25:49
-->
<template>
	<el-container>
		<el-header class="flex-row-center-between">
			<div class="flex-row-center-start">
				<div class="flex-row-center-center login mr-15">
					<img src="@/assets/images/vue.svg" alt="log" style="margin-right: 6px" />
					<span style="color: var(--el-aside-logo-text-color)">Vue+vite+ts</span>
				</div>
				<ToolBarLeft />
			</div>
			<div>
				<ToolBarRight />
			</div>
		</el-header>
		<el-container>
			<el-aside width="200px">
				<div class="aside-box" :style="{ width: globalStore.isCollapse ? '65px' : '254px' }">
					<el-scrollbar>
						<el-menu :collapse="globalStore.isCollapse" :default-active="activeName">
							<NavMenu :menuList="menuList" />
						</el-menu>
					</el-scrollbar>
				</div>
			</el-aside>
			<Main />
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NavMenu from '../components/Menu/NavMenu.vue';
import ToolBarLeft from '../components/Header/ToolBarLeft.vue';
import ToolBarRight from '../components/Header/ToolBarRight.vue';
import Main from '../components/Main/Main.vue';
import { userPermissionStore } from '@/store/modules/permission';
import { userGlobalStore } from '@/store/modules/global';
import { useRoute } from 'vue-router';
const globalStore = userGlobalStore();
const permissionStore = userPermissionStore();
const route = useRoute();
const menuList = computed(() => permissionStore.showMenuList);
const activeName = computed(() => (route.meta.activeName ? route.meta.activeName : route.path));
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
