<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <RouterLink to="/member">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-db_ora_user" />
              </svg>
              {{ profile.account }}
            </RouterLink>
          </li>
          <li><a @click="logout()" href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-PHONECALL" />
            </svg>
            手机版
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store/index';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'AppTopnav',
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    // 使用vuex中的state需要设置计算属性，否则不是响应式
    const profile = computed(() => {
      return store.state.user.profile;
    });

    // 退出登录
    // 1. 清空用户信息
    // 2. 清空购物车 todo
    // 3. 跳转登录
    const logout = () => {
      store.commit('setUser', {});
      // todo 清空购物车
      // store.commit('cart/setCart', [])
      router.push('/login');
    };
    return { profile, logout };
  }
});
</script>
<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        svg.icon {
          width: 20px;
          height: 20px;
          margin-right: 2px;
          vertical-align: middle;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
