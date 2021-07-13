import firebase from 'firebase/app'
import 'firebase/auth'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCqxERIaofJOxGP5IFTFXSfGIIPyxMmOKU",
    authDomain: "imperiastyle-8e25e.firebaseapp.com",
    projectId: "imperiastyle-8e25e",
    storageBucket: "imperiastyle-8e25e.appspot.com",
    messagingSenderId: "188722283688",
    appId: "1:188722283688:web:5c92db875d7d2c9c9dee9d",
    measurementId: "G-N0ENPZJCS8"
}
firebase.initializeApp(firebaseConfig)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

// utils
const auth = firebase.auth()

// export utils/refs
export {
  auth
}