import React from 'react';

function Employee(props) {
  return (
    <div>
      <a href={props.item.url}>{props.item.name}</a> - Security License: {props.item.securityLicNo}
    </div>
  );
}

export default Employee;
