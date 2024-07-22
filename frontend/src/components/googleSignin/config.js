// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from"firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAwuOHxaQw1xavZ2pOSvRRTPgAfyrJclxU",
//   authDomain: "my-first-4a4e3.firebaseapp.com",
//   projectId: "my-first-4a4e3",
//   storageBucket: "my-first-4a4e3.appspot.com",
//   messagingSenderId: "536976522936",
//   appId: "1:536976522936:web:bfca68ae0274dc6463be4d",
//   measurementId: "G-KPM98EHPKJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
// export {auth,provider};




import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from"firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAwuOHxaQw1xavZ2pOSvRRTPgAfyrJclxU",
  authDomain: "my-first-4a4e3.firebaseapp.com",
  projectId: "my-first-4a4e3",
  storageBucket: "my-first-4a4e3.appspot.com",
  messagingSenderId: "536976522936",
  appId: "1:536976522936:web:bfca68ae0274dc6463be4d",
  measurementId: "G-KPM98EHPKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};