import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  Appbar: {
    backgroundColor: '#EE6E73',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title1: {
    // flexGrow: 1,
    color: 'white',
    // lineHeight: 2,
    fontSize: 18,
    // borderBottom: 'none',
    textDecoration: 'none'
  },
}));

function AppNavBar(props) {
  console.log(props, "Nav")
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.Appbar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to Student Portal !
          </Typography>
          {/*<Button color="inherit"><Link to ='/'>Home</Link></Button>
                  <Button color="inherit"><Link to ='/Teachers'>Teachers Contact</Link></Button>
                <Button color="inherit"><Link to ='/Faq'>FAQ</Link></Button>*/}
          <Button><Link className={classes.title1} to='/Login'>Student<span className="powerText"><sup>LOGIN</sup></span></Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNavBar;
