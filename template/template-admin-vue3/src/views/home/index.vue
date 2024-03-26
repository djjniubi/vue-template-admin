<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-22 14:48:27
 * @FilePath: \template-admin-vue3\src\views\home\index.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-26 22:51:10
-->
<template>
	<div v-auth="'add'">888888</div>
</template>

<script setup lang="ts">
import { hexToRgb, rgbToHex, getColorDeepen } from '@/utils/hexToRgb';
// hexToRgb('#ffffff');
console.log(getColorDeepen('#409eff', 0.2));
</script>
