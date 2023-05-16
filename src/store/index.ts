import { createPinia } from 'pinia'
import type { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const store = createPinia().use(piniaPluginPersistedstate)

export function setupStore(app: App) {
    app.use(store)
}
