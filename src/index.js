import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Firebase, {FirebaseContext} from './components/Firebase'
require('dotenv').config();

console.log('---------', process.env.DB_USER);

console.log('!!!!!!!!!!!!!!', process.env.REACT_APP_API_KEY)

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App/>
  </FirebaseContext.Provider>, document.getElementById('root')
);
