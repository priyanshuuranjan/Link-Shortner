import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVMEIjBqVLghZXjY9_dynWfrbF8Waq7v8",
    authDomain: "link-shortner-ff232.firebaseapp.com",
    projectId: "link-shortner-ff232",
    storageBucket: "link-shortner-ff232.appspot.com",
    messagingSenderId: "123970242151",
    appId: "1:123970242151:web:a05eb96e84245fc78a76c2",
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
export const db = getFirestore(app);





