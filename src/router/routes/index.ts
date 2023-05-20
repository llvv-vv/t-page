import type { route } from 'types/route'
import basicRoutes from './module/basicRoutes'
import screenRoutes from './module/screenRoutes'
// import permissionRoutes from './module/permissionRoutes'
// ...permissionRoutes
const routes: Array<route> = [...basicRoutes, ...screenRoutes]

export default routes
