// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpQZ5-kdypbAugbWSFa6CgvinNNHTEe_Y",
  authDomain: "hostel-management-uiu-191.firebaseapp.com",
  projectId: "hostel-management-uiu-191",
  storageBucket: "hostel-management-uiu-191.appspot.com",
  messagingSenderId: "481592939849",
  appId: "1:481592939849:web:06caa563015443b9833698",
  measurementId: "G-XTQLPN8XZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth