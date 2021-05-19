import React, { Component } from 'react';
import AddInfo from './AddInfo';
import Display from './Display';
import CardTemplate from "./CardTemplate"


class App extends Component {
  state = {
    displayData : []
  }

  addInfo = (props) =>{
    let displayData = [...this.state.displayData, props];
    this.setState({
      displayData: displayData
    })
  }

  render() {
    return (
      <div>
      <Display displayData={this.state.displayData}/>
      <AddInfo addInfo = {this.addInfo} />
      <CardTemplate/>
      </div>
    )
  }
}

export default App;


