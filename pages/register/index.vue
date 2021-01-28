<template>
  <div class="cantanner-pageSignUp">
    <userRegister />
  </div>
</template>

<script>
import userRegister from '~/components/userRegister.vue'
export default {
  components: {
    userRegister
  }

}
</script>

<style scoped>
.cantanner-pageSignUp {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
