/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:07:46
 * @FilePath: \Base_APP_PC\src\router\routes\module\screenRoutes.ts
 * @Description: 注释
 */
import type { route } from 'types/route'

const basicRoutes: Array<route> = [
    {
        path: '/screen',
        name: 'screen',
        redirect: '/screen/home',
        meta: {
            title: 'screen',
        },
        children: [
            {
                path: '/screen/home',
                name: 'screen-home',
                meta: {
                    title: '首页',
                },
                component: () => import('@/views/screen/home/index.vue'),
            },
        ],
    },
]

export default basicRoutes
