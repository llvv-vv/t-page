import { createApp } from 'vue'
import App from '@/App.vue'
import 'virtual:uno.css'
import 'ant-design-vue/dist/antd.variable.min.css'
// import 'ant-design-vue/dist/antd.less'
import { setupRouter } from '@/router'
import { setupEcharts } from '@/plugins/vue-echarts'
import '@/config'

const app = createApp(App)
setupRouter(app)
setupEcharts(app)
app.mount('#app')
