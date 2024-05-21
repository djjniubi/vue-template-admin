<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-01 16:12:18
 * @FilePath: \template-admin-vue3\src\App.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-11 20:55:22
-->
<template>
	<router-view></router-view>
</template>
<script setup lang="ts">
import { useTheme } from '@/hooks/theme';
const { initTheme } = useTheme();
initTheme();
</script>
