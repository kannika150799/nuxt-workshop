<template>
  <div class="cantanner-pageLogIn">
    <singin />
  </div>
</template>

<script>
import Singin from '~/components/singin.vue'
export default {
  components: {
    Singin
  }
}
</script>

<style scoped>
.cantanner-pageLogIn {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
