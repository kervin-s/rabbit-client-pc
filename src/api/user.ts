import request from '@/utils/request';

enum Api {
  LOGIN = '/login'
}

/**
 * 帐号登录
 * @param {String} account - 用户名
 * @param {String} password - 密码
 * @returns Promise
 */
export const userAccountLogin = (params = {}): any => {
  return request({ method: 'post', url: Api.LOGIN, params });
};
