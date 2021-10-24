<template>
  <div class="login">

  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Login',
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
