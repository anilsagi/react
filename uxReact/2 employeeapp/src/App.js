import React, { Component } from 'react';
// import Display from './Display';
import Employee from './TryApp';

class App extends Component {
  //try to put wrong datatype and see how your propTypes work
  state = {
    firstName: "alex",
    age: 45,
    arr: [1,2,3],
    strOrNum: 20
  }

  //try to no pass a prop to Display and see how defaultProps work
  render() {
    return (
      <div>
      <Display firstNa={this.state.firstName} agE={this.state.age} arr={this.state.arr} strOrNum={this.state.strOrNum}/>
      </div>
    )
  }
}

export default App;
