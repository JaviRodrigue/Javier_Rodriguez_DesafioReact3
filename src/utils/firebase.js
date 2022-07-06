import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYuDYW4Yu97vgCrec3s70AFvXg7Hd8QC8",
    authDomain: "coderdesafio11.firebaseapp.com",
    projectId: "coderdesafio11",
    storageBucket: "coderdesafio11.appspot.com",
    messagingSenderId: "994340805499",
    appId: "1:994340805499:web:414d732d7d8f3e0d30fbde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const collectionProd = collection(db, "products");