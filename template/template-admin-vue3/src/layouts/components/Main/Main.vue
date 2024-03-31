<template>
	<TabBar v-show="global.isTabBar" />
	<el-main>
		<router-view v-slot="{ Component, route }">
			<!-- 记录一个bug 也不算bug吧 使用transition组件时并且使用mode=out-in时，路由组件的根节点只能有一个-->
			<transition appear mode="out-in">
				<keep-alive :include="keepAliveList">
					<component :is="Component" v-if="isRouterShow" :key="route.path"></component>
				</keep-alive>
			</transition>
		</router-view>
	</el-main>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { userGlobalStore } from '@/store/modules/global';
import { userKeepAlive } from '@/store/modules/keepAlive';
import TabBar from '../../components/TabBar/TabBar.vue';
const global = userGlobalStore();
const { isCollapse } = storeToRefs(global);
const keepAliveStore = userKeepAlive();
const { keepAliveList } = storeToRefs(keepAliveStore);

const isRouterShow = ref(true);
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
