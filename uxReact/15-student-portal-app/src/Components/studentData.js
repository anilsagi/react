import { Grid, ListItemAvatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../Actions/action';
import '../App.css'


class StudentData extends Component {
    state = {
        userName: "",
    };


    render() {
        const paperStyle = { padding: '20px', height: '50vh', width: 800, margin: '10px auto' , marginTop: '25px' }
        const { studentBasicData, studentPrequalification, studentEnggMarks } = this.props;

        return (
            <div>
                <h3 style={{textAlign:'center', color:'green', marginTop:'50px'}}><i>STUDENT PROFILE</i></h3>
                <Paper elevation={8} style={paperStyle} >
                    <table className='tableOne'>
                        <caption>Your Profile</caption>
                        <thead>
                            <th>Description</th>
                            <th>Information</th>
                        </thead>
                        <tbody>
                            {Object.entries(studentBasicData).map(([key, value]) => {

                                return (<React.Fragment><tr><td>{key}</td><td>{value}</td></tr></React.Fragment>);

                            })}
                        </tbody>
                    </table>
                    <table className='tableTwo'>
                        <caption>Pre-Qualification details</caption>

                        <thead>
                            <th>Description</th>
                            <th>Information</th>
                        </thead>
                        <tbody>
                            {Object.entries(studentPrequalification).map(([key, value]) => {

                                return (<React.Fragment><tr><td>{key}</td><td>{value}</td></tr></React.Fragment>);

                            })}
                        </tbody>
                    </table>
                    <table className='tableThree'>
                        <caption>Engineering Academic Records</caption>
                        <thead>
                            <th>Description</th>
                            <th>Information</th>
                        </thead>
                        <tbody>
                            {Object.entries(studentEnggMarks).map(([key, value]) => {

                                return (<React.Fragment><tr><td>{key}</td><td>{`${value}%`}</td></tr></React.Fragment>);

                            })}
                        </tbody>
                    </table>
                    </Paper>          
                <br/>
                <br/><br/>
                <hr/>
                <p style={{marginLeft:'92px', marginTop:'30px'}}>Copyright @2021 GIET Auntonomus Engineering college | Allrights reserved |Site best viewed at 1024 x 768 resolution in I.E 10+, Mozilla 40+, Google Chrome 50+</p>
            </div>

        );

    }
}

const getSelectedStudent = (state) => {
    const userName = state.login.userName;
    const studentData = state.students.studentData;
    return studentData.find(item => item.userName === userName);
};

const getSelectedStudentBasicData = (state) => {
    const selectedStudent = getSelectedStudent(state);
    return {
        UserName: selectedStudent.userName,
        name: selectedStudent.Name,
        age: selectedStudent.Age,
        branch: selectedStudent.branch
    }
}

const getSelectedStudentPrequalification = (state) => {
    const selectedStudent = getSelectedStudent(state);
    return {
        sscMarks: selectedStudent.SSC,
        interMarks: selectedStudent.Interyear,
        diplomaMarks: selectedStudent.Diploma
    }
}

const getSelectedStudentEnggMarks = (state) => {
    const selectedStudent = getSelectedStudent(state);
    return {
        semOne: selectedStudent.semesterOne,
        semTwo: selectedStudent.semesterTwo,
        semThree: selectedStudent.semesterThree,
        semFour: selectedStudent.semesterFour,
        semFive: selectedStudent.semesterFive,
        semSix: selectedStudent.semesterSix,
        semSeven: selectedStudent.semesterSeven,
        semEight: selectedStudent.semesterEight
    }
}

const mapStateToProps = state => {
    return {
        StudentInfo: state.students.studentData,
        selectedStudent: getSelectedStudent(state),
        studentBasicData: getSelectedStudentBasicData(state),
        studentPrequalification: getSelectedStudentPrequalification(state),
        studentEnggMarks: getSelectedStudentEnggMarks(state)

    }
}

export default connect(mapStateToProps)(StudentData);