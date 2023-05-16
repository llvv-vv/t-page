import backLayout from '@c/backStageLayout/backLayout.vue'
import type { route } from 'types/route'

const permissionRoutes: Array<route> = [
	{
		path: '/backstage',
		name: 'backstage',
		component: backLayout,
		redirect: '/backstage/data',
		meta: {
			title: 'Admin',
		},
		children: [
			// {
			//   path: 'home',
			//   name: 'home',
			//   component: () => import('@/views/backstage/home/index.vue'),
			//   meta: {
			//     title: '首页',
			//     icon: 'home-outlined'
			//   }
			// },
			{
				path: 'data',
				name: 'data',
				component: () => import('@/views/backstage/data/index.vue'),
				meta: {
					title: '应用使用统计',
					icon: 'stock-outlined',
				},
			},
			{
				path: 'device',
				name: 'device',
				component: () => import('@/views/backstage/device/index.vue'),
				redirect: 'devicelist',
				meta: {
					title: '实例管理',
					icon: 'cloud-server-outlined',
				},
				children: [
					{
						path: 'devicelist',
						name: 'devicelist',
						component: () => import('@/views/backstage/device/list/index.vue'),
						meta: {
							title: '实例管理列表',
						},
						hidden: false,
					},
					{
						path: 'history',
						name: 'history',
						component: () => import('@/views/backstage/device/history/index.vue'),
						meta: {
							title: '历史使用记录',
						},
						hidden: true,
					},
					{
						path: 'instance',
						name: 'instance',
						component: () => import('@/views/backstage/device/instance/index.vue'),
						meta: {
							title: '实例保有量',
						},
						hidden: false,
					},
				],
			},
			{
				path: 'application',
				name: 'application',
				component: () => import('@/views/backstage/application/index.vue'),
				redirect: 'applist',
				meta: {
					title: '应用管理',
					icon: 'appstore-outlined',
				},
				children: [
					{
						path: 'applist',
						name: 'applist',
						component: () => import('@/views/backstage/application/list/index.vue'),
						meta: {
							title: '应用管理列表',
						},
						hidden: false,
					},
					{
						path: 'apphistory',
						name: 'apphistory',
						component: () => import('@/views/backstage/application/history/index.vue'),
						meta: {
							title: '上传记录',
						},
						hidden: true,
					},
					{
						path: 'milestone',
						name: 'milestone',
						component: () =>
							import('@/views/backstage/application/milestone/index.vue'),
						meta: {
							title: '应用节点详情',
						},
						hidden: true,
					},
					{
						path: 'hotupdate',
						name: 'hotupdate',
						component: () =>
							import('@/views/backstage/application/hotupdate/index.vue'),
						meta: {
							title: '热更新管理',
						},
						hidden: false,
					},
				],
			},
			{
				path: 'order',
				name: 'order',
				component: () => import('@/views/backstage/order/index.vue'),
				redirect: 'orderlist',
				meta: {
					title: '订单管理',
					icon: 'wallet-outlined',
				},
				children: [
					{
						path: 'orderlist',
						name: 'orderlist',
						component: () => import('@/views/backstage/order/list/index.vue'),
						meta: {
							title: '订单管理列表',
						},
						hidden: false,
					},
					{
						path: 'orderdetail',
						name: 'orderdetail',
						component: () => import('@/views/backstage/order/detail/index.vue'),
						meta: {
							title: '订单详情',
						},
						hidden: true,
					},
				],
			},
			{
				path: 'user',
				name: 'user',
				component: () => import('@/views/backstage/user/index.vue'),
				meta: {
					title: '客户管理',
					icon: 'smile-outlined',
				},
				children: [
					{
						path: 'account',
						name: 'account',
						component: () => import('@/views/backstage/user/account/index.vue'),
						meta: {
							title: '客户管理列表',
						},
						hidden: false,
					},
				],
			},
		],
	},
]

export default permissionRoutes
