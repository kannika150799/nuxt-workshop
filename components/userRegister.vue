<template>
  <div class="contanner-register">
    <form class="form-register">
      <h2 class="header-register">
        Register
      </h2>

      <div class="box-input">
        <label class="text email" for="email">Email</label>
        <input
          id="txtEmail"
          v-model="formData.email"
          class="input"
          type="email"
          placeholder="email"
        >
      </div>
      <div class="box-input">
        <label class="text" for="password">Password</label>
        <input
          id="txtPassword"
          v-model="formData.password"
          class="input"
          type="password"
          placeholder="password"
        >
      </div>
      <a-button type="primary" class="button" @click="createUser">
        Register
      </a-button>
      <img class="icon-home" src="@/assets/icons8-home-24.png" @click="home">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async createUser () {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        this.$router.replace('/login')
      } catch (e) {
        alert(e)
      }
    },
    home () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.contanner-register {
  background: #f7f5f5;
  width: 390px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
}
.form-register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-register {
  text-align: center;
  font-size: 34px;
}
.box-input {
  display: flex;
  flex-direction: column;
}
.text {
  font-size: 18px;
  font-weight: 500;
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
.button {
  align-self: center;
  width: 135px;
  margin: 15px 0px 10px;
}
.icon-home {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
