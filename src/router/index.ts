/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:07:39
 * @FilePath: \Base_APP_PC\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from 'vue'
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes/index.ts'
import { setupRouterGuard } from './guard/index.ts'

console.log('routes', routes)
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes as RouteRecordRaw[],
    // 禁止路由尾部斜线
    strict: true,
})

setupRouterGuard(router)

const setupRouter = (app: App): void => {
    app.use(router)
}

export { router, setupRouter }
