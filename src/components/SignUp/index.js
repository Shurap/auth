import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {withFirebase} from "../Firebase";
import {compose} from 'recompose';
import * as ROUTES from '../../constants/routes';
import styles from '../SignIn/SignIn.module.css';

const SignUpPage = () => (
  <div className={styles.window}>
    <h2 className={styles.text}>Sign Up</h2>
    <SignUpForm/>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {

  state = {...INITIAL_STATE};

  onSubmit = event => {
    event.preventDefault();
    const {username, email, passwordOne} = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then((authUser) => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({error});
      });
  };

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          autoComplete="on"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          autoComplete="on"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          autoComplete="on"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          autoComplete="on"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

withFirebase(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export {SignUpForm, SignUpLink};