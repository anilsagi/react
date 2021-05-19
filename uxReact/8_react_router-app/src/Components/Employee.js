import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EmployeeInfo = () =>{

    const [EmployeeData, SetEmployyeData] = useState({});

    useEffect(() =>{
      fetchData();
    }, []);

   const fetchData = () =>{
      axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001').then(res => {
        console.log(res.data);
        SetEmployyeData(res.data);
      })
      .catch((error) => {
        console.log('found an error');
    })
    }

    
         EmployeeData.length ? (
           EmployeeData.map(employee => {
                return (
                    <div key={employee.id}>
                    <img src={employee.imageUrl} alt='employee_image' />
                    <p>Name: {employee.firstName + employee.lastName}</p>
                    <p>Age: {employee.age}</p>
                    <p>Salary: {employee.salary}</p>
                    <p>Email: {employee.email}</p>
                    </div>
                )
            
                })
                ) : (<p>No  Posts Yet</p>)
       
    }

export default EmployeeInfo;