"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Page = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
    axios.get(apiUrl)
      .then((response) => {
        setEmployees(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
       console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.employee_name} -
               {employee.employee_age}
                years old
              <br></br>
              <Link href={`/dashboard/${employee.id}`}>
              View Details
            </Link>
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
