<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        workshop-nuxt-dog
      </h1>
      <div class="links">
        <nuxt-link to="/login" class="button--grey">
          Login
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      email: 'jjjj'
    }
  },
  computed: mapState({
    account: state => state.user.email
  }),
  methods: {
    ...mapMutations({
      setEmail: 'user/setEmail'
    }),
    addEmail () {
      this.setEmail(this.email)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #eef0f1;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.button--grey {
 border: 1px solid #f2f5f8;
    color: #f0f3f5;
}
</style>
