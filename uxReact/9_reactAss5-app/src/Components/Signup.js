import React, { Component } from 'react';
import '../App.css'
import { FormControl,Input, FormHelperText,InputLabel  } from '@material-ui/core';


class Signup extends Component {
  state = {
      name: '',
      dateofBirth: null,
      emailId: '',
      contactNo:null,
      error: {
          nameError: '',
          dateofBirthError: '',
          emailIdError: '',
          contactNoError: '',

      },
      formValid: false
  }
  
  handleChange = (e) =>{
    console.log(e);
    this.validateForm(e.target);
     this.setState({
         [e.target.id]: e.target.value
     });
  }

  handleSubmit = (e) =>{
      // e.preventDefault();
    if(this.state.formValid === true){
        window.alert('Account is successfully created')
    }
    else {
        window.alert('enter correct values')
    }
  }

  validateForm = (val) => {
      let nameError = this.state.error.nameError;
      let dateofBirthError = this.state.error.dateofBirthError;
      let emailIdError = this.state.error.emailIdError;
      let contactNoError = this.state.error.contactNoError;
      let formValid = this.state.formValid;
      if(val.id === 'name'){
          if((val.value).trim() === '')
          {
              nameError = 'Please Enter Name';
              formValid = false
          }
          else{
              nameError = '';
              formValid = true;
          }
      }

      if(val.id === 'dateofBirth'){
          if(val.value === ''){
            dateofBirthError = 'Please Enter DOB';
            formValid = false
          }
          else{
            dateofBirthError = '';
            formValid = true;
        }
      }

      if(val.id === 'emailId'){
        if(val.value === ''){
            emailIdError = 'Please Enter Valid Email id';
          formValid = false
        }
        else{
            emailIdError = '';
          formValid = true;
      }
    }

    if(val.id === 'contactNo'){
        if(val.value === ''){
            contactNoError = 'Please Enter Contact No';
          formValid = false
        }
        else{
            contactNoError = '';
          formValid = true;
      }
    }
   
      this.setState({
          [val.id]: val.value,
          error: {
              nameError: nameError,
              dateofBirthError: dateofBirthError,
              emailIdError:emailIdError,
              contactNoError:contactNoError
          },
          formValid: formValid
      })
  }

  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
        <label style={{width: "30%"}} htmlFor="name">Name</label>
        <input style={{width: "50%"}} type="text" id="name" onChange={this.handleChange}  required />
        <p>{this.state.error.nameError}</p>

        <label htmlFor="dateofBirth">dateofBirth</label>
        <input style={{width: "50%"}} type="date" id="dateofBirth" onChange={this.handleChange} required/>
        <p>{this.state.error.dateofBirthError}</p>

        <label htmlFor="emailId">Email-Id</label>
        <input style={{width: "50%"}} type="email" id="emailId" onChange={this.handleChange} required/>
        <p>{this.state.error.emailIdError}</p>

        <label htmlFor="contactNo">Contact Number</label>
        <input style={{width: "50%"}}type="number" id="contactNo" onChange={this.handleChange}  maxLength= "10" required />
        <p>{this.state.error.contactNoError}</p>

        <label htmlFor="Intro">Comments </label>
        <input style={{width: "50%"}} type="textarea" id="Intro" onChange={this.handleChange} required />
        
        <button>Submit</button>
      </form>
      <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
      </div>
    )
  }
}

export default Signup;


