import React, { Component } from "react";
import axios from 'axios'

class Home3 extends Component {
    state = {
        studentData : []
    }

    componentDidMount = () => {
        axios.get('./student.json').then((res) => {
            console.log(res.data);
            this.setState({
                studentData: res.data
            })
        }).catch((error) => {
            console.log('found an error');
        })
    }
   
    render(){
        const studentList = this.state.studentData.length ? (
            this.state.studentData.map(student => {
                return (
                    <div key={student.id}>
                        <h6>Class Component</h6>
                    <p>Name: {student.userName}</p>
                    <p>Age: {student.Age}</p>
                    <p>SSC MARKS: {student.SSC}</p>
                    <p>Semester One: {student.semesterOne}</p>
                    </div>
                )
            })
        ) : (<p>No  Posts Yet</p>)
        return(
            <div>
            {studentList}
            </div>
        )
    }
}
export default Home3;

