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


export const addCollectionAndDocuments = async (collectioKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectioKey)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newRef = collectionRef.doc()
        batch.set(newRef, obj)

    })
    return await batch.commit()
}
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => { //dobijamo koleciju sa nizom od 5 koleckica
        const { title, items } = doc.data()//povucemo svaku kolekcuji samo naslov i njene unutrasnje kolekcije
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollections.reduce((accumulator, collection) => { //dobijamo niz sa tacnim imenim i sadrzajem !!! bitno
        //konvertovanje
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase