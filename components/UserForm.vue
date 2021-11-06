<template>
  <div class="grid sm:grid-cols-10 md:mb-5 md:grid-cols-5 lg:grid-cols-5">
    <bg-card
      class="
        w-full
        sm:col-start-3 sm:col-end-9
        md:col-start-2 md:col-end-5
        lg:col-start-2 lg:col-end-5
      "
    >
      <div class="flex justify-center">
        <form class="w-4/5 xl:w-3/5">
          <h1
            class="mt-6 mb-5 text-center text-3xl font-extrabold text-gray-900"
          >
            {{ header }}
          </h1>
          <user-form-text-input
            header="บัตรประชาชน"
            property-name="idCard"
            input-type="text"
            :data-handler="user.idCard"
            @update-data="updateData"
          />
          <user-form-text-input
            header="รหัสผ่าน"
            property-name="password"
            input-type="password"
            :data-handler="user.password"
            @update-data="updateData"
          />
          <user-form-text-input
            header="ยืนยันรหัสผ่าน"
            property-name="confirmPassword"
            input-type="password"
            :data-handler="user.confirmPassword"
            @update-data="updateData"
          >
            <p v-show="validateUser.confirmPassword" class="text-red-500">
              รหัสผ่านไม่ตรงกัน
            </p>
          </user-form-text-input>
          <user-form-text-input
            header="ชื่อ"
            property-name="name"
            input-type="text"
            :data-handler="user.name"
            @update-data="updateData"
          />
          <user-form-text-input
            header="นามสกุล"
            property-name="surname"
            input-type="text"
            :data-handler="user.surname"
            @update-data="updateData"
          />

          <!-- gender -->
          <label class="block text-gray-700 font-bold mb-2 mt-3">เพศ</label>
          <div class="flex">
            <div class="flex items-center mb-2 mr-4">
              <input
                id="male"
                v-model="user.gender"
                type="radio"
                name="male"
                value="Male"
                class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                @click="validateGender"
              />
              <label class="text-gray-700">ชาย</label>
            </div>
            <div class="flex items-center mb-2">
              <input
                id="female"
                v-model="user.gender"
                type="radio"
                name="female"
                value="Female"
                class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                @click="validateGender"
              />
              <label class="text-gray-700">หญิง</label>
            </div>
          </div>
          <p v-show="validateUser.gender" class="text-red-500">
            กรุณาระบุ 'เพศ'
          </p>

          <user-form-text-input
            header="ที่อยู่"
            property-name="address"
            input-type="text"
            :data-handler="user.address"
            @update-data="updateData"
          />
          <user-form-text-input
            header="วันเกิด"
            property-name="dob"
            input-type="date"
            :data-handler="user.dob"
            @update-data="updateData"
          />
          <user-form-text-input
            header="เบอร์โทรศัพท์"
            property-name="tel"
            input-type="text"
            :data-handler="user.tel"
            @update-data="updateData"
          />
        </form>
      </div>
      <div class="flex justify-center mb-5">
        <div class="w-2/4">
          <button
            class="
              mt-4
              py-2
              px-4
              font-bold
              border border-transparent border-indigo-700
              rounded-md
              shadow
              text-indigo-600
              bg-white
              hover:bg-indigo-700
              hover:text-white
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
            @click="toggleLogin"
          >
            Back
          </button>
        </div>
        <div class="">
          <button
            class="
              mt-4
              ml-4
              py-2
              px-4
              font-bold
              rounded
              shadow
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
            @click="createUser"
          >
            Submit
          </button>
        </div>
      </div>
    </bg-card>
  </div>
</template>

<script>
// import Datepicker from '@themesberg/tailwind-datepicker/Datepicker'
import BgCard from './BgCard.vue'
import UserFormTextInput from './UserFormTextInput.vue'

export default {
  components: { BgCard, UserFormTextInput },
  props: ['header', 'userProp'],
  data() {
    return {
      user: Object,
      validateUser: {
        name: true,
        surname: true,
        gender: true,
        address: true,
        dob: true,
        tel: true,
        idCard: true,
        password: true,
        confirmPassword: false,
      },
    }
  },
  created() {
    this.user = this.userProp
    this.user.password = null
    this.user.confirmPassword = null
    this.validateGender()
  },
  methods: {
    toggleLogin() {
      this.$emit('toggle-regis')
      if (this.header === 'แก้ไขข้อมูลผู้ใช้') {
          this.$router.replace('/admin/UserManage')
      }
    },
    updateData(data, propertyName, isInvalid) {
      this.user[propertyName] = data
      this.validateUser[propertyName] = isInvalid
      if (propertyName === 'confirmPassword') {
        this.validateConfirmPassword()
      }
    },
    validateGender() {
      this.validateUser.gender = false
    },
    validateConfirmPassword() {
      if (this.user.password !== this.user.confirmPassword) {
        this.validateUser.confirmPassword = true
      } else {
        this.validateUser.confirmPassword = false
      }
    },
    createUser() {
      let userInvalid = false
      this.validateConfirmPassword()

      if (this.header === 'แก้ไขข้อมูลผู้ใช้' && this.user.password === '') {
          this.validateUser.password = false
          this.validateUser.confirmPassword = false
      }

      if (this.validateUser.idCard) {
        userInvalid = true
      } else if (this.validateUser.password) {
        userInvalid = true
      } else if (this.validateUser.confirmPassword) {
        userInvalid = true
      } else if (this.validateUser.name) {
        userInvalid = true
      } else if (this.validateUser.surname) {
        userInvalid = true
      } else if (this.validateUser.gender) {
        userInvalid = true
      } else if (this.validateUser.address) {
        userInvalid = true
      } else if (this.validateUser.dob) {
        userInvalid = true
      } else if (this.validateUser.tel) {
        userInvalid = true
      }

      if (userInvalid === false) {
        delete this.user.confirmPassword
        this.$emit('update-user', this.user)
      } else {
        alert('กรุณากรอกข้อมูลให้ถูกต้อง')
      }
    },
  },
}
</script>

<style>
</style>