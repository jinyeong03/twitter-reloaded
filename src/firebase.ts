import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAkMBUlFCr-zyr0GtNkH7Lent_sNdWq-I",
  authDomain: "nwitter-reloaded-ee80a.firebaseapp.com",
  projectId: "nwitter-reloaded-ee80a",
  storageBucket: "nwitter-reloaded-ee80a.appspot.com",
  messagingSenderId: "753316169739",
  appId: "1:753316169739:web:240e014209f5e5c330df0e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore();
