import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

<<<<<<< HEAD
// const config = {
//   apiKey: "AIzaSyAfX2DUD-F-aduyKLoWg6qPA8Tv2qCaF-4",
//   authDomain: "auth-b3296.firebaseapp.com",
//   databaseURL: "https://auth-b3296.firebaseio.com",
//   projectId: "auth-b3296",
//   storageBucket: "auth-b3296.appspot.com",
//   messagingSenderId: "371152742967"
// };
=======
>>>>>>> d0df69bfed26de7c16c36244e9dd53d32e3f17a0

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  user = (uid) => this.db.ref(`user/${uid}`);

  users = () => this.db.ref('user');

}

export default Firebase;