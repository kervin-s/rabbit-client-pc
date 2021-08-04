<template>
  <div class="cart">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-ts-cart" />
    </svg>
  </div>
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
  .icon {
    width: 50px;
    height: 50px;
  }
}
</style>
