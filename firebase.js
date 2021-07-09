import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA-5zVi_UJDObpSIUu6Fw95_n8M_juFjyE',
  authDomain: 'facebook-clone-25baa.firebaseapp.com',
  projectId: 'facebook-clone-25baa',
  storageBucket: 'facebook-clone-25baa.appspot.com',
  messagingSenderId: '515948241607',
  appId: '1:515948241607:web:b864f29fad4e161eb494e2'
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage =firebase.storage();

export { db, storage };