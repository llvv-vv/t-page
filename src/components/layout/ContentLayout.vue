<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 15:22:52
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:08:39
 * @FilePath: \Base_APP_PC\src\components\layout\ContentLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-layout-content class="overflow-auto rounded-4PX p-12PX box-border">
        <div class="bg-amber overflow-auto p-12PX h-full box-border">
            <router-view></router-view>
        </div>
    </a-layout-content>
</template>
<script lang="ts" setup name="header-layout"></script>
<style lang="less" scoped></style>
