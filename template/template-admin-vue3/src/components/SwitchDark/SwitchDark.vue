<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 11:46:27
 * @FilePath: \vue3-template\src\components\SwitchDark\SwitchDark.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-26 13:33:50
-->
<template>
	<el-switch v-model="globalStore.isDark" inline-prompt active-icon="Sunny" inactive-icon="Moon" @change="switchDark" />
</template>
<script setup lang="ts">
import { userGlobalStore } from '@/store/modules/global';
import { useTheme } from '@/hooks/theme';
const { switchDark } = useTheme();
const globalStore = userGlobalStore();
</script>
