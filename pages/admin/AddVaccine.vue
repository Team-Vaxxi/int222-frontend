<template>
  <vaccine-form @submit-form="addVaccine" :vaccineProp="addingVaccine"/>
</template>

<script>
import VaccineForm from "../../components/VaccineForm.vue";
export default {
  data(){
    return {
      addingVaccine: {
        name: "",
        description: "",
        price: "",
        image: "",
        lcoation: []
      }
    }
  },  
  components: { VaccineForm },
  methods: {
      addVaccine(vaccine){
      console.log('method addVaccine');
      console.log(vaccine);
    }
  }

}
</script>

<style>

</style>