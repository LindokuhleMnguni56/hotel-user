// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import{getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA8Di2nES1ZAwLOf8hjI_ojWoqVeJWzjs",
  authDomain: "hotel-application-16dc8.firebaseapp.com",
  projectId: "hotel-application-16dc8",
  storageBucket: "hotel-application-16dc8.appspot.com",
  messagingSenderId: "693955779812",
  appId: "1:693955779812:web:cff542ea7be2558bd760f1",
  measurementId: "G-XDKZXK99E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};



