<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:20:38
 * @FilePath: \Base_APP_PC\src\App.vue
 * @Description: 注释
-->
<template>
    <!-- 这里的宽高是设计稿尺寸 最终决定使用vw方案 弃用scale（px抖动 模糊等原因） -->
    <!-- <VScaleScreen width="1920" height="1080" :boxStyle="{ backgroundColor: '#fff' }"> -->
    <router-view></router-view>
    <!-- </VScaleScreen> -->
</template>

<script setup lang="ts" name="app">
// import VScaleScreen from 'v-scale-screen'
</script>

<style scoped lang="less"></style>
