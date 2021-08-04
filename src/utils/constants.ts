/*
 * @FilePath: \rabbit-client-pc\src\utils\constants.ts
 * @Description: 静态常量枚举
 * @Author: kervin
 * @Date: 2021-08-02 15:55:06
 * @LastEditTime: 2021-08-04 15:11:01
 * @LastEditors: kervin
 */
export const topCategory: string[] = [
  '居家',
  '美食',
  '服饰',
  '母婴',
  '个护',
  '严选',
  '数码',
  '运动',
  '杂货'
];
// 订单状态
export const orderStatus = [
  { name: 'all', label: '全部订单' },
  { name: 'unpay', label: '待付款' },
  { name: 'deliver', label: '待发货' },
  { name: 'receive', label: '待收货' },
  { name: 'comment', label: '待评价' },
  { name: 'complete', label: '已完成' },
  { name: 'cancel', label: '已取消' }
];
export const cancelReason: string[] = [
  '配送信息有误',
  '商品买错了',
  '重复下单/误下单',
  '忘记使用优惠券、兔币等',
  '其他渠道价格更低',
  '不想买了'
];
