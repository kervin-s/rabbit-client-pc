<template>
  <div class="xtx-layout">
    <AppTopnav />
    <AppHeader />

    <main>
      <!-- 二级路由router view 出口 -->
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from '@/store/index';
import AppTopnav from '@/components/app-topnav.vue';
import AppHeader from '@/components/app-header/index.vue';
import AppFooter from '@/components/app-footer.vue';
export default defineComponent({
  name: 'Layout',
  components: { AppTopnav, AppHeader, AppFooter },
  setup() {
    const store = useStore();
    store.dispatch('getList', undefined);
  }
});
</script>
<style scoped lang="less"></style>
