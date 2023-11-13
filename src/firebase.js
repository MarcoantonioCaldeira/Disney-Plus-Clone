import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA7cagSXU3YaVFWiQTByDTXxOlIBFqGXOI",
  authDomain: "disneyplus-clone-12ac3.firebaseapp.com",
  projectId: "disneyplus-clone-12ac3",
  storageBucket: "disneyplus-clone-12ac3.appspot.com",
  messagingSenderId: "573203923899",
  appId: "1:573203923899:web:8ae0083bc92a5f9ea9fa9e",
  measurementId: "G-8MWQMD7M9Z"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  


  export { auth, provider, storage };
  
  export default db;