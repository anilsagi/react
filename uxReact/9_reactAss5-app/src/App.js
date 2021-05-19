import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Navbar from './Navbar';
import Contact from './Components/Contact';
// import Signup from './Components/Signup'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path = '/' component = {Home} />
          <Route path = '/Contact' component = {Contact} />
          <Route path = '/Signup' component = {Signup} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;

