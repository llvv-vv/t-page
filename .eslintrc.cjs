/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: llw 943607147@qq.com
 * @LastEditTime: 2023-05-21 17:41:55
 * @FilePath: \Base_APP_PC\.eslintrc.cjs
 * @Description: 注释
 */
module.exports = {
    // 环境:
    env: {
        // 浏览器
        browser: true,
        // 最新es语法
        es2021: true,
        // node环境
        node: true,
    },
    // 扩展的eslint规范语法，可以被继承的规则
    // 字符串数组：每个配置继承它前面的配置
    // 分别是：
    // eslint-plugin-vue提供的
    // eslint-config-airbnb-base提供的
    // eslint-config-prettier提供的
    // 前缀 eslint-config-, 可省略
    extends: ['plugin:vue/vue3-strongly-recommended', 'airbnb-base', 'prettier'],
    // eslint 会对我们的代码进行检验
    // parser的作用是将我们写的代码转换为ESTree（AST）
    // ESLint会对ESTree进行校验
    parser: 'vue-eslint-parser',
    // 解析器的配置项
    parserOptions: {
        // es的版本号，或者年份都可以
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        // 源码类型 默认是script，es模块用module
        sourceType: 'module',
        // 额外的语言类型
        ecmaFeatures: {
            tsx: true,
            jsx: true,
        },
    },
    // 全局自定义的宏，这样在源文件中使用全局变量就不会报错或者警告
    globals: {
        NProgress: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefault: 'readonly',
    },
    // 插件
    // 前缀 eslint-plugin-, 可省略
    // vue官方提供了一个ESLint插件 eslint-plugin-vue，它提供了parser和rules
    // parser为 vue-eslint-parser，放在上面的parsr字段，rules放在extends字段里，选择合适的规则
    plugins: ['vue', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.ts', '.d.ts', '.vue'],
            },
        },
        // 设置项目内的别名
        // 'import/reslover': {
        // alias: {},
        // },
        // 允许的扩展名
        // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
    },
    // 自定义规则，覆盖上面extends继承的第三方库的规则，根据组内成员灵活定义
    rules: {
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'no-param-reassing': 0,
        'vue/multi-word-commponent-names': 0,
        'vue/attribute-hyphenation': 0,
        'vue/v-on-event-hyphenation': 0,
        'no-plusplus': 0,
        // 这个是解决不写后缀报错的问题
        'import/extensions': 0,
        // 只导出一个变量的时候 eslint建议默认导出 我第一个反对
        'import/prefer-default-export': 0,
        'vue/multi-word-component-names': 0,
        'no-console': 0,
        'vue/component-definition-name-casing': 0,
        'no-debugger': 0,
        // 以 _ 开头的变量不会报错
        'no-unused-vars': [
            'error',
            { varsIgnorePattern: '^_', vars: 'all', args: 'all', ignoreRestSiblings: false },
        ],
        'no-underscore-dangle': 0,
    },
}
