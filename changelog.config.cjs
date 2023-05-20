/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-15 18:18:53
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:05:27
 * @FilePath: \Base_APP_PC\changelog.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: ['feat', 'fix', 'chore', 'docs', 'refactor', 'style'],
    maxMessageLength: 64,
    minMessageLength: 3,
    scopes: [],
    types: {
        chore: {
            description: '构建过程或辅助工具的变动',
            emoji: '🤖',
            value: 'chore',
        },
        docs: {
            description: '文档（documentation）',
            emoji: '✏️',
            value: 'docs',
        },
        feat: {
            description: '新功能（feature)',
            emoji: '✨',
            value: 'feat',
        },
        fix: {
            description: '修复bug',
            emoji: '🐛',
            value: 'fix',
        },
        refactor: {
            description: '重构（即不是新增功能，也不是修改bug的代码变动）',
            emoji: '💡',
            value: 'refactor',
        },
        release: {
            description: '发行版本',
            emoji: '🏹',
            value: 'release',
        },
        style: {
            description: '格式（不影响代码运行的变动），不是指样式变动',
            emoji: '🎨',
            value: 'style',
        },
    },
}
