<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 15:22:51
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 19:37:15
 * @FilePath: \Base_APP_PC\src\components\layout\SiderLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-layout-sider :collapsed="collapsed" class="bg-white!">
        <a-menu
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
        >
            <a-menu-item key="1">
                <template #icon>
                    <PieChartOutlined />
                </template>
                <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <template #icon>
                    <DesktopOutlined />
                </template>
                <span>Option 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <template #icon>
                    <InboxOutlined />
                </template>
                <span>Option 3</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #icon>
                    <MailOutlined />
                </template>
                <template #title>Navigation One</template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #title>Navigation Two</template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>
<script lang="ts" setup name="header-layout">
import { reactive } from 'vue'
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from '@ant-design/icons-vue'

defineProps({
    collapsed: Boolean,
})

const state = reactive({
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
})

// watch(
//     () => state.openKeys,
//     (_val, oldVal) => {
//         state.preOpenKeys = oldVal
//     }
// )
</script>
<style lang="less" scoped></style>
