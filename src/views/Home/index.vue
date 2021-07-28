<template>
  <div class="home">首页</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
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
