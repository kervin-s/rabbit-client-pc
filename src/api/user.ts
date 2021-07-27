import request from '@/utils/request';
export const userAccountLogin = (data = {}): any => {
  const options = { url: '/login', method: 'post', data };
  return request(options);
};
