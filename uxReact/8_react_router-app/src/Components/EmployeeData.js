import React, { Component } from "react";
import axios from 'axios'

class EmployeeData extends Component {
    state = {
        EmployeeData : []
    }

    componentDidMount = () => {
        axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001').then((res) => {
            console.log(res.data);
            this.setState({
                EmployeeData: res.data
            })
        }).catch((error) => {
            console.log('found an error');
        })
    }
   
    render(){
        const employeeList = this.state.EmployeeData.length ? (
            this.state.EmployeeData.map(employee => {
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
        return(
            <div>
            {employeeList}
            </div>
        )
    }
}
export default EmployeeData;

