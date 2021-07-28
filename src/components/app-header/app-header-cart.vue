<template>
  <div><i class="iconfont icon-cart"></i></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AppHeaderCart',
  components: {},
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.cart {
  width: 50px;
  // 加下限制
  position: relative;
  z-index: 600;
}
</style>
