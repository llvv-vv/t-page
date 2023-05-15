import { createApp } from 'vue'
import './style.css'
import { ConfigProvider } from 'ant-design-vue'
import App from './App.vue'
import 'virtual:uno.css'
import 'ant-design-vue/dist/antd.variable.min.css'
// import 'ant-design-vue/dist/antd.less'

ConfigProvider.config({
	theme: {
		primaryColor: '#00ff00',
	},
})

createApp(App).mount('#app')
