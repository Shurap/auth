import React, {Component} from 'react';
import {withAuthorization} from '../Session'
import styles from './Home.module.css';

class HomePage extends Component {

  state = {
    loading: false,
    users: {},
  };

  componentDidMount() {

    this.setState({loading: true});

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).filter((key) => {
        return key === this.props.authUser.uid;
      }).map(key => ({...usersObject[key], uid: key}));

      this.setState({
        users: usersList[0],
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <div className={styles.window}>
        <h2>Welcome to Home page</h2>
        <h2>(for authorized users only)</h2>
        <br/>
        <h3>Your data:</h3>
        {this.state.loading && <h2>Loading...</h2>}
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

const UserList = ({users}) => (
  <div>
    <span>
      <strong>Username: </strong> {users.username}
    </span>
    <br/>
    <span>
      <strong>E-Mail: </strong> {users.email}
    </span>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);