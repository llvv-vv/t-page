/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-16 16:52:54
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:06:14
 * @FilePath: \Base_APP_PC\types\env.d.ts
 * @Description: 注释
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'

    const vueComponent: DefineComponent<{}, {}, any>
    export default vueComponent
}
