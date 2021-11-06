<template>
  <user-form
    header="แก้ไขข้อมูลผู้ใช้"
    class="
      sm:col-span-12
      md:col-start-1 md:col-end-11
      lg:col-start-3 lg:col-end-11
      md:mt-5
      rounded-xl
    "
    :user-prop="editingUser"
    @update-user="editUser"
  />
</template>
<script>
import UserForm from '../../components/UserForm.vue'

export default {
  components: { UserForm },
  layout: 'admin',
  computed: {
    editingUser() {
      return this.$store.state.user.user
    }
  },
  methods: {
    async editUser(user) {
        const idUser = user.idUser
        delete user.idUser
        delete user.location
        delete user.vaccine
        console.log(user);
        console.log(idUser);
      await this.$axios.$put(`/users/${idUser}`, user).then(
        (response) => {
          alert('แก้ไขข้อมูลผู้ใช้สำเร็จ')
          this.$router.replace('/admin/UserManage')
        },
        (error) => {
          alert(error.response.data.error)
        }
      )
    },
  },
}
</script>