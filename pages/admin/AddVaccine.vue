<template>
  <vaccine-form
    header="เพิ่มประเภทวัคซีน"
    :vaccine-prop="addingVaccine"
    :image-upload="imageUpload"
    @submit-form="addVaccine"
  />
</template>

<script>
import VaccineForm from '../../components/VaccineForm.vue'
export default {
  components: { VaccineForm },
  layout: 'admin',
  data() {
    return {
      imageUpload: '/image-upload.jpg',
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
          this.$router.replace("/admin/ShowVaccine")
        },
        (error) => {
          alert(error.response.data.error)
        }
      )
    },
  },
}
</script>

<style>
</style>