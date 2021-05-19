import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Button, IconButton, AppBar  } from '@material-ui/core';
import { Link, withRouter} from 'react-router-dom';
import * as actions from '../Actions/action'
import { connect } from 'react-redux';
import '../App.css';


const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#red',
  },
  appBar: {
    backgroundColor: '#red',
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  // title1: {
  //   // flexGrow: 1,
  //   color:'green',
  //   lineHeight:2,
  //   fontSize:20,
  //   // borderBottom: 'none',
  //   textDecoration:'none'
  // },
};

class AppHomeNavBar extends Component {

  logoutHandler = () => {
    this.props.history.push('login');
    this.props.isLogged(false);
  }

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} >
        <div className = 'appBar-btns'>
             
          {/* <Button><Link className='link' to='/'>Home</Link></Button> */}
          <Button color="inherit"><Link className='link' to='/studentData'>Student Profile</Link></Button>

           <Button className={classes.title1} color="inherit"><Link className='link' to='/Teachers'>Teachers Contact</Link></Button>
            {/* <Button color="inherit"><Link className='link' to='/studentData'>Student Profile</Link></Button> */}
            <Button><Link className='link' to='/Faq'>FAQ</Link></Button>
             <Button><Link className='link' to='/contactUs'>Contact us</Link></Button>

            <Button color="inherit" onClick={this.logoutHandler} style={{float:'right'}}>Logout</Button></div>
            {/*<a href = '/AppNavBar'>Logout</a>
            <Alert variant="outlined" severity="success" className= 'AppHomesuccess'>
              Successfully Logged in ! </Alert>*/}
         
        </AppBar>
        <Typography variant="h6" className={classes.title}>
              Welcome to Student Portal !
            </Typography>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    loginInfo: state.login.Logindata,
    //isLogged: state.login.isLogged,   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLogged: (value) => dispatch({ type: actions.ISLOGGED, payload: value }),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppHomeNavBar)));
