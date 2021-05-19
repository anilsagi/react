import React, { Component } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../App.css';
import {connect} from 'react-redux';
import * as actions from '../Actions/action'
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { StudentData } from './studentData';

toast.configure()
class Login extends Component  {
    state= {
        userName :'',
        passWord:''
        
    }
    handleChange = (e) =>{
        console.log(e);
        if(e.target.name === 'userName') {
            this.props.Login(e.target.value)
        }
         this.setState({
             [e.target.name]: e.target.value,
             userName:e.target.value,
             passWord:e.target.value
            
         });
      }

      loginClick = () =>{
        
        if(this.state.userName !=="" || this.props.isExistedUser || this.state.passWord.length >8){
            if(this.props.isExistedUser) {
                this.props.isLogged(true)
                this.props.history.push('AppHomeNavbar');
                toast.success ('successfully Loggedin', {position: toast.POSITION.TOP_RIGHT,autoClose:2000})
            }
                else   {
                    toast.error ('Contact Admin as user not existed', {position: toast.POSITION.TOP_CENTER,autoClose:false})
                }                                              
        }   
    }
    
    
    render()
     { 
        
         console.log(this.props)
        const paperStyle = { padding: '20px', height: '70vh', width: 300, margin: '30px auto' }
        const avatarStyle = { backgroundColor: '#EE6E73' }
        const ButtonStyle = { backgroundColor: '#EE6E73', color: 'white', marginTop:20 }
         return (
        <div>

            <Grid>
                <Paper elevation={10} style={paperStyle} >
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h4>Sign in</h4>
                    </Grid>
                    <p><TextField className='mb-10' label='PIN No' name="userName" variant="outlined" placeholder='Enter your pinno' fullWidth required  onChange={this.handleChange}>
                    </TextField></p>
                    <TextField className='mb-10' label='Password' name="passWord" placeholder='Enter Password' variant="outlined" type='password' fullWidth required onChange={this.handleChange}>
                    </TextField>
                    <Button className="loginBtn" style={ButtonStyle} type='submit'  variant="contained" onClick={this.loginClick} fullWidth>Login</Button>
                    <Typography>
                        <Link href="#">
                            forgot Password ?
                                </Link>
                    </Typography>
                    <Typography>Do u have Account
                                <Link href="#">
                            Sign up ?
                                </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
}
}

const isExistedUser = (state) => {
    const userName = state.login.userName;
    const studentData = state.students.studentData;
    const selectedStudent = studentData.filter(item => item.userName === userName);
    return selectedStudent.length === 0 ? false : true;
}
const mapStateToProps = state => {
    return {
        loginInfo: state.login.Logindata,
        isExistedUser: isExistedUser(state)   
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Login:(value) => dispatch ({type: actions.LOGIN,payload:value}),
        isLogged:(value) => dispatch ({type: actions.ISLOGGED,payload:value}),   
    }
  }
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
