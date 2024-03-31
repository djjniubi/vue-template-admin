<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-29 23:58:06
 * @FilePath: \template-admin-vue3\src\layouts\components\TabBar\TabBar.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-31 00:27:45
-->
<template>
	<div class="tabs-box">
		<el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
			<el-tab-pane :label="item.title" :name="item.path" v-for="item in tabsList" :key="item.name" :closable="item.close">
				<template #label>
					<el-icon v-if="item.icon && globalStore.isTabBarIcon">
						<component :is="item.icon"></component>
					</el-icon>
					{{ item.title }}
				</template>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TabBarProps } from '@/store/interface/index';
import { useTabBarStore } from '@/store/modules/tabBar';
import { userPermissionStore } from '@/store/modules/permission';
import { userGlobalStore } from '@/store/modules/global';
import { TabsPaneContext } from 'element-plus';
const route = useRoute();
const router = useRouter();
const tabBarStore = useTabBarStore();
const permissionStore = userPermissionStore();
const globalStore = userGlobalStore();
const tabsMenuValue = ref(route.fullPath);
const tabsList = computed(() => tabBarStore.tabBarList);

onMounted(() => {
	initTabs();
});
watch(
	() => route.fullPath,
	() => {
		tabsMenuValue.value = route.fullPath;
		const { meta } = route;
		// 添加标签栏属性
		const tabsAttributeValue: TabBarProps = {
			icon: meta.icon as string,
			title: meta.title as string,
			path: route.fullPath,
			name: route.name as string,
			close: !meta.isAffix,
			isKeepAlive: meta.isKeepAlive as boolean,
		};
		tabBarStore.addTabs(tabsAttributeValue);
	},
	{ immediate: true },
);

// 初始化tabs
const initTabs = () => {
	permissionStore.showMenuList.forEach((item) => {
		const { meta } = item;
		if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
			// 添加标签栏属性
			const tabsAttributeValue: TabBarProps = {
				icon: meta.icon as string,
				title: meta.title as string,
				path: item.path,
				name: item.name,
				close: !meta.isAffix,
				isKeepAlive: meta.isKeepAlive as boolean,
			};
			tabBarStore.addTabs(tabsAttributeValue);
		}
	});
};

const tabClick = (tabItem: TabsPaneContext) => {
	const { props } = tabItem;
	router.push(props.name as string);
};
const tabRemove = (tabItem: string) => {
	tabBarStore.removeTab(tabItem as string);
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
