<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 16:51:46
 * @FilePath: \vue-template-admin\template\template-admin-vue3\src\layouts\components\Menu\NavMenu.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-04 14:00:24
-->
<template>
	<!-- <el-sub-menu index="1">
		<template #title>
			<el-icon><location /></el-icon>
			<span>Navigator One</span>
		</template>
		<el-menu-item-group>
			<template #title><span>Group One</span></template>
			<el-menu-item index="1-1" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">item one</el-menu-item>
			<el-menu-item index="1-2" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">item two</el-menu-item>
		</el-menu-item-group>
		<el-menu-item-group title="Group Two">
			<el-menu-item index="1-3" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">item three</el-menu-item>
		</el-menu-item-group>
		<el-sub-menu index="1-4">
			<template #title><span>item four</span></template>
			<el-menu-item index="1-4-1" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">item one</el-menu-item>
		</el-sub-menu>
	</el-sub-menu>
	<el-menu-item index="2" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">
		<el-icon><icon-menu /></el-icon>
		<template #title>Navigator Two</template>
	</el-menu-item>
	<el-menu-item index="3" disabled>
		<el-icon><document /></el-icon>
		<template #title>Navigator Three</template>
	</el-menu-item>
	<el-menu-item index="4" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">
		<el-icon><setting /></el-icon>
		<template #title>Navigator Four</template>
	</el-menu-item>
	<el-menu-item index="5" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">
		<el-icon><setting /></el-icon>
		<template #title>Navigator Four</template>
	</el-menu-item>
	<el-menu-item index="6" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">
		<el-icon><setting /></el-icon>
		<template #title>Navigator Four</template>
	</el-menu-item>
	<el-menu-item index="7" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">
		<el-icon><setting /></el-icon>
		<template #title>Navigator Four</template>
	</el-menu-item>
	<el-menu-item index="8" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }">
		<el-icon><setting /></el-icon>
		<template #title>Navigator Four</template>
	</el-menu-item> -->
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu v-if="item.children?.length" :index="item.path">
			<template #title>
			<el-icon><location /></el-icon>
			<span>{{ item.meta.title }}</span>
		</template>
		<NavMenu :menu-list="item.children"/>
        </el-sub-menu>
		<el-menu-item v-else :index="item.path" :style="{ margin: globalStore.isCollapse ? '0px' : '15px' }" @click="handleClickMenu(item) ">
		<el-icon><setting /></el-icon>
		<template #title>{{ item.meta.title }}</template>
	</el-menu-item>
	</template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
import { userGlobalStore } from '@/store/modules/global';
defineProps<{menuList:Menu.MenuOptions[]}>()
const router = useRouter();
const globalStore = userGlobalStore();
const handleClickMenu=(subItem:Menu.MenuOptions)=>{
	return  router.push(subItem.path)
}
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
