import request from '@/utils/request';
enum Api {
  FIND_ALL_CATEGORY = '/home/category/head'
}
export const findAllCategory = (params = {}): any => {
  return request({ method: 'get', url: Api.FIND_ALL_CATEGORY, params });
};
