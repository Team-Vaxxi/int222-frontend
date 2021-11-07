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
      const editingUser = this.$store.state.user.user
      editingUser.password = null
      editingUser.confirmPassword = null
      return editingUser
    },
  },
  methods: {
    async editUser(user) {
      const idUser = user.idUser
      const editingUser = user
      delete editingUser.idUser
      delete editingUser.location
      delete editingUser.vaccine
      await this.$axios.$put(`/users/${idUser}`, editingUser).then(
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