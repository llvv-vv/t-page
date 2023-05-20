<template>
    <a-layout-content class="overflow-auto rounded-4PX p-12PX box-border">
        <div class="bg-amber overflow-auto p-12PX h-full box-border">
            <router-view></router-view>
        </div>
    </a-layout-content>
</template>
<script lang="ts" setup name="header-layout"></script>
<style lang="less" scoped></style>
