<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 09:52:40
 * @FilePath: \vue3-template\src\layouts\components\Header\ToolBarLeft.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-27 16:16:56
-->
<template>
	<div>
		<el-icon class="collapse-icon" @click="changeCollapse" size="22">
			<component :is="globalStore.isCollapse ? 'expand' : 'fold'"></component>
		</el-icon>
	</div>
</template>

<script setup lang="ts">
import { userGlobalStore } from '@/store/modules/global';
const globalStore = userGlobalStore();
const changeCollapse = () => globalStore.setGlobalStoreConfig('isCollapse', !globalStore.isCollapse);
</script>
