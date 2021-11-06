<template>
  <div class="w-full mt-3">
    <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2">
      {{ header }}
    </label>
    <input
      v-model="inputData"
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
      :type="inputType"
      @change="updateData(inputData)"
    />
    <p v-show="invalidData" class="text-red-500">กรุณากรอก '{{ header }}'</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['header', 'propertyName', 'dataHandler', 'inputType'],
  data() {
    return {
      inputData: this.dataHandler,
      invalidData: true,
    }
  },
  created() {
    this.updateData(this.inputData)
  },
  methods: {
    updateData(data) {
      if (data === '') {
        this.invalidData = true
      } else {
        this.invalidData = false
      }
      this.$emit('update-data', data, this.propertyName, this.invalidData)
    },
  },
}
</script>