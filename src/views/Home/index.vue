<template>
  <div>home</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: '',
  components: {},
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data)
    };
  }
});
</script>
<style scoped lang="less"></style>
