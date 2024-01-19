// import firebase from "firebase/app"
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDcg23y-xodnWCdah3xmDNURmpcWjZUnNQ",
    authDomain: "pigeon-chat-app-39bf4.firebaseapp.com",
    projectId: "pigeon-chat-app-39bf4",
    storageBucket: "pigeon-chat-app-39bf4.appspot.com",
    messagingSenderId: "71562119813",
    appId: "1:71562119813:web:be6b898ddce0215dc8f7ec",
}).auth();