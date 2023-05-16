import { ConfigProvider } from 'ant-design-vue'

const light = {
	primaryColor: '#ff0000',
}

const THEME = {
	light,
}

ConfigProvider.config({
	theme: THEME.light,
})

export { THEME }
