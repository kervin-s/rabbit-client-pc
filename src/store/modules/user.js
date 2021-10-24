/*
 * @Description: vux user  module
 * @Author: kervin
 * @Date: 2021-10-24 16:42:53
 * @FilePath: \vite-project\src\store\modules\user.js
 */
// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    /**
     * @description: 设置用户信息
     * @param {*} state
     * @param {*} payload
     * @return {*}
     */
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
