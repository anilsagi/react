import React, { Component }  from 'react';
import './App.css';

class Table extends Component {
  render() {
      return(
        <table className = "tablestyling"> 
            <thead> 
                Employee Details
            </thead>
             <th> 
                <Columns/>
            </th>
            <tr>
                <Row/>
            </tr>
        </table>
          
      )
  }
}

  class Columns extends Component {
    render() {
        return (
        <React.Fragment>
        <td>Name</td>
        <td>Age</td>
        <td>Designation</td>
        </React.Fragment>
        )
    }
}

class Row extends Component {
    render() {
        return (
        <React.Fragment>
            <tr>
                <td>Anil</td>
                <td>23</td>
                <td>UI Developer</td>
            </tr>
            <tr>
                <td>Chandhu</td>
                <td>23</td>
                <td>UI Developer</td>
            </tr>
            <tr>
                <td>Eswar</td>
                <td>23</td>
                <td>UI Developer</td>
            </tr>
            <tr>
                <td>Jawsanth</td>
                <td>23</td>
                <td>UI Developer</td>
            </tr>
            <tr>
                <td>Jagadeesh</td>
                <td>23</td>
                <td>UI Developer</td>
            </tr>
        </React.Fragment>
        )
    }
}
export default Table;