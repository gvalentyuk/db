import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDvzmIw2tqJLtTXxRRNVcap7qTKOX4p5fM",
    authDomain: "crwn-82c0b.firebaseapp.com",
    databaseURL: "https://crwn-82c0b.firebaseio.com",
    projectId: "crwn-82c0b",
    storageBucket: "crwn-82c0b.appspot.com",
    messagingSenderId: "822077489775",
    appId: "1:822077489775:web:280ab1dbbe617694cf039a",
    measurementId: "G-9LE6KFE6Y3"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserDocumentProfile = async ( userAuth, additionalInf ) => {
    if( !userAuth ) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exist){
        const { displayName, email } = userAuth
        await userRef.set({
            created: new Date(),
            displayName, email, ...additionalInf
        })
    }

    return userRef
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)

    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title, items
        }
    })
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()

            resolve(userAuth)
        }, reject)
    })
}


export const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
