/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 19:58:12
 * @FilePath: \Base_APP_PC\src\utils\helper.ts
 * @Description: 注释
 */
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { DESIGN } from '@/config'

// 获取当前屏幕宽度和设计图宽度的比值
const getRatio = () => {
    const { w } = DESIGN
    const { width } = useWindowSize()
    return Number(Math.floor((width.value / w) * 1000) / 1000)
}

// 等比变换数字
const convByRatio = (num: number | string) =>
    computed(() => {
        const ratio = getRatio()
        return Number(num) * ratio
    })

export { convByRatio, getRatio }
