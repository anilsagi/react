import React, { Component } from 'react';

class AddInfo extends Component {
  state = {
      name: '',
      dateofBirth: null,
      emailId: '',
      contactNo:null,
      timePassed: false,
      error: {
          nameError: '',
          dateofBirthError: '',
          emailIdError: '',
          contactNoError: '',

      },
      formValid: false
  }
  componentDidMount() {
   setTimeout( () => {
       this.handleSubmit();
    },1000);
  }
  
  setTimePassed() {
     this.setState({timePassed: true});
  }
  

  handleChange = (e) =>{
    console.log(e);
    this.validateForm(e.target);
     this.setState({
         [e.target.id]: e.target.value
     });
  }

  handleSubmit = (e) =>{
      e.preventDefault();
    if(this.state.formValid === true){
        this.props.addInfo(this.state);
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
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={this.handleChange}  required />
        <p>{this.state.error.nameError}</p>

        <label htmlFor="dateofBirth">dateofBirth</label>
        <input type="text" id="dateofBirth" onChange={this.handleChange} required/>
        <p>{this.state.error.dateofBirthError}</p>

        <label htmlFor="emailId">Email-Id</label>
        <input type="email" id="emailId" onChange={this.handleChange} required/>
        <p>{this.state.error.emailIdError}</p>

        <label htmlFor="contactNo">Contact Number</label>
        <input type="text" id="contactNo" onChange={this.handleChange}  maxLength= "10" required />
        <p>{this.state.error.contactNoError}</p>

        <label htmlFor="Intro">Tell me about yourself</label>
        <input type="textarea" id="Intro" onChange={this.handleChange} required />
        
        <button>Submit</button>
      </form>
      </div>
    )
  }
}

export default AddInfo;


