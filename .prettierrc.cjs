/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-15 14:30:53
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:05:44
 * @FilePath: \Base_APP_PC\.prettierrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    // 一行最多多少字符
    printWidth: 100,
    // 使用4个空格缩进
    tabWidth: 4,
    // 使用tab缩进，不使用空格
    useTabs: false,
    // 行尾需要分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 对象的key仅在必要时使用引号
    quoteProps: 'as-needed',
    // jsx不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 尾随逗号
    trailingComma: 'es5',
    // 大括号内的收尾需要空格
    bracketSpacing: true,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的@prettier
    requirePragma: false,
    // 不需要自动在文件开头插入@prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'always',
    // 根据显示样式决定html要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用lf
    endOfLine: 'lf',
}
