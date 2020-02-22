
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtMtT2EQj4NRohRgwUDOJNW4gpP9OmN_o",
    authDomain: "ecommerce-db-5f550.firebaseapp.com",
    databaseURL: "https://ecommerce-db-5f550.firebaseio.com",
    projectId: "ecommerce-db-5f550",
    storageBucket: "ecommerce-db-5f550.appspot.com",
    messagingSenderId: "875339452522",
    appId: "1:875339452522:web:0524ec6f2cc2b4dc763a13",
    measurementId: "G-3EYB0EHMMR"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // console.log(firestore.doc(''));
    const userRef = firestore.doc('users/${userAuth.uid}');
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
    }


firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// provides access to the GoogleAuthProvider class from authentication library
const provider = new firebase.auth.GoogleAuthProvider();

// set custom parameters for signin popup
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
