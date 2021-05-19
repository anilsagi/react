import { Component } from "react";
import {connect} from 'react-redux';
import * as actions from './action'

class movieList extends Component {
  state = {
    movieName: "",
    Banner: "",
    Certification:""
  };

  handleChange = (e) =>{
    console.log(e);
     this.setState({
         [e.target.id]: e.target.value
     });
  }

  render() {
    const MovieData = this.props.movieList.map((movie) => {
       return <div key = {movie.id}>
      <p>Movie Name:{movie.movieName}</p>
      <p>Movie Banner:{movie.Banner}</p>
      <p>Cerificate:{movie.Certification}</p>
      </div>
    })
     
    return (
      <div>
        {MovieData}
        
        <input type = "text" name = "movieName" id = "movieName"  placeholder= "Enter movie Name" onChange ={this.handleChange}/>
        <input type = "text"  name = "movieBanner" id = "Banner"  placeholder= "Enter movie Banner" onChange ={this.handleChange}/>
        <input type = "text"  name = "movieCertification" id = "Certification" placeholder= "Enter movie Caertification" onChange ={this.handleChange} />
        <button className = "button" onClick= {() => this.props.onAdd(this.state)}>Submit</button>
        <p> number of movies: {this.props.movieList.length}</p>
    </div>
  );
}
}

const mapStateToProps = state => {
    return {
        movieList: movieADD(state)
    }
}

const movieADD = state => {
  return state.movieList
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd:(value) => dispatch ({type: actions.ADDMOVIE,payload:value},
      )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(movieList);
