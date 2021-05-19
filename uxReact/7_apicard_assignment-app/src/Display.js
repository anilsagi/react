import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardContent, Typography,Button } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

class Display extends Component
 {
  state = {
    post: [],
    hide:false
  }
  componentDidMount () {
    this.fetchData();
  }

  fetchData = () =>
   {
    axios.get('https://jsonplaceholder.typicode.com/users/2').then(res => {
      console.log(res);
      this.setState({
        post: res.data
      })
    })
  }
    onClick=() => {
      this.setState ({
       hide : true
    })
  }
  
  render()
   {
    return (
      <div>
    {!this.state.hide ? 
            <Card className= "Card2" style={{backgroundColor:"#d500f9"}}>
              <CardContent>
              <Typography className="headingCard"><i>USER 2 DATA</i></Typography>
              <Typography><b> My Name is : </b>{this.state.post.name} </Typography>
              <Typography><b> My Username is : </b>{this.state.post.username} </Typography>
              <Typography><b> My PhoneNumber is : </b>{this.state.post.phone} </Typography>
              <Typography><b> My Website  : </b>{this.state.post.website} </Typography>
              </CardContent>
              <Button className="btnType" variant="contained"  onClick = {this.onClick} style={{marginLeft:"160px",color:"whitesmoke",color: "#6d1b7b"}}>Delete</Button>
          </Card> :null}
      
      </div>
    )
  }
}
export default Display