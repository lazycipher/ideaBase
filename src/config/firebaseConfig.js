import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBlgwpCyhnh7vfhtbGh61iQRRo_tzOC02o",
    authDomain: "ideabase-a309e.firebaseapp.com",
    databaseURL: "https://ideabase-a309e.firebaseio.com",
    projectId: "ideabase-a309e",
    storageBucket: "ideabase-a309e.appspot.com",
    messagingSenderId: "406806781251"
  };
firebase.initializeApp(config);

export default firebase;
