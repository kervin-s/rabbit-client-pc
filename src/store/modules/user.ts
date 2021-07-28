// 用户状态
import { MutationTree, Module, Store as VuexStore, CommitOptions } from 'vuex';
import { RootState } from '../index';

/* user子模块stateのinteface*/
export interface UserState {
  profile: {
    id?: string;
    avatar?: string;
    nickname?: string;
    account?: string;
    mobile?: string;
    token?: string;
  };
  redirectUrl: string;
}

/* 用户子模块Mutationsの类型声明*/
export interface Mutations<S = UserState> {
  setUser(state: S, payload: any): void;
  setRedirectUrl(state: S, url: string): void;
}

export type UserStore<S = UserState> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

const state = (): UserState => {
  return {
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
  /* TODO: With namespaced option turned on, having problem how to use dispatch with action types...
   But without it, a bigger store might have clashes in namings*/
  // namespaced: true,
  state,
  mutations
};
