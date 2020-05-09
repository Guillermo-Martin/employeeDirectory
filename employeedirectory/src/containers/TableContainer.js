import React, { Component } from 'react';
import Table from './../components/Table/Table';

class TableContainer extends Component {


  render() {
    return (
      <div>
        <p>You're inside of the TableContainer component</p>
        <Table 
          getEmployees={this.getEmployees}
        />
      </div>
      
    );
  }
}

export default TableContainer;

// NOTES

// this should query the database
