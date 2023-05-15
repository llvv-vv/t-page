import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin(),
		Components({
			resolvers: [AntDesignVueResolver()],
		}),
	],
	server: {
		host: 'localhost',
		port: 9527,
		open: true,
	},
	// css: {
	// 	preprocessorOptions: {
	// 		less: {
	// 			javascriptEnabled: true,
	// 			charset: false,
	// 			modifyVars: {
	// 				'@primary-color': '#ff0000',
	// 			},
	// 		},
	// 	},
	// },
})
