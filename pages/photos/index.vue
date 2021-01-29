<template>
  <div>
    <navbar />
    <div class="contanner-pageList">
      <p class="text-head">
        Dogs
        <img class="img-dog" src="@/assets/icons8-dog-64 (2).png">
      </p>
      <selectBreeds />
      <div class="contanner-main-list">
        <div class="contanner-photoList">
          <div
            v-for="photo in photos"
            :key="photo.id"
            class="photo"
            @click="setData(photo)"
          >
            <img
              :src="photo.image ? photo.image.url : require('~/assets/unnamed.jpg')"
              alt="photos dog"
              class="photo-item"
            >
            <p class="text-name">
              {{ photo.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import selectBreeds from '~/components/selectBreeds'
import navbar from '~/components/navbar.vue'
export default {
  components: {
    navbar,
    selectBreeds
  },
  data () {
    return {
      photos: null,
      id: this.$route.params.id
    }
  },
  middleware: 'login',
  // beforeCreate () {
  //   this.$fireModule.auth().onAuthStateChanged((user) => {
  //     if (!user) {
  //       this.$router.replace('/login')
  //     }
  //   })
  // },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const res = await axios.get('https://api.thedogapi.com/v1/breeds?limit=16')
      this.photos = res.data
    },
    setData (obj) {
      this.$router.push(`/photos/${obj.image.id}`)
    }
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
.contanner-main-list {
  width: 1250px;
  margin: 0 auto;
}
.contanner-photoList {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: 1220px;
}
.text-name {
  height: 30px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: transparent;
}
.photo {
  text-align: center;
  width: 300px;
  transition: transform 0.6s;
}
.photo:hover p {
  color: black;
  background: white;
}
.photo:hover{
  border-radius: 5px;
  transform: scale(1.13);
}
.photo-item {
  width: 95%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
  cursor: pointer;
}
</style>
