import React, { Component } from 'react';
import hoc from './Hoc';
import Table from './Table';
import Ref from './Ref'

class App extends Component {
  state = {
    displayData : [
      {
        name: 'alex',
        age:20,
        id:1
      },
      {
        name: 'Harry',
        age:21,
        id:2
      }
    ]
  }
  render() {
    const displayDisplayList = this.state.displayData.map(info => {
      return(
        <div key= {info.id}>
          <p>{info.name}</p>
          <p>{info.age}</p>
        </div>
      )
    })
    return(
      <div>
      {displayDisplayList}
      <Table />
      <Ref/>
      </div>
    )
  }
}
export default hoc(App);