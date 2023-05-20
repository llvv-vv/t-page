/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-16 16:52:54
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:06:14
 * @FilePath: \Base_APP_PC\types\env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'

    const vueComponent: DefineComponent<{}, {}, any>
    export default vueComponent
}
