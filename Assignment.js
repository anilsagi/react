import React, { Component } from 'react';
import './intro.css';
import Display from './Display';

class Assignment extends Component{
    state = {
        displayInfo:[{
            name: "praveen Reddy",
            age: 37,
            id: 1
        },{
            name: "Anil Kumar",
            age: 29,
            id: 2
        }],
    }
render() {
    return (
        <div className = "container" >
            <div className = "subContainer">
            <Display displayInfo = {this.state.displayInfo}/>
            </div>
        </div>
    )
}
}
export default Assignment;