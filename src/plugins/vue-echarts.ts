/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:08:11
 * @FilePath: \Base_APP_PC\src\plugins\vue-echarts.ts
 * @Description: 注释
 */
import ECharts from 'vue-echarts'
import type { App } from 'vue'

// 手动引入 ECharts 各模块来减小打包体积
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart, LineChart } from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
} from 'echarts/components'

use([
    PieChart,
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    LineChart,
    TitleComponent,
])

const setupEcharts = (app: App) => {
    app.component('v-chart', ECharts)
}

export { setupEcharts }
