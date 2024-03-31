<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 09:52:40
 * @FilePath: \template-admin-vue3\src\layouts\components\Header\ToolBarLeft.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-29 23:47:12
-->
<template>
	<div class="flex-row-center-center">
		<el-icon class="collapse-icon" @click="changeCollapse" size="22">
			<component :is="globalStore.isCollapse ? 'expand' : 'fold'"></component>
		</el-icon>
		<Breadcrumb v-if="globalStore.isBreadcrumb" />
	</div>
</template>

<script setup lang="ts">
import { userGlobalStore } from '@/store/modules/global';
import Breadcrumb from './components/Breadcrumb.vue';
const globalStore = userGlobalStore();
const changeCollapse = () => globalStore.setGlobalStoreConfig('isCollapse', !globalStore.isCollapse);
</script>
