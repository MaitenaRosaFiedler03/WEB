import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCECiCk4tWmTY6CjF2_IGhmdm05soMX46U",
  authDomain: "organiko-cedb5.firebaseapp.com",
  projectId: "organiko-cedb5",
  storageBucket: "organiko-cedb5.appspot.com",
  messagingSenderId: "182438650817",
  appId: "1:182438650817:web:65272dde3f1ed36dba4540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveUser = (username, password, email, fullName ) => {
   console.log("a")
   // addDoc(collection(db, 'usuarios'), {username, password,email, fullName})
}