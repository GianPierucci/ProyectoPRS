import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMHZgRvpXd2XDRfKsnQqTeQBjzLxpVYrY",
  authDomain: "proyecto-prs.firebaseapp.com",
  projectId: "proyecto-prs",
  storageBucket: "proyecto-prs.appspot.com",
  messagingSenderId: "647126202156",
  appId: "1:647126202156:web:0b589be78202ca0f94de89"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)