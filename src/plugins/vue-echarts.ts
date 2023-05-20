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
