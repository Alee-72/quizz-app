import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHVFR_EL_qwApZr41CDOn-xHIo0vvadTA",
    authDomain: "local-quiz-app.firebaseapp.com",
    databaseURL: "https://local-quiz-app.firebaseio.com",
    projectId: "local-quiz-app",
    storageBucket: "local-quiz-app.appspot.com",
    messagingSenderId: "411207786329",
    appId: "1:411207786329:web:a9aeae12c01e4e9cf5f648"
  };
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();  


  export function addMessage() {
    Notification.requestPermission().then((permission) => {
      console.log(permission);
      if (permission === "granted") {
        messaging
          .getToken()
          .then((currentToken) => {
            if (currentToken) {
              console.log(currentToken);
            } else {
              console.log(
                "No Instance ID token available. Request permission to generate one."
              );
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
          });
      }
    });
  }
  navigator.serviceWorker.register('./firebase-messaging-sw.js');