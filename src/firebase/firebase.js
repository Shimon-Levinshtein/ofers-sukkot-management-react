import firebase from 'firebase/app';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBCFKkXFJr7mePm4Ga3dsq5jAN4g4g-oJo",
    authDomain: "ofers-sukkot-data.firebaseapp.com",
    databaseURL: "https://ofers-sukkot-data-default-rtdb.firebaseio.com",
    projectId: "ofers-sukkot-data",
    storageBucket: "ofers-sukkot-data.appspot.com",
    messagingSenderId: "622082917386",
    appId: "1:622082917386:web:835451ac37fae28bb64bf3",
    measurementId: "G-XSYC0CSGJM"
  };

  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const storage = firebase.storage();

  export  {
    storage, firebase as default
  }