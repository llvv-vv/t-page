import type { route } from 'types/route'

const basicRoutes: Array<route> = [
    {
        path: '/',
        name: 'ROOT',
        redirect: '/screen',
        meta: {
            title: 'ROOT',
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
