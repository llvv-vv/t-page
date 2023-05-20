<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:06:35
 * @FilePath: \Base_APP_PC\src\views\screen\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <screenFit>
        <v-chart autoresize :option="option" class="h-full w-full"></v-chart>
    </screenFit>
</template>
<script setup lang="ts" name="screen-home">
import { reactive } from 'vue'
import { convByRatio } from '@/utils/helper'
import screenFit from '../components/screen-fit.vue'

const option = reactive({
    title: { text: 'Column Chart' },
    tooltip: {},
    xAxis: {
        axisLabel: {
            show: true,
            fontSize: convByRatio(20).value,
            style: {},
        },
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
})
</script>
<style lang="less" scoped></style>
