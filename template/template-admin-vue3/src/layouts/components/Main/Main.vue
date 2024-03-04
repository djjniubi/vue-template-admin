<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-26 10:43:09
 * @FilePath: \vue3-template\src\layouts\components\Main\Main.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-27 14:57:43
-->
<template>
	<el-main>
		<div class="home card flex-row-center-center">
			<img src="@/assets/login-log.png" alt="" srcset="" />
		</div>
	</el-main>
</template>

<style lang="scss" scoped>
.el-main {
	padding: 12px;
	background-color: var(--el-bg-color-page);

	.home {
		width: 100%;
		height: 100%;
	}

	.card {
		background-color: var(--el-bg-color);
	}
}
</style>
