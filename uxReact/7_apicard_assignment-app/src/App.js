import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import  './App.css';
import Display from './Display';
import Table from './Table2';



class App extends Component {
  state = {
    post: [],
    hide:false
  }
  //filter , map ,delete math.fn / 
  componentDidMount () {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => {
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
  render() {
    return (
      <div>
    {!this.state.hide ? 
            <Card className="card1" style={{backgroundColor:"#d7e360", width:"450px", height:"200px", display:"inline-block"}}> 
              <CardContent>
                <Typography style={{textAlign:"center",color:"#f50057",fontWeight:"bolder"}}><i>USER 1 DATA</i></Typography>
                <Typography><b> My Name is : </b>{this.state.post.name} </Typography>
                <Typography><b> My Username is : </b>{this.state.post.username} </Typography>
                <Typography><b> My PhoneNumber is : </b>{this.state.post.phone} </Typography>
                <Typography><b> My Website  : </b>{this.state.post.website} </Typography>
              </CardContent>
              <Button  variant="contained"  onClick = {this.onClick} style={{marginLeft:"160px",backgroundColor:"#f50057",color:"white"}} >Delete</Button>
          </Card> :null}
      <Display/>
      <Table/>
      </div>
    )
  }
}
export default App;