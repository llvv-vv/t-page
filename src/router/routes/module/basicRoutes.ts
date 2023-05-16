import type { route } from 'types/route'

const basicRoutes: Array<route> = [
    {
        path: '/',
        name: 'ROOT',
        redirect: '/backStage/home',
        meta: {
            title: 'ROOT',
        },
        children: [
            {
                path: '/backStage/home',
                name: 'home',
                meta: {
                    title: '首页',
                },
                component: () => import('@/views/backstage/home/index.vue'),
            },
            {
                path: '/login',
                name: 'login',
                meta: {
                    title: '登录',
                },
                component: () => import('@/views/login/index.vue'),
            },
        ],
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/login/index.vue'),
    //   meta: {
    //     title: '登录'
    //   }
    // },
    // {
    //   path: '/:path(.*)*',
    //   name: 'PageNotFound',
    //   component: () => import('@/views/error/pageNotFound.vue'),
    //   hidden: true,
    //   meta: {
    //     title: '404 - Page Not Found'
    //   }
    // }
]

export default basicRoutes
