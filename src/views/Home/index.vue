<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <!-- 左侧分类 -->
    <div class="concontainer">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
    .
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import HomeCategory from './components/home-category.vue';
import HomeBanner from './components/home-banner.vue';
export default defineComponent({
  name: 'Home',
  components: { HomeCategory, HomeBanner },
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data)
    };
  }
});
</script>
<style scoped lang="less">
.home {
  height: 360px;
}
</style>
