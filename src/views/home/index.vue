<template>
  <div class="home">
 home
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
<style scoped>
</style>
