import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDBCL8LJ50xTbW7UkvN6AKiPST0acdfY0Y",
  authDomain: "travelingoptimization.firebaseapp.com",
  projectId: "travelingoptimization",
  storageBucket: "travelingoptimization.appspot.com",
  messagingSenderId: "621128430008",
  appId: "1:621128430008:web:71d457c489020cdb761f4d",
  measurementId: "G-3KQJPJF7HM"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);


  
