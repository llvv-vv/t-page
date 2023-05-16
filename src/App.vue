<template>
    <a-button type="primary">primary</a-button>
    <a-button type="danger" class="m-l-8">danger</a-button>
    <v-chart autoresize style="width: 600px; height: 600px" :option="option"></v-chart>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const option = reactive({
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '5%',
        left: 'center',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
        },
    ],
})
</script>

<style scoped lang="less"></style>
