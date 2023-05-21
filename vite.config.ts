/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: llw 943607147@qq.com
 * @LastEditTime: 2023-05-21 18:50:48
 * @FilePath: \Base_APP_PC\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import EslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import pxtovw from 'postcss-px-to-viewport'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    // serve 或者 build
    console.log('command', command)
    console.log('mode', mode)

    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 约定'development' 用于开发，'production' 用于构建
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const _env = loadEnv(mode, process.cwd(), '')
    return {
        // 公共路径 比如部署在www.baidu.com/second/ 下 这里就是/second/ 注意前后都有斜杠
        base: '/',
        plugins: [
            UnoCSS(),
            vue(),
            EslintPlugin(),
            Components({
                resolvers: [AntDesignVueResolver({ importStyle: false })],
            }),
            // 仅在打包的时候启用
            {
                ...viteCompression(),
                apply: 'build',
            },
            {
                // 打包兼容各种浏览器 IE狗都不用（vue3的API IE就不支持 其实是没办法用）
                ...legacy({
                    targets: ['defaults', 'not IE 11'],
                }),
                apply: 'build',
            },
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
        // build: {
        //     target: 'es2015',
        //     // drop: ['debugger', 'console'],
        //     minify: 'esbuild',
        //     esbuild: {
        //         drop: mode === 'production' ? ['console', 'debugger'] : [],
        //     },
        // },

        build: {
            minify: 'esbuild',
            chunkSizeWarningLimit: 1500,
            // 分包配置 加快首屏加载速度
            rollupOptions: {
                output: {
                    chunkFileNames: (chunkInfo) => {
                        const facadeModuleId = chunkInfo.facadeModuleId
                            ? chunkInfo.facadeModuleId.split('/')
                            : []
                        const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
                        return `js/${fileName}/[name].[hash].js`
                    },
                },
            },
        },
        // 打包去除输出
        esbuild: {
            drop: mode === 'production' ? ['console', 'debugger'] : [],
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
                    // hack 黑客进来 修改ant的默认样式 达到主题定制的目的 然后全局也能用自己定义的变量
                    modifyVars: {
                        hack: `true; @import (reference) "${path.resolve(
                            'src/assets/style/theme.less'
                        )}";`,
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }
})
