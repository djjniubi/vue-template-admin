<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-31 18:02:06
 * @FilePath: \template-admin-vue3\src\components\TreeForm\TreeForm.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-01 00:23:58
-->
<template>
	<div class="card-box">
		<h4>树形组件单选</h4>
		<el-input v-model="inputValue" placeholder="请输入内容"></el-input>
		<el-scrollbar height="400px">
			<el-tree ref="treeRef" style="max-width: 600px" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		</el-scrollbar>
	</div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';

const inputValue = ref('');
const treeRef = ref<Infinity<typeof ElTree>>();

interface Tree {
	label: string;
	children?: Tree[];
}
const handleNodeClick = (data: Tree) => {
	console.log(data);
};

const data: Tree[] = [
	{
		label: 'Level one 1',
		children: [
			{
				label: 'Level two 1-1',
				children: [
					{
						label: 'Level three 1-1-1',
					},
				],
			},
		],
	},
	{
		label: 'Level one 2',
		children: [
			{
				label: 'Level two 2-1',
				children: [
					{
						label: 'Level three 2-1-1',
					},
				],
			},
			{
				label: 'Level two 2-2',
				children: [
					{
						label: 'Level three 2-2-1',
					},
				],
			},
		],
	},
	{
		label: 'Level one 3',
		children: [
			{
				label: 'Level two 3-1',
				children: [
					{
						label: 'Level three 3-1-1',
					},
				],
			},
			{
				label: 'Level two 3-2',
				children: [
					{
						label: 'Level three 3-2-1',
					},
				],
			},
		],
	},
];

const defaultProps = {
	children: 'children',
	label: 'label',
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
