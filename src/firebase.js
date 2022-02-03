import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0eW_T5YaV1C0Pl_eVs5IfZS4PCFn6hcc",
  authDomain: "manish-slack-clone.firebaseapp.com",
  projectId: "manish-slack-clone",
  storageBucket: "manish-slack-clone.appspot.com",
  messagingSenderId: "738633377017",
  appId: "1:738633377017:web:bac7205f6405def673ee28",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
