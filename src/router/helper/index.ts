/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-16 16:52:54
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:08:00
 * @FilePath: \Base_APP_PC\src\router\helper\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
