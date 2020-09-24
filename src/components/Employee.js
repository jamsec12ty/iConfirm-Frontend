import React, {useState} from 'react';
import {GET_EMPLOYEE_QUERY} from '../constants';
import { useQuery, gql } from '@apollo/client';




function Employee(props) {

  const { loading, error, data } = useQuery(GET_EMPLOYEE_QUERY);
  const [employeeData, setData] = useState( { employees: [] } );
  console.log(error, loading, data );

  return (
    <div>

      {console.log(props) }



    </div>
  );
}

export default Employee;
