/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 19:58:59
 * @FilePath: \Base_APP_PC\uno.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, presetWind, presetAttributify, presetIcons } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    presets: [
        presetIcons({
            collections: {
                carbon: () => import('@iconify-json/ic').then((i) => i.icons as any),
            },
        }),
        presetWind(),
        presetAttributify(),
        presetRemToPx({ baseFontSize: 4 }),
    ],
    rules: [
        // ['w-1920', { width: '1920px' }],
        // ['min-h-1080', { minHeight: '1080px' }],
        // ['min-h-768PX', { minHeight: '768px' }],
        ['bg-blue-tb-row', { 'background-color': '#f5fafd' }],
        ['c-primary', { 'background-color': '#2d69ec' }],
        ['c-warning', { 'background-color': '#ffb825' }],
        ['c-success', { 'background-color': '#2dcede' }],
        ['c-error', { 'background-color': '#f76359' }],
        ['c-text', { color: '#363a44' }],
        ['c-text-primary', { color: '#2d69ec' }],
        ['c-text-secondary', { color: '#696b73' }],
    ],
})
