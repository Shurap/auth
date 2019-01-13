import React, {Component} from 'react';
import {withAuthorization} from '../Session'
import styles from './Home.module.css';

class HomePage extends Component {

  state = {
    loading: false,
    users: [],
  };

  componentDidMount() {


    this.setState({loading: true});

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      console.log('userList', usersList);

      this.setState({
        users: usersList,
        loading: false,
      });
    });

    console.log(this.props.authUser.email);
    console.log(this.props.authUser.uid);
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
        <h3>All people registered on this page:</h3>
        {this.state.loading && <h2>Loading...</h2>}
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

const UserList = ({users}) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
        {/*<span>*/}
          {/*<strong>E-Mail:</strong> {user.email}*/}
        {/*</span>*/}
      </li>
    ))}
  </ul>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);