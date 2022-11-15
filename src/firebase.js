import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { redirect, useNavigate } from 'react-router-dom';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiAg4FX81po0SlC-E3U-OxV0UTdTK2SpU",

    authDomain: "find-the-country-e2fc5.firebaseapp.com",
  
    projectId: "find-the-country-e2fc5",
  
    storageBucket: "find-the-country-e2fc5.appspot.com",
  
    messagingSenderId: "952879858887",
  
    appId: "1:952879858887:web:70ab23c3551d68d649eae2",
  
    measurementId: "G-SPMJ8MRBTW"  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

async function registerAccount(email, password, confirmPassword){
    
    if(password === confirmPassword){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                user.displayName = email.split('@')[0]
                console.log(user)
                return redirect('/game')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage)
                console.error(errorCode)
            });
    }
    else{
        alert('Passwords do not match')
    }
}
async function logIn(email, password){

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage)
            console.error(errorCode)
        })
}
export {registerAccount, logIn, db, auth}