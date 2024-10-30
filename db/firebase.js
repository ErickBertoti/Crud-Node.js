const {initializeApp} = require("firebase/app");
const {getFirestore} = require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyCgdlS-TNv_b5FUDUj5_IBurD8go8bmgKY",
  authDomain: "aula-firebase-b0aca.firebaseapp.com",
  projectId: "aula-firebase-b0aca",
  storageBucket: "aula-firebase-b0aca.appspot.com",
  messagingSenderId: "884544847522",
  appId: "1:884544847522:web:0a8865031314be89b6a1fb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;