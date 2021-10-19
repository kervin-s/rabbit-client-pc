import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    /* vuex-persistedstate插件来进行持久化，默认是存储在localStorage中 */
    createPersistedstate({
      key: 'rabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
