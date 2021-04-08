import React, { Component } from 'react';
import './intro.css';
import Display from './Display'

class Intro extends Component{
    state = {
        firstName: "Anil",
        lastName: "Sagi",
        Age:29,
        Address:[{
            doorNo: 222,
            street: "RamalayamStreet",
            pinCode: 533435
        }]
    }
    handleClick = () => {
        this.setState({
            firstName: "Anirudh",
            Age:35, 
            Address : [{
                doorNo: 511,
                street: "VigneswaraStreet",
                pinCode: 543258
            }]               
        })
    } 
render() {
    return (
        <div className = "container" >
            <h1 className = "headingText" >
                My name is {this.state.firstName} and age {this.state.Age}
            </h1>
            <div className = "subContainer">
                <p className = "adressText">
                    Address <br></br>
                    Door number: {this.state.Address.doorNo} <br></br>
                    Street: {this.state.Address.street} <br></br>
                    pinCode:{this.state.Address.pinCode}
                </p>
                
            </div>
            <div>
                <button className = "btn" onClick = {this.handleClick}>
                        Click here!
                    </button>
                    <Display displayData={this.state}/>                    
            </div>
        </div>
    );
}
}
export default Intro;