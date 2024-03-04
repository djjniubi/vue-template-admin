<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 09:35:43
 * @FilePath: \vue3-template\src\layouts\index.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-28 17:01:32
-->
<template>
	<component :is="compoentData[layout]"></component>
	<ThemeDrawer />
</template>
<script setup lang="ts">
import { computed, type Component } from 'vue';
import { userGlobalStore } from '@/store/modules/global';
import { LayoutType } from '@/store/interface/index';
import VerticalLayout from './VerticalLayout/index.vue';
import ClassicalLayout from './ClassicalLayout/index.vue';
import ThemeDrawer from './components/ThemeDrawer/index.vue';
const globalStore = userGlobalStore();
const layout = computed(() => globalStore.layout);
const compoentData: Record<LayoutType, Component> = {
	vertical: VerticalLayout,
	classical: ClassicalLayout,
};
</script>
<style lang="scss" scoped>
.layout {
	min-width: 600px;
}
</style>
