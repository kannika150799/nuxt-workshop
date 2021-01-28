<template>
  <div>
    <div>
      <a-button class="Facebook-signIn" @click="FaceBook">
        Facebook Sign In
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      setEmail: 'user/setEmail'
    }),
    async FaceBook () {
      try {
        const user = await this.$fire.auth.signInWithPopup(new this.$fireModule.auth.FacebookAuthProvider())
        this.setEmail(user.user.email)
        console.log(user, 'Finished Facebook login')
        this.$router.push('/photos')
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>

<style>
.Facebook-signIn {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
}
</style>
