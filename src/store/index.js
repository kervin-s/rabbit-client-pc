/*
 * @Description: vuex store
 * @Author: kervin
 * @Date: 2021-10-24 16:37:25
 * @FilePath: \vite-project\src\store\index.js
 */
import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedstate({
      key: 'rabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
