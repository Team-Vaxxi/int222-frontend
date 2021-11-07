<template>
  <vaccine-form
    header="แก้ไขประเภทวัคซีน"
    :vaccine-prop="editingVaccine"
    :image-upload="imageUpload"
    @submit-form="editVaccine"
  />
</template>

<script>
import VaccineForm from '../../components/VaccineForm.vue'
export default {
  components: { VaccineForm },
  layout: 'admin',
  computed: {
    editingVaccine() {
      return this.$store.state.vaccine.vaccine
    },
    imageUpload() {
      return this.$store.state.vaccine.imageURL
    }
  },
  methods: {
    async editVaccine(vaccine, vaccineImageFile) {
      const formData = new FormData()
      formData.append('vaccine', JSON.stringify(vaccine))
      //   console.log(JSON.stringify(vaccine))
      formData.append('image', vaccineImageFile)
      await this.$axios.$put(`/vaccines/${vaccine.idVaccine}`, formData).then(
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