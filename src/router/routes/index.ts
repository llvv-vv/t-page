/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:07:40
 * @FilePath: \Base_APP_PC\src\router\routes\index.ts
 * @Description: 注释
 */
import type { route } from 'types/route'
import basicRoutes from './module/basicRoutes'
import screenRoutes from './module/screenRoutes'
import permissionRoutes from './module/permissionRoutes'
// ...permissionRoutes
const routes: Array<route> = [...basicRoutes, ...screenRoutes, ...permissionRoutes]

export default routes
