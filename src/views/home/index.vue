<template>
  <div class="home">
main
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Home',
  components: {},
  props: {},
  setup (props) {
    const data = reactive({

    })
    return {
      ...toRefs(data)
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  height: 500px;
}
</style>
