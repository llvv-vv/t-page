import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin(),
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
        UnoCSS(),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@c': path.resolve(__dirname, './src/components'),
            '@s': path.resolve(__dirname, './src/store/module'),
            '@u': path.resolve(__dirname, './src/utils'),
            '@v': path.resolve(__dirname, './src/views'),
        },
    },
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
