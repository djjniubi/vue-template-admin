<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-28 10:33:28
 * @FilePath: \vue3-template\src\layouts\components\ThemeDrawer\index.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-28 16:51:15
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
	</el-drawer>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import mittBus from '@/utils/mittBus';
import { userGlobalStore } from '@/store/modules/global';
const globalStore = userGlobalStore();
const layout = computed(() => globalStore.layout);
const drawer = ref(false);
mittBus.on('openDrawer', () => (drawer.value = true));
const setLayout = (item: string) => {
	globalStore.setGlobalStoreConfig('layout', item);
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
