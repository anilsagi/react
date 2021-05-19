import React,{Component} from 'react';
import Display from "./Display";


class Employee extends Component {
    state = {
        employeeId: 9999,
        namE:"Anil",
        Age:28,
        city:"Rajahmundry",
        Designation:"UI Developer",
        random:0
    }
    onmouseover= ()=> {
        alert("employee namE :"+this.state.namE+"employee Age :"+this.state.Age)
        }
        //alert(<div>"employee namE :"+ {this.state.namE},+ "Age :" +{this.state.Age}</div>)}
        /*click = () =>{ Math.random()

        }*/
        handleClick() {
            const rand = Math.floor(Math.random());
            this.setState({ random: this.state.random + rand });
          }

    render() {
  
        return(
            <div>
            <p onMouseEnter={this.onmouseover}>Employee id: {this.state.employeeId}</p>
            <button onClick={this.handleClick.bind(this)}>Generate Random Number</button>
            <div>Random Number between "1-100" is: {this.state.random}</div>
            <Display employeeId={this.state.employeeId} 
                    namE={this.state.namE}
                    Age={this.state.Age}
                    city={this.state.city}
                    Designation={this.state.Designation}/>
            </div>
        )
    }  
}
export default Employee;