<template>
  <header class="flex justify-between w-full px-4 py-4 ">
    <!-- <Logo /> -->
    <div />
    <LoginVue />
  </header>
</template>

<script lang="ts">

import Vue from 'vue'
import LoginVue from '../auth/Login.vue'
export default Vue.extend({
  name: 'HeaderComponent',
  components: {
    LoginVue
  }
})
</script>
