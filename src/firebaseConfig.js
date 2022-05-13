import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAWbYuUQk55zY42feCTWJHI4OyzAypWYz0",
    authDomain: "react-firebase-crud-7780d.firebaseapp.com",
    projectId: "react-firebase-crud-7780d",
    storageBucket: "react-firebase-crud-7780d.appspot.com",
    messagingSenderId: "303508771481",
    appId: "1:303508771481:web:719ba6c46924e6ef61de08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;