<template>
  <div class="contanner-signIn">
    <form class="form-signIn">
      <h2 class="header-signIn">
        Sign in
      </h2>
      <div>
        <label for="email" class="text email">Email</label>
        <input v-model="formData.email" type="email" class="input">
      </div>
      <div>
        <label for="password" class="text">Password</label>
        <input v-model="formData.password" type="password" class="input">
      </div>
      <a-button type="primary" class="signIp-button" @click="signInUser">
        Sign in
      </a-button>
    </form>
    <p class="or">
      or
    </p>
    <div class="cantanner-signUp">
      <a-button class="signUp-button" type="primary">
        <nuxt-link to="/register/">
          Register
        </nuxt-link>
      </a-button>
      <facebookLogin />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import facebookLogin from '~/components/facebookLogin.vue'

export default {
  components: {
    facebookLogin
  },
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      setEmail: 'user/setEmail'
    }),
    async signInUser () {
      try {
        const user = await this.$fire.auth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        this.setEmail(user.user.email)
        this.$router.push('/photos')
      } catch (e) {
        alert('ไม่พบ User')
      }
    }
  }
}
</script>

<style scoped>
.contanner-signIn {
  background: #f7f5f5;
  width: 390px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
}
.form-signIn {
  display: flex;
  flex-direction: column;
  /* margin-top: 25px; */
}
.header-signIn {
  font-size: 34px;
  text-align: center;
  margin: 30px 0px 25px;
}
.text {
  font-size: 18px;
}
.email {
  margin-right: 32px;
}
.input {
  width: 210px;
  height: 35px;
  padding-left: 10px;
  margin-bottom: 10px;
  border: transparent;
  border-radius: 3px;
}
.or {
  font-size: 16px;
  font-weight: 500;
}
.cantanner-signUp {
  display: flex;
  flex-direction: column;
}
.signIp-button {
  align-self: center;
  width: 135px;
  margin: 10px 0px 14px;
}
.signUp-button {
  margin-bottom: 10px;
}
</style>
