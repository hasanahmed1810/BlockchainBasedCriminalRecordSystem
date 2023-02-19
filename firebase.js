// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyBSHPl8XN0-Y2hv1D5yLyzoZJc4Fklv4",
  authDomain: "fyp-2022-cdf57.firebaseapp.com",
  projectId: "fyp-2022-cdf57",
  storageBucket: "fyp-2022-cdf57.appspot.com",
  messagingSenderId: "934557347928",
  appId: "1:934557347928:web:9edf6289f3122985ef9a2d",
  measurementId: "G-3HQPFJLWLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

if (app.name && typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}
