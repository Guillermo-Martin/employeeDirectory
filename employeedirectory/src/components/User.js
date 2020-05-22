import React from 'react';

function User(props) {
  return (
    <div>

      {/* Table of Employees */}
      <table className="table table-striped table-bordered table-sm table-fixed">
        {/* Headers */}
        <thead>
          <tr>
            <th className="col-2"><button onClick={props.filter}>User</button></th>
            <th className="col-2"><button onClick={props.sortUsers}>Name</button></th>
            <th className="col-2">Address</th>
            <th className="col-2">Email</th>
            <th className="col-2">Cell Phone</th>
            <th className="col-2">Home Phone</th>
          </tr>
        </thead>

        <tbody>
          {/* For every user in the results, map through the array and get info */}
          {props.users.map(({login, name, picture, email, location, cell, phone}) => {
            return(
              <tr key={login.uuid}>
                <td className="col-2"><img src={picture.large} /></td>
                <td className="col-2">{name.first} {name.last}</td>
                <td className="col-2">{location.street.number} {location.street.name} {location.city} {location.state} {location.postcode}</td>
                <td className="col-2">{email}</td>
                <td className="col-2">{cell}</td>
                <td className="col-2">{phone}</td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}

export default User;


// getting random user data:  https://randomuser.me/
