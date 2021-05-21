// import base (core) feature of firebase
import firebase from 'firebase/app';

//to access the database
import 'firebase/firestore';

//authentication features
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeneHhCU-df0LCdgcdivg7DqusI3GaPng",
    authDomain: "react-redux-projectplan-e4425.firebaseapp.com",
    projectId: "react-redux-projectplan-e4425",
    storageBucket: "react-redux-projectplan-e4425.appspot.com",
    messagingSenderId: "886452261124",
    appId: "1:886452261124:web:65895fb5c24d439cd2c051"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;