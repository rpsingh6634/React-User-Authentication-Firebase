import { useEffect, useState } from "react";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG_odHJ8i4NyynBWFZtQTXtdgQuEU6_PU",
  authDomain: "logicism-auth-59f30.firebaseapp.com",
  projectId: "logicism-auth-59f30",
  storageBucket: "logicism-auth-59f30.appspot.com",
  messagingSenderId: "326503189976",
  appId: "1:326503189976:web:e83f35aeaa37925fec76ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
    return signOut(auth);
}
//custom Hook

export function useAuth(){
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
    const unsub = onAuthStateChanged(auth, user =>  setCurrentUser(user));
    return unsub;
    }, [])
    return currentUser;
}