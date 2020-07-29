import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChAm2pBAsnXNxQ4Xb5fEEIdtwECnGxUTI",
  authDomain: "crwn-db-d973c.firebaseapp.com",
  databaseURL: "https://crwn-db-d973c.firebaseio.com",
  projectId: "crwn-db-d973c",
  storageBucket: "crwn-db-d973c.appspot.com",
  messagingSenderId: "85403455796",
  appId: "1:85403455796:web:ad7942b33730b3993fd561",
  measurementId: "G-ZY0WL825V6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
