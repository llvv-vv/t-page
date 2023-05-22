<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 15:22:03
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:08:31
 * @FilePath: \Base_APP_PC\src\components\layout\HeaderLayout.vue
 * @Description: 注释
-->
<template>
    <a-layout-header flex items-center justify-between class="c-primary! p-12PX!">
        <div flex items-center>
            <div flex items-center :class="[collapsed ? 'w-68PX' : 'w-188PX']">
                <div class="text-48PX i-ic-baseline-9mp"></div>
                <span v-if="!collapsed" class="color-white text-24PX m-l-16PX">中台</span>
            </div>
            <a class="shadow-none text-white text-16PX" @click="toggleCollapsed">
                <MenuUnfoldOutlined v-if="data" />
                <MenuFoldOutlined v-else />
            </a>
        </div>
        <div flex items-center>
            <div class="i-ic-sharp-notifications text-24PX m-r-8PX text-white"></div>
            <a-dropdown>
                <a
                    flex
                    items-center
                    justify-center
                    class="ant-dropdown-link c-text-primary bg-white h-32PX leading-32PX text-16PX p-l-8PX rounded-30PX min-w-100PX"
                    @click.prevent
                >
                    <loading-outlined v-if="loading" />
                    <div flex items-center justify-center v-else>
                        镇海区
                        <div class="i-ic-outline-arrow-drop-down"></div>
                    </div>
                </a>
                <template #overlay>
                    <a-menu @click="handleLoading">
                        <a-menu-item>1st menu item</a-menu-item>
                        <a-menu-item>2nd menu item</a-menu-item>
                        <a-sub-menu key="sub1" title="sub menu">
                            <a-menu-item>3rd menu item</a-menu-item>
                            <a-menu-item>4th menu item</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub2" title="disabled sub menu" disabled>
                            <a-menu-item>5d menu item</a-menu-item>
                            <a-menu-item>6th menu item</a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </template>
            </a-dropdown>
            <div class="i-ic-outline-power-settings-new text-24PX m-l-8PX text-white"></div>
        </div>
    </a-layout-header>
</template>
<script lang="ts" setup name="header-layout">
import { ref } from 'vue'
import { LoadingOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { useVModel } from '@vueuse/core'

const props = defineProps({
    collapsed: Boolean,
})
const emit = defineEmits(['update:collapsed'])
const data = useVModel(props, 'collapsed', emit)
const toggleCollapsed = () => {
    data.value = !data.value
}

const loading = ref(false)
const handleLoading = () => {
    loading.value = true
}
</script>
<style lang="less" scoped></style>
