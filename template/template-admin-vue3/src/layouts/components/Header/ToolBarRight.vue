<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 11:51:33
 * @FilePath: \template-admin-vue3\src\layouts\components\Header\ToolBarRight.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-31 15:53:39
-->
<template>
	<div class="flex-row-center-center">
		<div class="header-icon">
			<i class="iconfont icon-zhuti" style="font-size: 20px" @click="openDrawer"></i>
			<i class="iconfont icon-fangda" style="font-size: 20px" @click="handleFullScreen"></i>
			<SwitchDark />
		</div>
		<span class="username">admin</span>
		<Avatar />
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import SwitchDark from '@/components/SwitchDark/SwitchDark.vue';
import Avatar from './components/Avatar.vue';
import mittBus from '@/utils/mittBus';
import screenfull from 'screenfull';
const openDrawer = () => {
	mittBus.emit('openDrawer');
};
onMounted(() => {
	screenfull.on('change', () => {});
});
const handleFullScreen = () => {
	screenfull.toggle();
};
</script>
<style lang="scss" scoped>
.header-icon {
	display: flex;
	align-items: center;

	& > * {
		margin-left: 21px;
	}
}

.username {
	margin: 0 15px;
}
</style>
