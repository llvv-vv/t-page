import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import EslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import pxtovw from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [
        UnoCSS(),
        vue(),
        EslintPlugin(),
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
        postcss: {
            plugins: [
                // 这里是设计稿宽度 自己修改
                pxtovw({
                    unitToConvert: 'px', // 需要转换的单位，默认为"px"
                    viewportWidth: 1920, // 设计稿的视口宽度
                    selectorBlackList: ['ant-'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
                    unitPrecision: 5, // 单位转换后保留的精度
                    propList: ['*'], // 能转化为vw的属性列表
                    viewportUnit: 'vw', // 希望使用的视口单位
                    // fontViewportUnit: 'vw', // 字体使用的视口单位
                    // minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                    // mediaQuery: false, // 媒体查询里的单位是否需要转换单位
                    // replace: true, //  是否直接更换属性值，而不添加备用属性
                    // exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                    // include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
                    // landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
                    // landscapeUnit: 'vw', // 横屏时使用的单位
                    // landscapeWidth: 1920, // 横屏时使用的视口宽度
                }),
            ],
        },
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
