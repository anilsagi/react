import React, { Component } from 'react';

class AddInfo extends Component {
  state = {
      name: '',
      age: null,
      designation: '',
      error: {
          nameError: '',
          ageError: ''
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
      let ageError = this.state.error.ageError;
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

      if(val.id === 'age'){
          if(val.value === ''){
            ageError = 'Please Enter Age';
            formValid = false
          }
          else{
            ageError = '';
            formValid = true;
        }
      }

      this.setState({
          [val.id]: val.value,
          error: {
              nameError: nameError,
              ageError: ageError
          },
          formValid: formValid
      })
  }

  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={this.handleChange} />
        <p>{this.state.error.nameError}</p>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" onChange={this.handleChange} />
        <p>{this.state.error.ageError}</p>
        <label htmlFor="designation">Designation</label>
        <input type="text" id="designation" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
      </div>
    )
  }
}

export default AddInfo;


