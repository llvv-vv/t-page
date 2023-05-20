<template>
    <a-layout class="h-full">
        <HeaderLayout v-model:collapsed="collapsed"></HeaderLayout>
        <a-layout>
            <SiderLayout :collapsed="collapsed"></SiderLayout>
            <ContentLayout></ContentLayout>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup name="layout-index">
import { ref } from 'vue'
import HeaderLayout from './HeaderLayout.vue'
import SiderLayout from './SiderLayout.vue'
import ContentLayout from './ContentLayout.vue'

const collapsed = ref(false)
</script>
<style lang="less" scoped></style>
