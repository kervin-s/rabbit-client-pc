<template>
  <div class="xtx-layout">
    <AppTopnav />
    <AppHeader />
    <!-- 吸顶组件 -->
    <AppSticky />
    <main>
      <!-- 二级路由router view 出口 -->
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/index';
import AppTopnav from '@/components/app-topnav.vue';
import AppHeader from '@/components/app-header/index.vue';
import AppFooter from '@/components/app-footer.vue';
import AppSticky from '@/components/app-sticky.vue';
export default defineComponent({
  name: 'Layout',
  components: { AppTopnav, AppHeader, AppSticky, AppFooter },
  setup() {
    const store = useStore();

    // 触发action函数的执行
    // 如何在setup函数中拿到store实例从而调用它身上的方法
    store.dispatch('getList');
  }
});
</script>
<style scoped lang="less"></style>
