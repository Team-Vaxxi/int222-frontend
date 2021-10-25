<template>
  <div class="vaxxi-bar h-16">
    <div class="flex justify-between">
      <div class="">
        <h1
          class="
            p-4
            pl-5
            text-2xl
            font-bold
            text-white
            vaxxi
          "
        >
          Vaxxi
        </h1>
      </div>
      <div class="self-center pr-3">
          <!-- note: Change to Nuxtlink after back-end get authentication -->
          <!-- <NuxtLink to="/user/personInfo" class="font-light text-white hover:text-black"> ข้อมูลส่วนตัว </NuxtLink> -->
        <h2 class="text-white">ข้อมูลส่วนตัว</h2>
      </div>
    </div>
  </div>
</template>

<style>
.vaxxi-bar {
  background: #106f8c;
}
@media (max-width: 426px) {
  .vaxxi {
    text-align: center;
  }
}
</style>