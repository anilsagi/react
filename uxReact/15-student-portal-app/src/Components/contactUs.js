import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Component } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, IconButton, FormControl, FormLabel, RadioGroup, FormControlLabel, TextareaAutosize } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import '../App.css';
import { withStyles } from "@material-ui/core/styles";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';



const styles = theme => ({
  root: {
    maxWidth: 345,
    
  },
  textField: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});

toast.configure()

class Contactus extends Component {
  state = {

  }

  handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState[event.target.name] = event.target.value;

  };

  // submitClick = (event) => {

  //     if(event.target.value!==""){
  //       alert('submitted')
  //     }

  //   // this.props.history.push('AppNavBar');
  // }

  render() {
    const notify = () => {
      toast.success('successfully submitted', { position: toast.POSITION.TOP_CENTER })
    }
    const paperStyle = { padding: '25px', height: '72vh', width: 450, margin: '60px', display:'inline-block' }
    const avatarStyle = { backgroundColor: '#EE6E73', align: 'center' }
    const ButtonStyle = { backgroundColor: '#EE6E73', color: 'white', marginTop: 20 }
    const cardStyle = {display:'flex'}
    const cardStyleAdress = {padding:'20px', marginBottom:'25px'}
    const classes = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            {/*<CardMedia
              component="img"
              alt="Contemplative Reptile"
              image="http://www.giet.ac.in/img_external/slider/HomeSlide1b.JPG"
              title="Contemplative Reptile"
            />*/}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:'50px'}}>
                Godavari Institute of Engineering and Technology
          </Typography>
              <h4><i>Our Institution at Glance</i></h4>
              <Typography variant="body2" color="textSecondary" component="p">
                <i>Godavari Institute of Engineering & Technology (GIET) was established in 1998, under the aegis of Sri Koundinya Educational Society, to offer engineering education of world-class standards. Over the years, the Institute has come a long way to gain a place of repute and a preferred destination for quality engineering education marking it as the best engineering colleges in Andhra Pradesh. Located in the serene and sylvan suburbs of Chaitanya Nagar, Rajahmundry on NH-16, the sprawling 300-acre campus of GIET campus reflects the finest educational facilities around. The stately 5-storeyed structure set amid idyllic setting ensures a most congenial atmosphere for scholastic pursuit in right earnest. An ISO-certified,NBA-accredited and NAAC-A+ Grade accredited institution, GIET has many distinctions to its credit.</i>
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <div style={cardStyle}>
          <Paper elevation={10} style={paperStyle} >
            <u><h4 align='center' color='#EE6E73' >Enquiry Form</h4></u>

            
            <h4>Fill the details</h4>

            <Grid container spacing={4}>
              <TextField className='mb-10 formText' label='Name' name="Name" placeholder='Enter Name' variant="outlined" type='text' required onChange={this.handleChange}>
              </TextField>
             
                
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row className='mb-10 formText' aria-label="gender" name="gender1" onChange={this.handleChange}>
                    <FormControlLabel name='Female' value="female" control={<Radio />} label="Female" />
                    <FormControlLabel name='Male' value="male" control={<Radio />} label="Male" />
                    <FormControlLabel name='Other' value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                
              
              <TextField className='mb-10 formText' label='Contact Number' name="contactNumber" placeholder='Enter contact number' variant="outlined" type='number' required onChange={this.handleChange}>
              </TextField>
              <TextField className='mb-10 formText' label='Email' name="Email" placeholder='Enter email id' variant="outlined" type='email' required onChange={this.handleChange}>
              </TextField>
              <p><textarea label='Ask Question' name="message" variant="outlined" placeholder='Type message here...' required style={{ height: '5.1876em', width:'35em' }} onChange={this.handleChange}>
              </textarea></p>
            </Grid>
            <Button style={ButtonStyle} type='submit' variant="contained" onClick={this.submitClick} >Submit</Button>
          </Paper>
        <Paper elevation={10} style={paperStyle}>
        <Card style={cardStyleAdress} elevation={6}>
          <address>
            <p>Contact Details <i>Branch 1</i></p>
            <p>xxxxx</p>
            <p>xxxx</p>
          
            <p>xxx</p>
          </address>
        </Card>
        <Card style={cardStyleAdress} elevation={6}>
          <address>
          <p>Contact Details <i>Branch 2</i></p>
          <p>xxxxx</p>
          <p>xxxx</p>
          
          <p>xxx</p>
        </address>
      </Card>
        </Paper>
        </div>
        <hr/>
        <IconButton className='top-arrow-last' onClick={this.handleClick}><KeyboardArrowUpSharpIcon style={{ fontSize: '3.0rem' }} className='top-arrow-last' /></IconButton>

                <p style={{marginLeft:'92px', marginTop:'15px'}}>Copyright @2021 GIET Auntonomus Engineering college | Allrights reserved |Site best viewed at 1024 x 768 resolution in I.E 10+, Mozilla 40+, Google Chrome 50+</p>

      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Contactus);
//
