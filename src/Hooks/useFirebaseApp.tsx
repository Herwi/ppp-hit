import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJQyE0OzImU0AHUcSSvfbUAK64gLE2X_8",
  authDomain: "ppp-hit.firebaseapp.com",
  projectId: "ppp-hit",
  storageBucket: "ppp-hit.appspot.com",
  messagingSenderId: "48492254192",
  appId: "1:48492254192:web:c811ff925e4d55fcb60335",
};

const firebaseApp = initializeApp(firebaseConfig);

export default () => firebaseApp;
