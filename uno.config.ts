import { defineConfig, presetWind, presetAttributify } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    presets: [presetWind(), presetAttributify(), presetRemToPx({ baseFontSize: 4 })],
    rules: [
        ['w-1920', { width: '1920px' }],
        ['h-1080', { height: '1080px' }],
    ],
})
