"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

type Employee = {
  id: number;
  employee_name: string;
 
};

function Page() {
  const [employees, setEmployees] = useState<Employee[]>([]); // Specify the type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
        const response = await axios.get(apiUrl);
        setEmployees(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>{employee.employee_name}  <Link href={`/dashboard/${employee.id}`}>
            View Details
          </Link></li>

          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
