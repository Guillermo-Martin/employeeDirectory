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

  componentDidMount() {
    this.filterFemales();
  }
  
  render() {
    return(
      <FilterFemale filterFemales={this.state.result} />
    )
  }
}

export default FilterFemaleContainer;