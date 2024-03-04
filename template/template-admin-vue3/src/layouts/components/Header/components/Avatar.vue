<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-02-27 17:02:38
 * @FilePath: \vue3-template\src\layouts\components\Header\components\Avatar.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-28 08:48:41
-->
<template>
	<el-dropdown trigger="click">
		<div class="avatar">
			<img src="@/assets/images/avatar.gif" alt="" srcset="" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item icon="User">个人信息</el-dropdown-item>
				<el-dropdown-item icon="Edit">修改密码</el-dropdown-item>
				<el-dropdown-item icon="SwitchButton">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
<style lang="scss" scoped>
.avatar {
	width: 35px;
	height: 35px;
	border-radius: 50%;

	img {
		width: 100%;
		height: 100%;
	}
}
</style>
