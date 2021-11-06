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
          <!-- idCard -->
          <div class="w-full mb-3">
            <label
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
              for="grid-password"
            >
              บัตรประชาชน
            </label>
            <input
              id="idCard"
              v-model="user.idCard"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              type="text"
            />
          </div>
          <!-- password -->
          <div class="w-full mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            >
              รหัสผ่าน
            </label>
            <input
              id="password"
              v-model="user.password"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              type="password"
            />
          </div>
          <!-- verifyPassword -->
          <div class="w-full mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              id="verifyPassword"
              v-model="confirmPassword"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              type="password"
            />
          </div>
          <!-- name -->
          <div class="w-full mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
              for="grid-first-name"
            >
              ชื่อ
            </label>
            <input
              id="name"
              v-model="user.name"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              type="text"
            />
          </div>
          <!-- surname -->
          <div class="w-full mt-3">
            <label
              id="surname"
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            >
              นามสกุล
            </label>
            <input
              v-model="user.surname"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              type="text"
            />
          </div>
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
              />
              <label class="text-gray-700">หญิง</label>
            </div>
          </div>
          <!-- address -->
          <div class="flex flex-wrap -mx-3 mt-3">
            <div class="w-full px-3">
              <label
                id="address"
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
                for="grid-password"
              >
                ที่อยู่
              </label>
              <input
                v-model="user.address"
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                type="text"
              />
            </div>
          </div>
          <!-- dob -->
          <div class="flex flex-wrap -mx-3">
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 font-bold mb-2"
                >วันเกิด</label
              >
              <input
                id="birthday"
                v-model="user.dob"
                type="date"
                name="birthday"
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
              />
            </div>
          </div>
          <!-- tel -->
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700
                  font-bold
                  mb-2
                "
              >
                เบอร์โทรศัพท์
              </label>
              <input
                v-model="user.tel"
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                type="text"
              />
            </div>
          </div>
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
export default {
  components: { BgCard },
  props: ['header'],
  data() {
    return {
      user: {
        name: '',
        surname: '',
        gender: '',
        address: '',
        dob: '',
        tel: '',
        idCard: '',
        password: '',
      },
      confirmPassword: '',
    }
  },
  methods: {
    toggleLogin() {
      this.$emit('toggle-regis')
    },
    async createUser() {
      let userInvalidate = false
      console.log(this.user);

      if (this.user.idCard === '') {
        userInvalidate = true
        alert('กรุณากรอกเลขบัตรประชาชน')
      }
      if (this.user.password === '') {
        userInvalidate = true
        alert('กรุณากรอกรหัสผ่าน')
      }
      if (this.user.password !== this.confirmPassword) {
        userInvalidate = true
        alert('รหัสผ่านไม่ตรงกัน')
      }
      if (this.user.name === '') {
        userInvalidate = true
        alert('กรุณากรอกชื่อ')
      }
      if (this.user.surname === '') {
        userInvalidate = true
        alert('กรุณากรอกนามสกุล')
      }
      if (this.user.gender === '') {
        userInvalidate = true
        alert('กรุณาระบุเพศ')
      }
      if (this.user.address === '') {
        userInvalidate = true
        alert('กรุณากรอกที่อยู่')
      }
      if (this.user.dob === '') {
        userInvalidate = true
        alert('กรุณาระบุวันเกิด')
      }
      if (this.user.tel === '') {
        userInvalidate = true
        alert('กรุณากรอกเบอร์โทรศัพท์')
      }

      if (userInvalidate === false) {
        await this.$axios.$post(`/auth/register`, this.user).then(
          (response) => {
            alert('Register succeeded!')
            window.location.reload()
          },
          (error) => {
            alert(error.response.data.error)
          }
        )
      }
    },
  },
}
</script>

<style>
</style>