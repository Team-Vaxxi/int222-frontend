<template>
  <div class="grid md:grid-cols-5 lg:grid-cols-5">
    <div
      class="
        flex
        justify-center
        m-5
        md:col-start-2 md:col-end-5
        lg:col-start-2 lg:col-end-5
      "
    >
      <bg-card class="bgcard rounded-xl w-full lg:w-4/6 md:mt-10 p-5">
        <h1 class="text-center font-extrabold text-xl p-5">บัญชีผู้ใช้งาน</h1>
        <!-- component show list -->
        <div v-for="(user, index) in tempUsers" class="flex mt-3" :key="user.idUser">
          <div class="flex-auto self-center">
            <span class="align-middle inline-block"
              >{{ index + 1 }}. {{ user.name }} {{ user.surname }}</span
            >
          </div>
          <div class="flex-initial">
            <button
              class="
                bg-green-500
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
            <button
              class="
                bg-red-500
                p-2
                rounded-xl
                text-white
                md:ml-0
                w-16
                md:w-auto
                hover:text-black
                flex-initial
              "
              @click="deleteUser(user.idUser)"
            >
              ลบ
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
      this.$router.replace('/admin/EditUser')
    },
    async deleteUser(userId){
      const del = confirm('Are you sure?')
      if(del) {
        await this.$axios.$delete(`/users/${userId}`).then(
          (response) => {
            alert('Delete succeeded!')
            window.location.reload()
          },
          (error) => {
            alert(error.response.data.error)
          }
        )
      }
      
    }
  },
}
</script>

<style>
h1 {
  color: #106f8c;
}
</style>