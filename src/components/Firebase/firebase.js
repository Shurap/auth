import app from 'firebase/app';

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
  }
}

export default Firebase;