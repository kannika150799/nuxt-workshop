<template>
  <div>
    <navbar />
    <div class="contanner-pageList">
      <p class="text-head">
        Dogs
        <img class="img-dog" src="@/assets/icons8-dog-64 (2).png">
      </p>
      <selectBreeds />
      <listDog />
    </div>
  </div>
</template>

<script>
import listDog from '~/components/listDog'
import selectBreeds from '~/components/selectBreeds'
import navbar from '~/components/navbar.vue'
export default {
  components: {
    navbar,
    listDog,
    selectBreeds
  },
  beforeCreate () {
    this.$fireModule.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/login')
      }
    })
  }
}
</script>

<style scoped>
.contanner-pageList {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
}
.text-head {
  margin: 30px 0px;
  font-size: 54px;
  font-weight: 700;
  text-decoration: underline;
}
</style>
