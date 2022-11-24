// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyAA4rcujtBiCEXrWVLLI8cAqq7HVJ6lBec",
    authDomain:"b612-used-productsresaleclient.firebaseapp.com",
    projectId: "b612-used-productsresaleclient",
    storageBucket: "b612-used-productsresaleclient.appspot.com",
    messagingSenderId: "316035837097",
    appId:"1:316035837097:web:391ddcd30e547fc2024db8",
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;