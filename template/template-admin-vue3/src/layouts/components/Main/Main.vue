<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 10:43:09
 * @FilePath: \template-admin-vue3\src\layouts\components\Main\Main.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-25 18:33:21
-->
<template>
	<el-main>
		<router-view v-slot="{ Component, route }">
			<Transition appear mode="out-in">
				<KeepAlive :include="'Home'">
					<component :is="Component" :key="route.path"></component>
				</KeepAlive>
			</Transition>
		</router-view>
	</el-main>
</template>
<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { userGlobalStore } from '@/store/modules/global';
const global = userGlobalStore();
const { isCollapse } = storeToRefs(global);
//监听视口变化，控制左侧菜单折叠
// const windowWidth = ref(0);
const listeningWindow = () => {
	if (!isCollapse.value && document.body.clientWidth < 1200) global.setGlobalStoreConfig('isCollapse', true);
	if (isCollapse.value && document.body.clientWidth > 1200) global.setGlobalStoreConfig('isCollapse', false);
};
window.addEventListener('resize', listeningWindow, false);

onBeforeUnmount(() => {
	window.removeEventListener('resize', listeningWindow);
});
</script>
<style lang="scss" scoped>
.el-main {
	padding: 12px;
	background-color: var(--el-bg-color-page);
}
</style>
