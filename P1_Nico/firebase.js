import { firebaseConfig } from "./credenciales.js";
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const {db} = {getFirestore}(app);