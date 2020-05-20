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

  // compare function to sort users alphabetically
  comparison = (a, b) => {
    const userA = a.name.first.toLowerCase();
    const userB = b.name.first.toLowerCase();
   
    let comparison = 0;
    if(userA > userB) {
      comparison = 1;
    } else if (userA < userB) {
      comparison = -1;
    }
    return comparison;
  }

  // how to sort an array of objects: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  // function to sort the array (which is currently this.state.result)
  // sortUsers will take the result array, and sort alphabetically
  // then set the state to be the sorted array
  sortUsers = () => {
    this.setState({result: this.state.result.sort(this.comparison)});
    console.log("you clicked the name button");
  }

  // will show users on the homepage
  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <div>
        {/* User data will go in the component as props */}
        <User 
          users={this.state.result}
          sortUsers={this.sortUsers}
        />
      </div>
      
    );
  }
}

export default UserContainer;
