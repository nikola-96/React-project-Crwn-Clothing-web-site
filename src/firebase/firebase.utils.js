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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShoot = await userRef.get();

    if (!snapShoot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error)
        }
    }
    return userRef
}

export default firebase