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
</style>
