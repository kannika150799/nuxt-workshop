<template>
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
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      photos: []
      //   photo: null,
      //   id: this.$route.params.id
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const res = await axios.get(
        'https://api.thedogapi.com/v1/breeds?limit=16'
      )
      this.photos = res.data
      console.log(this.photos, 'yy')
    },
    setData (obj) {
      this.$router.push(`/photos/${obj.image.id}`)
    }
  }
}
</script>

<style scoped>
.contanner-main-list {
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  /* padding: 1em; */
  width: 1250px;
  margin: 0 auto;
}
.contanner-photoList {
  /* display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: auto;
  grid-gap: 20px 30px; */

  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: 1220px;
}
.text-name {
  /* margin-top: 5px; */
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
  /* width: 300px; */
  width: 95%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
  cursor: pointer;
}
/* .photo-item:hover {
  box-shadow: 0 30px 50px rgba(0,0,0,.2);
} */

</style>
