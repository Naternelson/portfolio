// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbGVGDcn0lny71KhhJ3-r7rnc-Ve-snjg",
  authDomain: "proje-435f7.firebaseapp.com",
  projectId: "proje-435f7",
  storageBucket: "proje-435f7.appspot.com",
  messagingSenderId: "543010099261",
  appId: "1:543010099261:web:c7f281dc8974751a1a5a54",
  measurementId: "G-8Q65BLLNVK"
};

// Initialize Firebase
export default () => initializeApp(firebaseConfig);