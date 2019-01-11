import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAfX2DUD-F-aduyKLoWg6qPA8Tv2qCaF-4",
  authDomain: "auth-b3296.firebaseapp.com",
  databaseURL: "https://auth-b3296.firebaseio.com",
  projectId: "auth-b3296",
  storageBucket: "auth-b3296.appspot.com",
  messagingSenderId: "371152742967"
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