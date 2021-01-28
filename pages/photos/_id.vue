<template>
  <div class="pageId">
    <navbar />
    <div v-if="photo" class="contanner-pageId">
      <div class="box-id">
        <p class="head-Detail-id">
          {{ photo.breeds[0].name ? photo.breeds[0].name : '' }}
        </p>
        <div class="contanner-body-id">
          <img :src="photo.url" alt="dog" class="contanner-photo-id">
          <div class="contanner-detail-id">
            <div class="name">
              <p class="name-dog">
                Name :
              </p>
              <p>&nbsp;{{ photo.breeds[0].name ? photo.breeds[0].name : '-' }}</p>
            </div>

            <div class="name">
              <p class="name-dog">
                Bred for :
              </p>
              <p>&nbsp;{{ photo.breeds[0].bred_for ? photo.breeds[0].bred_for : '-' }}</p>
            </div>

            <div class="name">
              <p class="name-dog">
                Life span :
              </p>
              <p>&nbsp;{{ photo.breeds[0].life_span ? photo.breeds[0].life_span : '-' }}</p>
            </div>

            <div class="name">
              <p class="name-dog">
                Origin :
              </p>
              <p>&nbsp;{{ photo.breeds[0].origin ? photo.breeds[0].origin : '-' }}</p>
            </div>

            <div class="name">
              <p class="name-dog">
                Temperament :&nbsp;
              </p>
              <p class="temperament">
                {{ photo.breeds[0].temperament ? photo.breeds[0].temperament : '-' }}
              </p>
            </div>
          </div>
        </div>
        <nuxt-link to="/photos" class="back-id">
          <a-icon type="left" />Back to list
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from '~/components/navbar.vue'
export default {
  components: {
    navbar
  },
  data () {
    return {
      photo: null,
      id: this.$route.params.id
    }
  },
  beforeCreate () {
    this.$fireModule.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/login')
      }
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const res = await axios.get(`https://api.thedogapi.com/v1/images/${this.id}`)
      this.photo = res.data
    }
  }
}
</script>

<style scoped>
.pageId {
  height: 100%;
}
.contanner-pageId {
  height: 100%;
    display: flex;
  flex-direction: column;
  align-items: center;
  /* background: #ece5e5; */
}
.box-id {
  margin-top: 30px;
  padding: 30px 0px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(235, 231, 231);
  border-radius: 16px;
}
.head-Detail-id{
  font-size: 32px;
  font-weight: 700;
}
.contanner-body-id {
  display: flex;
  align-items: center;
}
.contanner-photo-id {
  width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
}
.contanner-detail-id {
  margin-left: 30px;
}
.contanner-detail-id p {
  font-size: 16px;
}
.name {
  display: flex;
  flex-direction: row;
}
.name-dog {
  font-weight: 700;
}
.temperament {
  width: 370px;
}
.back-id {
  margin-top: 30px;
  color: teal;
  font-size: 16px;
  font: 700;
  cursor: pointer;
}
.back-id:hover {
  color: rgb(49, 0, 128);
}
</style>
