<template>
  <div>
    <h1 class="text-center font-extrabold text-xl p-5">{{ header }}</h1>
    <!-- User -->
    <div
      class="flex mt-3"
      v-for="(temp, index) in tempUsers"
      :key="temp.idUser"
    >
      <div class="flex-auto self-center">
        <span class="align-middle inline-block"
          >{{ index + 1 }}. {{ temp.name }} {{ temp.surname }}</span
        >
      </div>
      <div class="flex-initial">
        <button
          class="
            bg-red-600
            p-2
            rounded-xl
            text-white
            md:ml-0
            w-16
            md:w-auto
            hover:text-black
            flex-initial
          "
          @click="editUser(user)"
        >
          แก้ไข
        </button>
      </div>
    </div>
    <!-- Locations -->
    <!-- <div
      class="flex mt-3"
      v-for="(temp, index) in tempLocations"
      :key="temp.idLocation"
    >
      <div class="flex-auto self-center">
        <span class="align-middle inline-block"
          >{{ index + 1 }}. {{ temp.name }}</span
        >
      </div>
      <div class="flex-initial">
        <button
          class="
            bg-red-600
            p-2
            rounded-xl
            text-white
            md:ml-0
            w-16
            md:w-auto
            hover:text-black
            flex-initial
          "
          @click="editUser(user)"
        >
          แก้ไข
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['header', 'tempUsers', 'tempLocations'],
  data() {
    return {
      list: Object,
    }
  },
  created() {
    console.log(`User: ${this.tempUsers}`)
    console.log(`Locations: ${this.tempLocations.data}`)
  },
}
</script>

<style>
</style>