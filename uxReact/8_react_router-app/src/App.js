import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
// import EmployeeData from './Components/EmployeeData';
import DummyData from './Components/Dummydata';
import Post from './Components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Route exact path = '/' component = {Home} />
      <Route path = '/about' component = {About}/>
      <Route path = '/contact' component = {Contact}/>
      {/*<Route path='/EmployeeData' component={EmployeeData}/>*/}
      <Route exact path='/dummyData' component={DummyData}/>
      <Route path='/dummyData/:post_id' component={Post}/>
      </div>
      </BrowserRouter>
    );
  }

}
export default App;
