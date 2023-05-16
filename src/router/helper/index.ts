// import type { route } from '@/typing/route'
// import { RouteLocationNormalized } from 'vue-router'
// import basicRoutes from '../routes/module/basicRoutes'

// export const isBasicRoute = (route: RouteLocationNormalized) => {
// 	if (route.matched && route.matched.length > 0) {
// 		return basicRoutes.map((r) => r.path).includes(route.path)
// 	}
// 	return false
// }

// export const filterHiddenRoutes = (oldRoutes: route[]) => {
// 	const newRoutes: route[] = oldRoutes.filter((v) => {
// 		if (v.children && v.children.length > 0) {
// 			v.children = filterHiddenRoutes(v.children)
// 		}
// 		if (!v.hidden) {
// 			return v
// 		}
// 	})
// 	return newRoutes
// }
