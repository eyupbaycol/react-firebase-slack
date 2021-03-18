import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDZ4YHE14jkrmAygyMmppVv_OnkzMqEBHQ",
    authDomain: "slack-clone-54055.firebaseapp.com",
    projectId: "slack-clone-54055",
    storageBucket: "slack-clone-54055.appspot.com",
    messagingSenderId: "497172122243",
    appId: "1:497172122243:web:22667e83e283178d4d69b6"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider, db };