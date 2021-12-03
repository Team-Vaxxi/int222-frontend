<template>
  <div class="vaxxi-bar h-16">
    <div class="flex justify-between">
      <Nuxt-link to="/user/home">
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
      </Nuxt-link>

      <Nuxt-link to="/user/personal">
          <!-- note: Change to Nuxtlink after back-end get authentication -->
        <h2 class="font-light text-white hover:text-black p-5" >ข้อมูลส่วนตัว</h2>
    </Nuxt-link>
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