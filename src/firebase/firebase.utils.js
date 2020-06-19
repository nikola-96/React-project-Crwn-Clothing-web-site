import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBs7FTXu_kmZZargO6r3WW1_7k20jEfxJU",
    authDomain: "crwn-db-53ecf.firebaseapp.com",
    databaseURL: "https://crwn-db-53ecf.firebaseio.com",
    projectId: "crwn-db-53ecf",
    storageBucket: "crwn-db-53ecf.appspot.com",
    messagingSenderId: "75463567798",
    appId: "1:75463567798:web:e313f436a4eed738b0f917",
    measurementId: "G-XNQS0NEC14"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase