import React from 'react';
import {Link} from 'react-router-dom';
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes';
import {AuthUserContext} from '../Session'
import styles from './Navigation.module.css';

const Navigation = () => (
  <div className={styles.navigationBar}>
    <AuthUserContext.Consumer>
      {(authUser) => authUser ? (<NavigationAuth/>) : (<NavigationNonAuth/>)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className={styles.container}>
    <ul className={styles.siteNavigation}>
      <li>
        <Link to={ROUTES.LANDING}>Start page</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
    </ul>
    <ul className={styles.userNavigation}>
      <li>
        <SignOutButton/>
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className={styles.container}>
    <ul className={styles.siteNavigation}>
      <li>
        <Link to={ROUTES.LANDING}>Start page</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
    </ul>
  </div>
);
export default Navigation;