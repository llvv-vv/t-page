import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { DESIGN } from '@/config'

const getRatio = () => {
    const { w } = DESIGN
    const { width } = useWindowSize()
    return Number((width.value / w).toFixed(5))
}

// const convByRatio = (num: number) => {
//     const ratio = getRatio()
//     console.log('ratio', ratio)
//     return num * ratio
// }

const convByRatio = (num: number | string) =>
    computed(() => {
        const { w } = DESIGN
        const { width } = useWindowSize()
        const ratio = Number(Math.floor((width.value / w) * 1000) / 1000)
        return Number(num) * ratio
    })

export { convByRatio, getRatio }
