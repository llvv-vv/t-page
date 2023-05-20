/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-15 18:13:29
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:06:13
 * @FilePath: \Base_APP_PC\.commitlintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    rules: {
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 72],
        'scope-case': [2, 'always', 'lower-case'],
        // "scope-empty": [2, "never"],
        'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能（feature
                'style', // 格式（不影响代码运行的变动）
                'docs', // 文档（documentation）
                'chore', // 构建过程或辅助工具的变动
                'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
                'test', // 增加测试
                'fix', // 修复bug
                'pref', // 优化相关，比如提升性能、体验。
                'revert', // 回滚到上一个版本
            ],
        ],
    },
}
