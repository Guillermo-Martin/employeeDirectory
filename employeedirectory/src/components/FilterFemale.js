import React from 'react';

function FilterFemale(props) {
  return(
    <button onClick={props.filterFemales}>Get All Female Employees</button>
  );
}

export default FilterFemale;