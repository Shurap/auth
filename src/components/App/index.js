import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';

import {withAuthentication} from '../Session';

const App = () => (
      <BrowserRouter>
        <div>
          <Navigation/>

          <Route exact path={ROUTES.LANDING} component={LandingPage}/>
          <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
          <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
          <Route path={ROUTES.HOME} component={HomePage}/>
        </div>
      </BrowserRouter>
    );

export default withAuthentication(App);