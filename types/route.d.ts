/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-16 16:52:54
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:06:19
 * @FilePath: \Base_APP_PC\types\route.d.ts
 * @Description: 注释
 */
import type { RouteLocationNormalized, RawRouteComponent } from 'vue-router'

export interface route extends Partial<RouteLocationNormalized> {
    id?: number
    hidden?: boolean
    redirect?: string
    children?: route[]
    component?: RawRouteComponent
}

// import type { RouteMeta, RouteRecordRaw } from 'vue-router'

// export type route = Omit<RouteRecordRaw, 'meta' | 'children'> & {
// 	id?: number
// 	hidden?: boolean
// 	meta?: RouteMeta
// 	children?: route[]
// }
