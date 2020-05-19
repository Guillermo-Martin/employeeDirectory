import React from 'react';

function FilterFemale(props) {
  return(
    <div>
      
      <table>
        <tbody>
          {/* Headings */}
          <tr>
            <th>User</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Cell Phone</th>
            <th>Home Phone</th>
          </tr>

          {/* For every user in the results, map through the array and get info */}
          {props.filterFemales.map(({login, name, picture, email, location, cell, phone}) => {
            return(
              <tr key={login.uuid}>
                <td><img src={picture.large} /></td>
                <td>{name.first} {name.last}</td>
                <td>{location.street.number} {location.street.name} {location.city} {location.state} {location.postcode}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{phone}</td>
              </tr>
            );
          })}

        </tbody>
      </table>
      
    </div>
  );
}

export default FilterFemale;