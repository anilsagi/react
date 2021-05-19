import React , { Component } from 'react';
import axios from 'axios'

class Post extends Component {
    state = {
        post : null  //why null has taken?
    }

    componentDidMount = () => {
        console.log (this.props);
        let id =this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then ((res) => {
            this.setState ({
                post:res.data
            })
        }).catch((error) => {
            console.log('found an error');
        })
    }

    render() {

        const postList = this.state.post ? (
            <div>
            {this.state.post.title}
            {this.state.post.body}
            </div>
        ):(<p>Loading..</p>)
        return(
            <div>
            {postList}
            </div>
        )
    }
}
export default Post;