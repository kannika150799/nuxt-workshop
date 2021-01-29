<template>
  <div class="contanner-select">
    <a-select
      show-search
      placeholder="Select a Breds"
      option-filter-prop="children"
      :filter-option="filterOption"
      class="breed_select"
    >
      <a-select-option v-for="(photo, index) in photos" :key="index" @click="setData(photo)">
        {{ photo.name }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      photos: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().includes(input.toLowerCase())
      )
    },
    async getData () {
      const res = await axios.get('https://api.thedogapi.com/v1/breeds')
      this.photos = res.data
    },
    setData (obj) {
      this.$router.push(`/photos/${obj.image.id}`)
    }
  }
}
</script>

<style>
.contanner-select{
  margin-bottom: 30px;
}
.breed_select {
  width: 500px;
}
.breed_select .ant-select-selection--single {
  border-radius: 20px;
}
</style>
