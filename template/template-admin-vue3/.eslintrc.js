/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-01-12 10:11:36
 * @FilePath: \template-admin-vue3\.eslintrc.js
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-25 18:56:24
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: 'vue-eslint-parser',
	parserOptions: { ecmaVersion: 'latest', parser: '@typescript-eslint/parser', sourceType: 'module' },
	plugins: ['@typescript-eslint', 'vue'],
	rules: {
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-namespace': 'off',
		// 'vue/multi-word-component-names': ['error', { ignores: ['index', '403', '404', '500'] }],
	},
	//这里我使用了element UI的自动自动导入功能,导致有些全局方法不能通过eslint,只要在这里把声明成全局变量
	globals: {
		ElMessage: 'readonly',
	},
};
