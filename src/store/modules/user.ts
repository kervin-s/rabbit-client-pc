// 用户状态
import { MutationTree, Module } from 'vuex';
import { RootState } from '../index';

/* user子模块stateのinteface*/
export interface UserState {
  profile: {
    id: string;
    avatar: string;
    nickname: string;
    account: string;
    mobile: string;
    token: string;
  };
  redirectUrl: string;
}

/* 用户子模块Mutationsの类型声明*/
export interface Mutations<S = UserState> {
  setUser(state: S, payload: any): void;
  setRedirectUrl(state: S, url: string): void;
}

const state: UserState = {
  // 用户信息
  profile: {
    id: '',
    avatar: '',
    nickname: '',
    account: '',
    mobile: '',
    token: ''
  },
  // 登录后回跳路径
  redirectUrl: '/'
};
const mutations: MutationTree<UserState> & Mutations = {
  // 修改用户信息，payload就是用户信息对象
  setUser(state, payload) {
    state.profile = payload;
  },
  // 修改回跳地址
  setRedirectUrl(state, url) {
    state.redirectUrl = url;
  }
};

// 用户模块
export const store: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations
};
