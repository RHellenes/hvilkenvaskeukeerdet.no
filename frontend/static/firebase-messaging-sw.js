
    importScripts(
      'https://www.gstatic.com/firebasejs/9.7.0/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyAdt-mgM6FBa-4jjMFlGTHNOsyqEn6Z0fg","authDomain":"hvilken-vaskeuke-er-det.firebaseapp.com","databaseURL":"https:\u002F\u002Fhvilken-vaskeuke-er-det-default-rtdb.europe-west1.firebasedatabase.app","projectId":"hvilken-vaskeuke-er-det","storageBucket":"hvilken-vaskeuke-er-det.appspot.com","messagingSenderId":"184428787142","appId":"1:184428787142:web:0e91a58b5f7b3f438e6ec7","measurementId":"G-Z79S0VEE5Y"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    // Setup event listeners for actions provided in the config:
    self.addEventListener('notificationclick', function(e) {
      const actions = [{"action":"goToVg","url":"https:\u002F\u002Fvg.no"}]
      const action = actions.find(x => x.action === e.action)
      const notification = e.notification

      if (!action) return

      if (action.url) {
        clients.openWindow(action.url)
        notification.close()
      }
    })

    