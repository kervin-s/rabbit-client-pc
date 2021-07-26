import { InjectionKey } from 'vue';
import { createStore, createLogger, Store } from 'vuex';
import { UserState, store as user } from './modules/user';
import cart from './modules/cart';
// 使用插件让在vuex中管理的状态数据自动同时存储在本地免去自己存储的环节
import createPersistedstate from 'vuex-persistedstate';

export const key: InjectionKey<Store<RootState>> = Symbol('vue-store');
export interface RootState {
  user: UserState;
}
// export type Store = AppStore<Pick<RootState, 'user'>>;
export const store = createStore({
  modules: {
    user,
    cart
  },
  plugins: [
    createPersistedstate({
      key: 'rabbit-client-pc-store',
      paths: ['user', 'cart']
    }),
    /* 说明❓：配置好这个log插件之后，我们每次触发action函数和mutation函数都可以在控制台打印出当前本地提交的记录详细信息，包括`名称`  `参数`  `修改前后的state数据` */
    createLogger()
  ]
});
export default store;
