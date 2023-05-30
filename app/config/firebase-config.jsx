import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCnzKYkXED74AFfAOE1j6aZmGQsUnL4aH0",
  authDomain: "smart-english-training.firebaseapp.com",
  projectId: "smart-english-training",
  storageBucket: "smart-english-training.appspot.com",
  messagingSenderId: "1012748043186",
  appId: "1:1012748043186:web:f943b014a38696746d1aab",
  measurementId: "G-CG8SST155L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)