<template>
  <div class="login-callback ">

  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'LoginCallback',
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
<style scoped>
</style>
