/*
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:07:32
 * @FilePath: \Base_APP_PC\src\store\module\user.ts
 * @Description: 注释
 */
import { defineStore } from 'pinia'
// import { login } from '@/api/login'
// import {router} from '@/router'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: '',
        userInfo: '',
    }),
    getters: {
        getToken: (state) => state.token,
        getUserInfo: (state) => state.userInfo,
    },
    actions: {
        async login(form: any) {
            console.log('form', form)
            // const { token, username } = await login(form)
            // this.token = token
            // this.username = username
            // router.push('/backStage/data')
            // await this.getUserInfo(form)
        },
        // async getUserInfo(form: any) {
        //   const data = await info(form)
        //   this.info = data
        //   // Object.assign(this.info, data)
        // },
        async logout() {
            // window.localStorage.clear()
            // window.sessionStorage.clear()
            // this.$reset()
            // router.push('/login')
        },
    },
    persist: {
        key: 'hh-user-store',
        storage: window.localStorage,
    },
})
