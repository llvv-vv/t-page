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
