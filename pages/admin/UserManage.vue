<template>
  <div class="grid md:grid-cols-5 lg:grid-cols-5">
    <div
      class="
        flex
        justify-center
        md:col-start-2 md:col-end-5
        lg:col-start-2 lg:col-end-5
      "
    >
      <bg-card class="w-full lg:w-4/6 mt-10 p-5">
        <h1 class="text-center font-extrabold text-xl p-5">บัญชีผู้ใช้งาน</h1>
        <!-- component show list -->
        <div class="flex mt-3" v-for="(user, index) in tempUsers" :key="user.idUser">
          <div class="flex-auto self-center">
            <span class="align-middle inline-block"
              >{{ index + 1 }}. {{ user.name }} {{ user.surname }}</span
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