<template>
  <div class="relative flex flex-1 p-4 bg-white ">
    <form class="flex flex-col justify-between flex-1 w-full " @submit.prevent="onSubmit">
      <fieldset class="flex flex-col py-2 text-sm">
        <legend class="text-lg">
          Login
        </legend>
        <label class="w-full mt-4 mb-2" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          class="w-full border-2 border-gray-200 rounded-md active:border-emerald-800 focus:outline-none"
          autocomplete="email"
          type="email"
          name="email"
        >
        <label class="w-full mt-4 mb-2" for="password">Passord</label>
        <input
          id="password"
          v-model="password"
          class="w-full border-2 border-gray-200 rounded-md active:border-emerald-800 focus:outline-none"
          autocomplete="current-password"
          type="password"
          name="password"
        >
      </fieldset>
      <input type="submit" class="px-4 py-2 border-2 rounded-full border-emerald-900 text-emerald-900" value="Login">
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          housingMemberOf {
            name
            id
          }
          housingOwnerOf {
            name
            id
          }
        }
        sessionToken
      }
      ... on UserAuthenticationWithPasswordFailure {

          
          message
        
      }
    }
  }
  
`

export default Vue.extend({
  name: 'LoginVue',
  data: () => ({
    isPromptOpen: true,
    email: 'rene.hellenes@gmail.com',
    password: 'cocacola'
  }),
  methods: {
    async onSubmit () {
      const credentials = {
        email: this.email,
        password: this.password
      }
      try {
        const test = await this.$apollo.mutate({
          mutation: SIGNIN_MUTATION,
          variables: credentials
        }).then(({ data }) => data.authenticateUserWithPassword)
        const result = await test
        await this.$apolloHelpers.onLogin(test.sessionToken)
        await console.log(result)
      } catch (e) {
        console.error(e)
      }
    }

  }
})
</script>
