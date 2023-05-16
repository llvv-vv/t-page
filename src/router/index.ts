import type { App } from 'vue'
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes/index.ts'
// import { setupRouterGuard } from './guard/index.ts'

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes as RouteRecordRaw[],
	// 禁止路由尾部斜线
	strict: true,
})

// setupRouterGuard(router)

const setupRouter = (app: App): void => {
	app.use(router)
}

export { router, setupRouter }
