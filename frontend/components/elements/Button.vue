<template>
  <button class="px-4 py-2 border-2 rounded-full " :class="computeClasses" @click="$emit('click')">
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonVue',
  props: {
    buttonType: {
      type: String,
      required: false,
      default: 'ghost',
      validator: prop => ['primary', 'ghost'].includes(prop)
    }
  },
  computed: {
    computeClasses () {
      const classes = {
        primary: 'bg-emerald-900 hover:bg-emerald-800 text-white',
        ghost: 'border-emerald-900 text-emerald-900'
      }
      return classes[this.buttonType]
    }
  }
})
</script>
