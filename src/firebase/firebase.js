import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAByAwogxDQ3qYsV1eP8pvGRjLEa-WmzfY",
    authDomain: "book-finder-78e62.firebaseapp.com",
    databaseURL: "https://book-finder-78e62.firebaseio.com",
    projectId: "book-finder-78e62",
    storageBucket: "book-finder-78e62.appspot.com",
    messagingSenderId: "294587160462",
    appId: "1:294587160462:web:a62750118b8d110de336df"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};