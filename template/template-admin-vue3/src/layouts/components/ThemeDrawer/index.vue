<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-28 10:33:28
 * @FilePath: \template-admin-vue3\src\layouts\components\ThemeDrawer\index.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-31 00:29:14
-->
<template>
	<el-drawer v-model="drawer" size="280">
		<el-divider>
			<el-icon><House /></el-icon>
			布局样式
		</el-divider>
		<div class="layout-box">
			<el-tooltip content="纵向" placement="top">
				<div class="flex-row-center-between layout-item layout-vertical round-6 mb-20" :class="{ 'is-activ': layout === 'vertical' }" @click="setLayout('vertical')">
					<div class="layout-menu round-3"></div>
					<div class="layout-container">
						<div class="layout-header round-3"></div>
						<div class="layout-main round-3"></div>
					</div>
					<el-icon v-if="layout === 'vertical'"><CircleCheckFilled /></el-icon>
				</div>
			</el-tooltip>
			<el-tooltip content="经典" placement="top">
				<div class="layout-item layout-classical round-6 mb-20" :class="{ 'is-activ': layout === 'classical' }" @click="setLayout('classical')">
					<div class="layout-header round-3"></div>
					<div class="layout-container">
						<div class="layout-menu round-3"></div>
						<div class="layout-main round-3"></div>
					</div>
					<el-icon v-if="layout === 'classical'"><CircleCheckFilled /></el-icon>
				</div>
			</el-tooltip>
		</div>
		<el-divider>
			<el-icon><MagicStick /></el-icon>
			主题颜色
		</el-divider>
		<div class="theme-item">
			<span>主题颜色</span>
			<el-color-picker v-model="globalStore.primary" :predefine="colorList" @change="changePrimary" />
		</div>
		<div class="theme-item">
			<span>灰色模式</span>
			<el-switch v-model="globalStore.isGray" @change="grayAndWeakColor('gray', !!$event)" />
		</div>
		<div class="theme-item mb40">
			<span>色弱模式</span>
			<el-switch v-model="globalStore.isColorWeakness" @change="grayAndWeakColor('colorWeakness', !!$event)" />
		</div>
		<el-divider>
			<el-icon><Setting /></el-icon>
			界面设置
		</el-divider>
		<div class="theme-item mb40">
			<span>折叠菜单</span>
			<el-switch v-model="globalStore.isCollapse" />
		</div>
		<div class="theme-item mb40">
			<span>面包屑</span>
			<el-switch v-model="globalStore.isBreadcrumb" />
		</div>
		<div class="theme-item mb40">
			<span>面包屑图标</span>
			<el-switch v-model="globalStore.isBreadcrumbIcon" />
		</div>
		<div class="theme-item mb40">
			<span>标签栏</span>
			<el-switch v-model="globalStore.isTabBar" />
		</div>
		<div class="theme-item mb40">
			<span>标签栏图标</span>
			<el-switch v-model="globalStore.isTabBarIcon" />
		</div>
	</el-drawer>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import mittBus from '@/utils/mittBus';
import { userGlobalStore } from '@/store/modules/global';
import { useTheme } from '@/hooks/theme';
const globalStore = userGlobalStore();
const layout = computed(() => globalStore.layout);
const drawer = ref(false);
mittBus.on('openDrawer', () => (drawer.value = true));
const { changePrimary, grayAndWeakColor } = useTheme();
const setLayout = (item: string) => {
	globalStore.setGlobalStoreConfig('layout', item);
};
// 预定义主题颜色
const colorList = ['#daa96e', '#0c819f', '#409eff', '#27ae60', '#ff5c93', '#e74c3c', '#fd726d', '#f39c12', '#9b59b6'];
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
