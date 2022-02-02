import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD7w-Bb8oYQ_kiyAHDBHkN9S6LJRGKF9Ns",
    authDomain: "vue-blog-portfolio.firebaseapp.com",
    projectId: "vue-blog-portfolio",
    storageBucket: "vue-blog-portfolio.appspot.com",
    messagingSenderId: "176497494379",
    appId: "1:176497494379:web:605b114b8d748f7223242e"
  };

  firebase.initializeApp(firebaseConfig)


  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp }