<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: llw 943607147@qq.com
 * @LastEditTime: 2023-05-21 17:42:45
 * @FilePath: \Base_APP_PC\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- 这里的宽高是设计稿尺寸 最终决定使用vw方案 弃用scale（px抖动 模糊等原因） -->
    <!-- <VScaleScreen width="1920" height="1080" :boxStyle="{ backgroundColor: '#fff' }"> -->
    <router-view></router-view>
    <!-- </VScaleScreen> -->
</template>

<script setup lang="ts" name="app">
const _a = 1

// import VScaleScreen from 'v-scale-screen'
</script>

<style scoped lang="less"></style>
