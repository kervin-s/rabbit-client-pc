// 用户状态
import {
  MutationTree,
  Module,
  Store as VuexStore,
  CommitOptions,
  ActionTree,
  ActionContext,
  DispatchOptions
} from 'vuex';
import { topCategory } from '@/utils/constants';
import { findAllCategory } from '@/api/category';
import { RootState } from '../index';

/* 类型定义++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
export type CateChildrenType = {
  id?: string;
  name: string;
  picture?: string;
};
export interface CategoryStateType extends CateChildrenType {
  children?: CateChildrenType[];
  open?: boolean;
}
export interface CategoryState {
  list: CategoryStateType[];
}
export interface Mutations<S = CategoryState> {
  setList(state: S, payload: any): void;
  show(state: S, id: number | string): void;
  hide(state: S, id: number | string): void;
}
export type CategoryStore<S = CategoryState> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};
type ActionContextT = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<CategoryState, RootState>, 'commit'>;
export type Actions = {
  getList({ commit }: ActionContextT): void;
};
export type CategoryStoreT<S = CategoryState> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
/* store++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
const state = (): CategoryState => {
  return {
    list: topCategory.map((item) => ({ name: item }))
  };
};
const mutations: MutationTree<CategoryState> & Mutations = {
  // payload 所有的分类集合
  setList(state, payload) {
    state.list = payload;
  },
  // 定义show和hide函数，控制当前分类的二级分类显示和隐藏
  show(state, id) {
    const currCategory = state.list.find((item) => item.id === id);
    (currCategory as CategoryStateType).open = true;
  },
  hide(state, id) {
    const currCategory = state.list.find((item) => item.id === id);
    (currCategory as CategoryStateType).open = false;
  }
};

// 获取分类函数
const actions: Actions = {
  async getList({ commit }) {
    // 获取分类数据
    const data = await findAllCategory();
    // 给每个分类加上控制二级分类显示隐藏的数据
    data.result.forEach((top: any) => {
      top.open = false;
    });
    // 修改分类数据
    commit('setList', data.result);
  }
};

export const store: Module<CategoryState, RootState> = {
  /* TODO: With namespaced option turned on, having problem how to use dispatch with action types...
     But without it, a bigger store might have clashes in namings */
  // namespaced: true,
  state,
  mutations,
  actions
};
