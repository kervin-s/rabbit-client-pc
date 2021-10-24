<template>
  <AppTopnav/>
  <AppHeader/>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
 <AppFooter/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'Layout',
  components: {
    AppTopnav: defineAsyncComponent(() => import('@/components/app-topnav.vue')),
    AppHeader: defineAsyncComponent(() => import('@/components/app-header.vue')),
    AppFooter: defineAsyncComponent(() => import('@/components/app-footer.vue'))
  }
}
</script>

<style scoped lang="less"></style>
