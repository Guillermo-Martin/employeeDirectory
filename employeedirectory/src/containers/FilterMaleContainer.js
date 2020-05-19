import React, { Component } from 'react';
import API from './../utils/API';
import FilterMale from './../components/FilterMale';

class FilterMaleContainer extends Component {

  state = {
    result: [],
  }

  filterMales = () => {
    API.filterMale()
      .then(res => {
        console.log(res.data.results);
        this.setState({result: res.data.results});
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.filterMales();
  }
  
  render() {
    return(
      <FilterMale filterMales={this.state.result} />
    )
  }
}

export default FilterMaleContainer;