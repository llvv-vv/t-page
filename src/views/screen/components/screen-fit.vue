<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:06:44
 * @FilePath: \Base_APP_PC\src\views\screen\components\screen-fit.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div :class="[ovh ? 'overflow-hidden' : 'overflow-auto', 'h-100%']">
        <div
            ref="fit"
            :class="[`h-${height}`, `bg-black`, 'overflow-hidden']"
            :style="{
                minWidth: `${minWidth}px`,
                minHeight: `${minHeight}px`,
            }"
        >
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup name="screen-Fit">
import { Ref, onMounted, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

// 宽高指设计图宽高 小于iPadmini尺寸就不再缩放了
// 再小就认为它是移动设备 为什么是iPadmini呢 因为我喜欢
defineProps({
    width: {
        type: [Number, String],
        default: 1920,
    },
    height: {
        type: [Number, String],
        default: 1080,
    },
    minWidth: {
        type: [Number, String],
        default: 768,
    },
    minHeight: {
        type: [Number, String],
        default: 432,
    },
})
const fit: Ref<HTMLElement | null> = ref(null)
const ovh = ref(false)
const setMarginTop = () => {
    const height = Number(getComputedStyle(fit.value as HTMLElement).height.replace('px', ''))
    if (window.screen.height > height) {
        fit.value!.style.marginTop = `${(window.screen.height - height) / 2}px`
        ovh.value = false
    } else {
        fit.value!.style.marginTop = `0px`
        // ovh.value = true
    }
}

onMounted(() => {
    window.addEventListener('resize', useDebounceFn(setMarginTop, 300))
    setMarginTop()
})
</script>
<style lang="less" scoped>
.h-1080 {
    height: 1080px;
}
</style>
