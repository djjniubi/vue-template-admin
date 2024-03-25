/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-01-12 11:27:47
 * @FilePath: \template-admin-vue3\vite.config.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-19 22:05:35
 */
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const viteEnv = loadEnv(mode, root);
	console.log('env', viteEnv.VITE_API_URL, mode, command);
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
		server: {
			open: true,
			host: '0.0.0.0',
			port: 8858,
			cors: true,
			proxy: {
				'/api': {
					target: viteEnv.VITE_API_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},
		build: {},
	};
});
