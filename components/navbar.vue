<template>
  <div class="contanner-nav">
    <div class="logo">
      <img class="img-dog" src="@/assets/icon-dog.png">
      Dogs
    </div>

    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <a-icon type="user" />&nbsp;:&nbsp;{{ account }} <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <p class="logOut" @click="logout">
            Logout
          </p>
        </a-menu-item>
      </a-menu>
    </a-dropdown>

    <!-- <p class="email">
      <a-icon type="user" />&nbsp;:&nbsp;{{ account }}
    </p>
    <a-button class="link login" @click="logout">
      Logout
    </a-button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    account: state => state.user.email
  }),
  methods: {
    async logout () {
      try {
        await this.$fire.auth.signOut()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style scoped>
.contanner-nav {
  width: 100%;
  height: 60px;
  display: flex;
  /* justify-content: flex-end; */
  justify-content: space-between;
  align-items: center;
  background-color: slategray;
}
.logo {
  font-size: 25px;
  font-weight: 900;
  color: white;
}
.img-dog {
  background: white;
  width: 45px;
  border-radius: 5px;
  margin-left: 10px;
}
.logOut {
  text-align: center;
  margin: 0px;
}
a {
  color: white;
  margin-right: 15px;
}
a:hover {
  color: rgb(240, 175, 175);
}
/* .link {
    width: 100px;
    height: 45px;
    color: #fdfdfd;
    margin-right: 10px;
    background: transparent;
}
.link:hover {
    background: rgb(243, 133, 133);
    border: 1px solid rgb(243, 133, 133);
}
.login {
    border: 1px solid white;
} */
/* .email {
  height: 45px;
  align-items: center;
    display: flex;
    margin: 0px 20px;
    color: #fff;
} */
</style>
