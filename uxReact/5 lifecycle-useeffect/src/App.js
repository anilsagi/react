import React, { Component } from 'react';
import axios from 'axios';
import Hooks from './Hooks';
//import Lifecycle from './Lifecycle';

class App extends Component {
  state = {
    post: {}
  }

  componentDidMount = () => {
    axios.get('http://jsonplaceholder.typicode.com/posts/7').then(res => {
      console.log(res);
      this.setState({
        post: res.data
      })
    })
  }

  render() {
  //const {post} = this.state;
    return (
      <div>
      {/*{post.title}
    {post.body }
<Lifecycle />*/}
<Hooks/>
      </div>
    )
  }
}

export default App;
