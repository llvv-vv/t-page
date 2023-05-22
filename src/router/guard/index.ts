/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:08:09
 * @FilePath: \Base_APP_PC\src\router\guard\index.ts
 * @Description: 注释
 */
// 在这里定义导航守卫相关方法
// import { createPermissionGuard } from '@/router/guard/permissionGuard'
// import { AxiosCanceler } from '@/utils/http/axiosCancel'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { storeToRefs } from 'pinia'
import { Router } from 'vue-router'
import { APP } from '../../config'
// import { isBasicRoute } from '../helper/index'
// import { useUserStore } from '@/store/module/user'

// 动态标题守卫
const createTitleGuard = (router: Router) => {
    router.beforeEach((to) => {
        document.title = (to.meta.title as string) || APP.title
    })
}

// 取消上一个页面未完成请求

// const createHttpGuard = (router) => {
//   router.beforeEach(() => {
//     new AxiosCanceler().removeAllPending()
//   })
// }

// 进度条守卫
const createNProgressGuard = (router: Router) => {
    router.beforeEach(() => {
        NProgress.start()
    })
    router.afterEach(() => {
        NProgress.done()
    })
}

// 权限守卫
// const createPermissionGuard = (router: Router) => {
//     router.beforeEach((to, from, next) => {
//         if (isBasicRoute(to)) {
//             next()
//         } else {
//             const userStore = useUserStore()
//             const { getToken } = storeToRefs(userStore)
//             if (getToken.value) {
//                 next()
//             } else {
//                 router.push('/login')
//             }
//         }
//     })
// }

// 设置路由守卫

export function setupRouterGuard(router: Router) {
    // createPermissionGuard(router)
    createTitleGuard(router)
    // createHttpGuard(router)
    createNProgressGuard(router)
}
