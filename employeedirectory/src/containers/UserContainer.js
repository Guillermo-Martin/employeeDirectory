import React, { Component } from 'react';
import User from '../components/User';
import API from './../utils/API';


class UserContainer extends Component {
  // create a state that will hold the response data from axios call
  state = {
    result: [],
    filter: '',
    filterResultMale: [],
    filterResultFemale: [],
    showResult: [],
    alpha: false,
  }

  // add a function to make a query to https://randomuser.me/api/
  getUsers = () => {
    API.search()
      .then(res => {
        this.setState({result: res.data.results});
        this.setState({filterResultMale: res.data.results});
        this.setState({filterResultFemale: res.data.results});
        this.setState({showResult: res.data.results});
      })
      .catch(err => console.log(err));
  }

  // how to sort an array of objects: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  // ========== Functions to sort users alphabetically ==========
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

  // function to sort the array (which is currently this.state.showResult)
  // sortUsers will take the showResult array, and sort alphabetically
  // then set the state to be the sorted array
  sortUsers = () => {
    this.setState({showResult: this.state.showResult.sort(this.comparison)});
    this.setState({alpha: true})
  }

  // ========== Functions to sort users in revese alphabetical order ==========
  comparisonRev = (a, b) => {
    const userA = a.name.first.toLowerCase();
    const userB = b.name.first.toLowerCase();
    let comparison = 0;

    if(userA > userB) {
      comparison = 1;
    } else if (userA < userB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  sortUsersRev = () => {
    this.setState({showResult: this.state.showResult.sort(this.comparisonRev)});
    this.setState({alpha: false})
  }

  // if this.state.alpha is true, run sortUsers function; else run sortUsersRev function
  sortAlpha = () => {
    if(this.state.alpha === false) {
      this.sortUsers();
    } else {
      this.sortUsersRev();
    }
  }


  // filter array for male employees
  filterMale = () => {
    const filterUser = this.state.filterResultMale;
    const filteredMale = filterUser.filter(user => user.gender === "male");
    this.setState({showResult: filteredMale});
  }

  // filter array for female employees
  filterFemale = () => {
    const filterUser = this.state.filterResultFemale;
    const filteredFemale = filterUser.filter(user => user.gender === "female");
    this.setState({showResult: filteredFemale});
  }

  // the filter function (will cycle through male, female, and all employees)
  
  // if the state is male, run the filterMale function
  // if the state is female, run the filterFemale function
  filter = () => {
    // create a state to track whether to show just male, female, or all employees
    const currentFilter = this.state.filter;
    
    // if the currentFilter state is empty (showing all employees), then filter employees
    // by male employees
    if(currentFilter === ''){
      // filter by male users
      this.filterMale();
      this.setState({filter: 'male'});

    // if the currentFilter state is 'male' (showing all male employees), then filter employees
    // by female employees
    } else if(currentFilter === 'male') {
      // filter by female users
      this.filterFemale();
      this.setState({filter: 'female'});

    // if the currentFilter state is 'female' (showing all female employees), then show all employees
    } else {
      this.setState({showResult: this.state.result});
      this.setState({filter: ''});
    }
  }
  

  // will show all users on the homepage
  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        {/* User data will go in the component as props */}
        <User 
          users={this.state.showResult}
          // sortUsers={this.sortUsers}
          sortUsers={this.sortAlpha}
          filterMale={this.filterMale}
          filter={this.filter}
        />
      </div> 
    );
  }
}

export default UserContainer;
