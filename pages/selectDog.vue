<template>
  <a-select
    show-search
    placeholder="Select a person"
    option-filter-prop="children"
    style="width: 600px"
    :filter-option="filterOption"
    @focus="handleFocus"
  >
    <a-select-option
      v-for="photo in photos"
      :key="photo.id"
      :value="photo"
    >
      {{ photo.name }}
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    const photos = await $axios.$get('/v1/breeds?limit=2')
    return { photos }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().includes(input.toLowerCase())
      )
    },
    setData (obj) {
      // console.log(obj)
      // localStorage.setItem('photo', JSON.stringify(obj))
      this.$router.push(`/photo/${obj.image.id}`)
    }
  }
}
</script>
