import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKEO8v2EQuPJmHYdSsziX8bSxA8A0V5lM",
  authDomain: "lingolink-bb49a.firebaseapp.com",
  projectId: "lingolink-bb49a",
  storageBucket: "lingolink-bb49a.appspot.com",
  messagingSenderId: "498236075558",
  appId: "1:498236075558:web:9da772996c14d1706000e7",
};

// initilize firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
