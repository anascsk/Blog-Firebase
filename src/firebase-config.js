import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    // apiKey: "AIzaSyDCXiOMwoTr5vc2KSiG2P7fEvD0BgU4cX4",
    // authDomain: "react-blog-ed6f2.firebaseapp.com",
    // projectId: "react-blog-ed6f2",
    // storageBucket: "react-blog-ed6f2.appspot.com",
    // messagingSenderId: "222955825386",
    // appId: "1:222955825386:web:f89aea3a90a1f6b4258f93"

    apiKey: "AIzaSyD9zIz7GEGxzXcKeq4B_5k0ZYI16AlA1m8",
  authDomain: "blogbae11.firebaseapp.com",
  projectId: "blogbae11",
  storageBucket: "blogbae11.appspot.com",
  messagingSenderId: "190597020561",
  appId: "1:190597020561:web:668c6af60c333f73bbb830"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
