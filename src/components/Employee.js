import React from 'react';
import {GET_VENUES_QUERY} from '../constants';
import { useQuery, gql } from '@apollo/client';




function Employee(props) {

  const { loading, error, data } = useQuery(GET_VENUES_QUERY);
  // const [data, setData] = useState( { employees: [] } );
  console.log(error, loading, data );

  return (
    <div>
      <h3>Hi Employee, you have no job.</h3>
      <a href={props.item.url}>{props.item.name}</a> - Security License: {props.item.securityLicNo}


    </div>
  );
}

export default Employee;
