import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCalH5fFO_V7pG3mBGrSs-gAyUZAZfTpGs",
  authDomain: "jerel-lopez-portfolio.firebaseapp.com",
  projectId: "jerel-lopez-portfolio",
  storageBucket: "jerel-lopez-portfolio.appspot.com",
  messagingSenderId: "641883828160",
  appId: "1:641883828160:web:3969927d3d147518fde225",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
