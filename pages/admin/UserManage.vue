<template>
<div>
    <div class="flex justify-center">
      <bg-card class="m-5 w-3/5 bgcard mt-10 lg:w-1/2 p-5">
        <h1 class="text-center font-extrabold text-xl p-5">
          บัญชีผู้ใช้งาน
        </h1>
        <ol class="p-3 lg:px-10">
          <li
            v-for="user in tempUsers"
            :key="user.idUser"
          >
            {{ user.name }}  {{ user.surname}}
            <button
              class="
                bg-red-600
                p-2
                rounded-xl
                text-white
                ml-5
                md:ml-0
                md:mt-3
                w-16
                md:w-auto
                hover:text-black
              "
              @click="editUser(user)"
            >
              แก้ไข
            </button>
          </li>
        </ol>
      </bg-card>
    </div>
</div>
  
  
</template>

<script>
import BgCard from '../../components/BgCard.vue'
export default {
  components: { BgCard },
  layout: 'admin',
  data() {
    return {
      tempUsers: [],
    }
  },
  async created() {
    this.tempUsers = await this.$axios.$get('/users')
  },
  methods: {
    editUser(user) {
      this.$store.commit('user/setEditingUser', user)
    }
  }
}
</script>

<style>

</style>