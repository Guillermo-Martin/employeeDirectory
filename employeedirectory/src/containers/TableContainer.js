import React, { Component } from 'react';
import Table from './../components/Table/Table'

class TableContainer extends Component {
  render() {
    return (
      <div>
        <p>You're inside of the tablecontainer component</p>
        <Table />
      </div>
      
    );
  }
}

export default TableContainer;