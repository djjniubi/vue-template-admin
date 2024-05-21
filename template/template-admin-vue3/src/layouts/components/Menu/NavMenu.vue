<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 16:51:46
 * @FilePath: \template-admin-vue3\src\layouts\components\Menu\NavMenu.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-21 02:40:01
-->
<template>
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu v-if="item.children?.length" :index="item.path">
			<template #title>
				<el-icon v-if="item.meta.icon">
					<component :is="item.meta.icon"></component>
				</el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<NavMenu :menu-list="item.children" />
		</el-sub-menu>
		<el-menu-item :class="menuItemType" v-else :index="item.path" @click="handleClickMenu(item)">
			<el-icon v-if="item.meta.icon">
				<component :is="item.meta.icon"></component>
			</el-icon>
			<template #title>{{ item.meta.title }}</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { userGlobalStore } from '@/store/modules/global';
defineProps<{ menuList: Menu.MenuOptions[] }>();
const router = useRouter();
const globalStore = userGlobalStore();
const handleClickMenu = (subItem: Menu.MenuOptions) => {
	console.log('subItem', subItem);
	if (subItem.path === '/dataScreen') {
		window.open(`http://localhost:8858${subItem.path}`, '_blank');
	} else {
		router.push(subItem.path);
	}
};
const menuItemType = computed(() => {
	return globalStore.isMenuType ? 'menu-item-type2' : ['menu-item-type1', ma.value];
});
const ma = computed(() => {
	return globalStore.isCollapse ? 'ma-0' : 'ma-15';
});
</script>
<style lang="scss" scoped>
.menu-item-type1 {
	border-radius: 12px;

	&:hover {
		color: var(--el-menu-hover-text-color);
	}

	&.is-active {
		background-color: var(--el-menu-active-color) !important;
		color: var(--el-menu-active-color-white);
	}
}

.menu-item-type2 {
	&:hover {
		color: var(--el-menu-hover-text-color);
	}

	&.is-active {
		background-color: var(--el-menu-active-bg-color) !important;
		color: var(--el-menu-active-color);

		&::before {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 4px;
			content: '';
			background-color: var(--el-color-primary);
		}
	}
}

.ma-0 {
	margin: 0;
}

.ma-15 {
	margin: 15px;
}
</style>
