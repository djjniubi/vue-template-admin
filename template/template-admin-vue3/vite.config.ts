/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-01-12 11:27:47
 * @FilePath: \vue3-template\vite.config.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-02-23 10:41:28
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
	const root = process.cwd();
	const viteEnv = loadEnv(mode, root);
	console.log('env', viteEnv, mode, command);
	return {
		plugins: [vue(), AutoImport({ resolvers: [ElementPlusResolver()] }), Components({ resolvers: [ElementPlusResolver()] })],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		esbuild: {
			pure: viteEnv.VITE_USER_NODE_ENV === 'production' ? ['console.log', 'debugger'] : [],
		},
		// css: {
		// 	preprocessorOptions: {
		// 		scss: {
		// 			additionalData: `@import '../src/style/tools/function.scss';`
		// 		}
		// 	}
		// },
		build: {},
	};
});
