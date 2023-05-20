/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-16 16:52:54
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:07:50
 * @FilePath: \Base_APP_PC\src\router\routes\module\permissionRoutes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '@c/layout/Layout.vue'
import type { route } from 'types/route'

const permissionRoutes: Array<route> = [
    {
        path: '/backstage',
        name: 'backstage',
        component: Layout,
        redirect: '/backstage/home',
        meta: {
            title: 'home',
        },
        children: [
            {
                path: 'home',
                name: 'backstage-home',
                component: () => import('@/views/backstage/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'home-outlined',
                },
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import('@/views/backstage/menu/index.vue'),
                meta: {
                    title: '应用使用统计',
                    icon: 'stock-outlined',
                },
            },
            // {
            //     path: 'device',
            //     name: 'device',
            //     component: () => import('@/views/backstage/device/index.vue'),
            //     redirect: 'devicelist',
            //     meta: {
            //         title: '实例管理',
            //         icon: 'cloud-server-outlined',
            //     },
            //     children: [
            //         {
            //             path: 'devicelist',
            //             name: 'devicelist',
            //             component: () => import('@/views/backstage/device/list/index.vue'),
            //             meta: {
            //                 title: '实例管理列表',
            //             },
            //             hidden: false,
            //         },
            //         {
            //             path: 'history',
            //             name: 'history',
            //             component: () => import('@/views/backstage/device/history/index.vue'),
            //             meta: {
            //                 title: '历史使用记录',
            //             },
            //             hidden: true,
            //         },
            //         {
            //             path: 'instance',
            //             name: 'instance',
            //             component: () => import('@/views/backstage/device/instance/index.vue'),
            //             meta: {
            //                 title: '实例保有量',
            //             },
            //             hidden: false,
            //         },
            //     ],
            // },
        ],
    },
]

export default permissionRoutes
