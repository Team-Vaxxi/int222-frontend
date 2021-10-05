<template>
  <vaccine-form @submit-form="addVaccine" :vaccineProp="addingVaccine" />
</template>

<script>
import VaccineForm from '../../components/VaccineForm.vue'
export default {
  data() {
    return {
      addingVaccine: {
        name: '',
        description: '',
        price: 0,
        image: '',
        locations: [],
      },
    }
  },
  components: { VaccineForm },
  methods: {
     async addVaccine(vaccine, vaccineImageFile) {
      const formData = new FormData()
      formData.append('vaccine', JSON.stringify(vaccine))
      console.log(JSON.stringify(vaccine));
      formData.append('image', vaccineImageFile)
      await this.$axios.$post(`/vaccines`, formData)
    },
  },
}
</script>x

<style>
</style>