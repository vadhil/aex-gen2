import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyCnzKYkXED74AFfAOE1j6aZmGQsUnL4aH0",
//   authDomain: "smart-english-training.firebaseapp.com",
//   projectId: "smart-english-training",
//   storageBucket: "smart-english-training.appspot.com",
//   messagingSenderId: "1012748043186",
//   appId: "1:1012748043186:web:f943b014a38696746d1aab",
//   measurementId: "G-CG8SST155L"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAq5eEtBZoBuXj59sgibqYfSNgaow7gmYU",
  authDomain: "aexkelarin.firebaseapp.com",
  projectId: "aexkelarin",
  storageBucket: "aexkelarin.appspot.com",
  messagingSenderId: "284821826180",
  appId: "1:284821826180:web:a6066e3429f1b7a54ff0d1",
  measurementId: "G-8P6W2EJCJ1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)