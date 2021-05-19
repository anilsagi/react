import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    state = {
        displayInfo : []
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
        console.log(res.data);
        this.setState({
            displayInfo: res.data
        })    
        }).catch((error) => {
            console.log('found an error')
        })
    }

    render() {
        const displayInfoList = this.state.displayInfo.length ? (this.state.displayInfo.map(info => {
            return (
            <div key = {info.id}>
            <p><b>Id : </b>{info.id}</p>
            <p><b>Title : </b>{info.title}</p>
            {info.completed}
            </div>
            )
        })) : (<p>not posted yet</p>)
        return(
            <div>
            {displayInfoList}
            </div>
        )
    }
}
export default Home;