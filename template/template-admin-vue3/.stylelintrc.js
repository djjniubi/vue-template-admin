/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-01-12 15:50:44
 * @FilePath: \vue3-template\.stylelintrc.js
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-28 10:17:18
 */
module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss', 'stylelint-config-standard'],
	plugins: [],
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
		{
			files: ['**/*.vue'],
			customSyntax: 'postcss-html'
		}
	],
	ignoreFiles: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx', '**/*.md', '**/*.yaml'],
	rules: {
		// "no-descending": [false]
		"at-rule-no-unknown": [
			true, { "ignoreAtRules": ["mixin", "if", "include", "for"] }
		],
		"scss/at-import-partial-extension": null,
		"import-notation": "string",
		"font-family-no-missing-generic-family-keyword": null
	},
}
