/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-16 16:52:54
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 19:58:21
 * @FilePath: \Base_APP_PC\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import 'virtual:uno.css'
import 'ant-design-vue/dist/antd.less'
import '@/config'
import { setupRouter } from '@/router'
import { setupEcharts } from '@/plugins/vue-echarts'

const app = createApp(App)
setupRouter(app)
setupEcharts(app)
app.mount('#app')
