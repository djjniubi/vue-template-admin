<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-31 18:02:06
 * @FilePath: \template-admin-vue3\src\components\TreeForm\TreeForm.vue
 * @LastEditors: mydjj
 * @LastEditTime: 2024-04-20 21:49:55
-->
<template>
	<div class="card-box">
		<h4>树形组件单选</h4>
		<el-input v-model="inputValue" placeholder="请输入内容"></el-input>
		<el-scrollbar height="400px">
			<el-tree
				ref="treeRef"
				style="max-width: 600px"
				default-expand-all
				:node-key="id"
				:data="data"
				:show-checkbox="multiple"
				:check-strictly="false"
				:current-node-key="!multiple ? selected : ''"
				:highlight-current="!multiple"
				:expand-on-click-node="false"
				:check-on-click-node="multiple"
				:props="defaultProps"
				@node-click="handleNodeClick">
			</el-tree>
		</el-scrollbar>
	</div>
</template>
<script lang="ts" setup>
import { ElTree } from 'element-plus';
import { ref, watch, onBeforeMount, nextTick, reactive } from 'vue';

// 接收父组件的参数
interface ThreeFormProps {
	data?: { [key: string]: any };
}
const inputValue = ref('');
const treeRef = ref<InstanceType<typeof ElTree>>();
const id = ref('id');
const multiple = ref(false);
interface Tree {
	id: string;
	label: string;
	name?: string;
	children?: Tree[];
}
const handleNodeClick = (data: Tree) => {
	console.log(data);
};
const selected = ref();

const data = reactive([
	{
		id: '1',
		name: '华东分部',
		children: [
			{ id: '11', name: '研发部' },
			{ id: '12', name: '市场部' },
			{ id: '13', name: '商务部' },
			{ id: '14', name: '财务部' },
		],
	},
	{
		id: '2',
		name: '华南分部',
		children: [
			{ id: '21', name: '研发部' },
			{ id: '22', name: '市场部' },
			{ id: '23', name: '商务部' },
			{ id: '24', name: '财务部' },
		],
	},
	{
		id: '3',
		name: '西北分部',
		children: [
			{ id: '31', name: '研发部' },
			{ id: '32', name: '市场部' },
			{ id: '33', name: '商务部' },
			{ id: '34', name: '财务部' },
		],
	},
]);

const defaultProps = {
	children: 'children',
	label: 'name',
};
const setSelected = () => {
	selected.value = data[0].id;
};
onBeforeMount(() => {
	setSelected();
	nextTick(() => {
		setSelected();
	});
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
