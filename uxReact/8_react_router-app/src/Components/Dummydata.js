import React , { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class DummyData extends Component {
    state = {
        displayData : []

        
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then ((res) => {
            this.setState ({ 
                displayData:res.data
            })
        }).catch((error) => {
            console.log('found an error');
        })
    }

    render() {
        const displayDataList = this.state.displayData.length ? (this.state.displayData.map(info => {
            return (
                <div key = {info.id}>
                {info.id}
                <Link to = {'/Dummydata/' + info.id}>
                Title : {info.title}</Link> 
                Body : {info.body}
                </div>
            )
        })) : (<p>No posts yet!</p>)
        return (
            <div>
            {displayDataList}
            
            </div>
        )
    }

}
export default DummyData;