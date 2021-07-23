// 用户状态
export default {
  namespaced: true,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  state: () => ({
    profile: {
      id: '',
      avatar: '',
      nickname: '',
      account: '',
      mobile: '',
      token: ''
    }
  })
};
