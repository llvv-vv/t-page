/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-16 16:57:16
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:07:15
 * @FilePath: \Base_APP_PC\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const store = createPinia().use(piniaPluginPersistedstate)

export function setupStore(app: App) {
    app.use(store)
}
