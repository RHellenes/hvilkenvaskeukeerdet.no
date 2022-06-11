<template>
  <div>
    <button
      class="w-auto p-5 text-white transform bg-gray-800 active:scale-95"
      :disabled="!listenersStarted || !permissionGranted || idToken !== ''"
      :loading="loading"
      @click="getIdToken"
    >
      Get token
    </button>
    <button class="w-auto p-5 text-white transform bg-gray-800 active:scale-95" @click="sendTestMessage">
      Give me a push message
    </button>
  </div>
</template>

<script >
export default {
  // const message = {
  //   // ...
  //   webpush: {
  //     notification: {
  //       actions: [
  //         {
  //           action: 'goToVg',
  //           title: 'Go to URL'
  //         }
  //       ]
  //     }
  //   }
  //   // ...
  // }
  data () {
    return {
      listenersStarted: false,
      permissionGranted: false,
      idToken: '',
      loading: false
    }
  },
  methods: {
    async requestPermission () {
      try {
        const permission = await Notification.requestPermission()
        this.permissionGranted = permission === 'granted'
      } catch (e) {
        console.error(e)
      }
    },
    async getIdToken () {
      this.loading = true
      let currentToken
      try {
        currentToken = await this.$fire.messaging.getToken()
      } catch (e) {
        console.error('An error occurred while retrieving token. ', e)
        this.idToken = ''
        this.loading = false
      }
      if (currentToken) {
        this.idToken = currentToken
      } else {
        // Show permission request.
        console.info(
          'No Instance ID token available. Request permission to generate one.'
        )
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        this.idToken = ''
      }
      alert(`The id token is: ${this.idToken}`)
      this.loading = false
    },
    startListeners () {
      this.startOnMessageListener()
      this.listenersStarted = true
    },
    startOnMessageListener () {
      this.$fire.messaging.onMessage((payload) => {
        console.info('Message received. ', payload)
      })
    },
    sendTestMessage () {
      // try {
      //   setTimeout(() => {
      //     // wait 5 seconds so you have time to switch away from the page to test the service-worker
      //     this.$fire.functions.httpsCallable('sendTestPushMessage')({
      //       token: this.idToken
      //     })
      //   }, 5000)
      // } catch (e) {
      //   alert(e)
      // }
      console.log(this.$fire)
    }
  }
}
</script>
