import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import EslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [
        vue(),
        EslintPlugin(),
        UnoCSS(),
        Components({
            resolvers: [AntDesignVueResolver({ importStyle: false })],
        }),
        viteCompression(),
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
        // 开启局域网地址
        host: true,
        port: 9527,
        open: true,
        // proxy: {
        //   '/op': {
        //     target: VITE_BASE_API,
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/op/, 'op')
        //   }
        // }
    },
    css: {
        // postcss: {
        //     plugins: [],
        // },
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve(
                        'src/assets/style/theme.less'
                    )}";`,
                },
                javascriptEnabled: true,
            },
        },
    },
}))
