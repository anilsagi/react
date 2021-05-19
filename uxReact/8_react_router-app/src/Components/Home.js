import React, { Component } from 'react';

class Home extends Component {
    state = {
        movieData : [{
            name: 'VakeelSaab',
            id:1,
            price:'$10'
        
        },{
            name: 'Inception',
            id: 2,
            price: '$20'
        }]
    }

    render (){
        const movieDataList = this.state.movieData.map(movie => {
            return (
                <div key= {movie.id}>
                {movie.name}
                {movie.price}
                </div>
            )
        })
        return (
            <div>
            {movieDataList}
            </div>
        )
    }
}

export default Home;