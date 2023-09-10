// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5p2297YpjgyZCyv_KACWGRSwh4boFcAY",
  authDomain: "netflixgpt-477ff.firebaseapp.com",
  projectId: "netflixgpt-477ff",
  storageBucket: "netflixgpt-477ff.appspot.com",
  messagingSenderId: "590963757267",
  appId: "1:590963757267:web:802e8fa7f3fc78ba2e8426",
  measurementId: "G-ELV43MM8RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();