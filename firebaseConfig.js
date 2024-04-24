import { initializeApp, getApps } from "firebase/app"
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAn5dJ7rtIH_7fLQYlIwKHl1xQs7FkV81Y",
    authDomain: "brew-its.firebaseapp.com",
    databaseURL: "https://brew-its-default-rtdb.firebaseio.com",
    projectId: "brew-its",
    storageBucket: "brew-its.appspot.com",
    messagingSenderId: "294351439178",
    appId: "1:294351439178:web:f02d78f9f4488495eeadb3",
    measurementId: "G-HDYTT02RDR"
}
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const storage = getStorage(app);

export {app, db , storage }
