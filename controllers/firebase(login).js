//vincular con FIREBASE (tocarle la puerta a fireBase)
  
  //las funciones por convencion deben nombrarse en infinitivo
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAO2JOdY4v7F6pyvi2Nfl1PveywaMC9qPE",
    authDomain: "logincomfama.firebaseapp.com",
    projectId: "logincomfama",
    storageBucket: "logincomfama.appspot.com",
    messagingSenderId: "694209297290",
    appId: "1:694209297290:web:4eb460bae06367e0bba673",
    measurementId: "G-3MJWZ3T896"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);