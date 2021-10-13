<template>
  <vaccine-form
    :vaccine-prop="addingVaccine"
    :image-upload="imageUpload"
    @submit-form="addVaccine"
  />
</template>

<script>
import VaccineForm from '../../components/VaccineForm.vue'
export default {
  components: { VaccineForm },
  data() {
    return {
      imageUpload: '/_nuxt/static/image-upload.jpg',
      addingVaccine: {
        name: '',
        description: '',
        price: 0,
        image: '',
        locations: [],
      },
    }
  },
  methods: {
    async addVaccine(vaccine, vaccineImageFile) {
      const formData = new FormData()
      formData.append('vaccine', JSON.stringify(vaccine))
      // console.log(JSON.stringify(vaccine))
      formData.append('image', vaccineImageFile)
      await this.$axios.$post(`/vaccines`, formData).then(
        (response) => {
          alert('Upload succeeded!')
          window.location.reload()
        },
        (error) => {
          alert(error)
        }
      )
    },
  },
}
</script>

<style>
</style>