import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCkpcF4JIJe_1cxe2xzRddLdsc2uuO7mz8",
    authDomain: "eddiemoon-moviesite.firebaseapp.com",
    databaseURL: 'http://eddiemoon-moviesite.firebaseio.com',
    projectId: "eddiemoon-moviesite",
    storageBucket: "eddiemoon-moviesite.appspot.com",
    messagingSenderId: "982322703608",
    appId: "1:982322703608:web:1f3d5aee814b3eefbc1f0d"
};
   
const firebase = Firebase.initializeApp(config);

export { firebase };