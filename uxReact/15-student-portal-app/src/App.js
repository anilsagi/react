import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AppHomeNavBar from './Components/AppHomeNavBar';
import AppNavBar from './Components/AppNavBar';
import Contactus from './Components/contactUs';
import Faq from './Components/Faq';
import Home from './Components/Home';
import Login from './Components/Login';
import StudentData from './Components/studentData';
import Teachers from './Components/Teachers';
//import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {this.props.isLogged ? <AppHomeNavBar /> : <AppNavBar />}

        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/studentData' component={StudentData} />
        <Route path='/Teachers' component={Teachers} />
        <Route path='/Faq' component={Faq} />
        <Route path='/contactUs' component={Contactus} ></Route>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLogged: state.login.isLogged,
  }
}



export default connect(mapStateToProps)(App);


