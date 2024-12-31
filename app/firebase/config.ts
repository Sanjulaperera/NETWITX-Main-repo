// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBbSsv5XP9fEpjGHhvFHfWsX_k07VRQ3u4",
  authDomain: "netwitx-auth.firebaseapp.com",
  projectId: "netwitx-auth",
  storageBucket: "netwitx-auth.firebasestorage.app",
  messagingSenderId: "301945849380",
  appId: "1:301945849380:web:8a967546c92a58e4b57ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);