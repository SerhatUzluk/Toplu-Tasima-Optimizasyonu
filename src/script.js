import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
const firebaseConfig = {
    apiKey: "AIzaSyCuOTRSpfvvdtI1sR_fluKz3btIvbUiZhQ",
    authDomain: "toplutasimaoptimizasyonu.firebaseapp.com",
    projectId: "toplutasimaoptimizasyonu",
    storageBucket: "toplutasimaoptimizasyonu.appspot.com",
    messagingSenderId: "397883387700",
    appId: "1:397883387700:web:07902bfc4f3380c4f6bf61",
    measurementId: "G-ZHXKGSYSPT"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);


  
