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
