<template>
  <div>
    <div class="flex justify-center">
      <bg-card class="m-5 w-3/5 bgcard mt-10 lg:w-1/2 p-5">
        <h1 class="text-center font-extrabold text-xl p-5">บัญชีผู้ใช้งาน</h1>
          <div class="flex" v-for="(user, index) in tempUsers" :key="user.idUser">
            <div class="flex-auto md:mt-3 self-center"><span class="align-middle inline-block">{{ index + 1}}. {{ user.name }} {{ user.surname }}</span></div>
            <div class="flex-initial">
              <button
                class="
                  bg-red-600
                  p-2
                  rounded-xl
                  text-white
                  ml-5
                  md:ml-0 md:mt-3
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
    },
  },
}
</script>

<style>
</style>