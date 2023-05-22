/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:07:55
 * @FilePath: \Base_APP_PC\src\router\routes\module\basicRoutes.ts
 * @Description: 注释
 */
import type { route } from 'types/route'

const basicRoutes: Array<route> = [
    {
        path: '/',
        name: 'root',
        redirect: '/backstage',
        meta: {
            title: 'root',
        },
        children: [
            {
                path: '/login',
                name: 'login',
                meta: {
                    title: '登录',
                },
                component: () => import('@/views/login/index.vue'),
            },
            {
                path: '/:path(.*)*',
                name: 'PageNotFound',
                component: () => import('@/views/pageNotFound/pageNotFound.vue'),
                hidden: true,
                meta: {
                    title: '404 - 页面未找到',
                },
            },
        ],
    },
]

export default basicRoutes
