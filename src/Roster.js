import React from "react";

function Roster({ detailed, roster }) {
  let table;
  
  switch(true) {
    case detailed === false:
      table = (
      <ol>
        {roster.map(({firstName}) => 
        <li>{firstName}</li>
        )}
      </ol>
      )
      break;
    default: {
      table = (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
        {roster.map(({id, firstName, lastName, location}) => <tr key={firstName}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{location}</td>
            </tr>)}
          </tbody>
        </table>
      )
    }
      break;
  }
  return table;
}

export default Roster;
