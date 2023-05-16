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
