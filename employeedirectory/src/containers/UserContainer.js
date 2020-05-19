import React, { Component } from 'react';
import User from '../components/User';
import API from './../utils/API';


class UserContainer extends Component {
  // create a state that will hold the response data from axios call
  state = {
    result: [],
  }

  // add a function to make a query to https://randomuser.me/api/
  getUsers = () => {
    API.search()
      .then(res => {
        console.log(res.data.results);
        this.setState({result: res.data.results});
      })

      .catch(err => console.log(err));
  }

  // will show users on the homepage
  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <div>
        {/* User data will go in the component as props */}
        <User users={this.state.result}/>
      </div>
      
    );
  }
}

export default UserContainer;
