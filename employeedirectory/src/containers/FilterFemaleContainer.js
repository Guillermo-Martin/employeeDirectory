import React, { Component } from 'react';
import API from './../utils/API';
import FilterFemale from './../components/FilterFemale';

class FilterFemaleContainer extends Component {

  state = {
    result: [],
  }

  filterFemales = () => {
    API.filterFemale()
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

  componentDidMount() {
    this.filterFemales();
  }
  
  render() {
    return(
      <FilterFemale 
        filterFemales={this.state.result} 
        sortUsers={this.sortUsers}
      />
    )
  }
}

export default FilterFemaleContainer;