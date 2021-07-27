import axios from 'axios';
import { store } from '@/store';
import router from '@/router';

// 备用地址:
// export const baseURL = 'https://apipc-xiaotuxian-front.itheima.net/'

const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const { profile } = store.state.user;
    if (profile.token) {
      // 设置token
      config.headers.Authorization = `Bearer ${profile.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    // 401 状态码，进入该函数
    if (err.response && err.response.status === 401) {
      // 1. 清空无效用户信息
      // 2. 跳转到登录页
      // 3. 跳转需要传参（当前路由地址）给登录页码
      store.commit('user/setUser', {});
      // 当前路由地址
      // 组件里头：`/user?a=10` $route.path === /user  $route.fullPath === /user?a=10
      // js模块中：router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute 是ref响应式数据
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
      // encodeURIComponent 转换uri编码，防止解析地址出问题
      router.push('/login?redirectUrl=' + fullPath);
    }
    return Promise.reject(err);
  }
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (param: any) => {
  const { url, method, data } = param;
  return new Promise((resolve, reject) => {
    const res = instance({
      url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    })
      .then((res) => {
        resolve(res);
      })
      .catch((e) => reject(e));
  });
};
