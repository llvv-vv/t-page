<template>
    <screenFit>
        <v-chart autoresize :option="option" class="h-full w-full"></v-chart>
    </screenFit>
</template>
<script lang="ts" setup name="screen-home">
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
