import * as actions from './action';


const initState =  {
    movieList:[
       {id: 1,
        movieName: "movie 1",
        Banner: "ABC",
        Certification: "U/A"},{

        id: 2,
        movieName: "movie 2 ",
        Banner: "PQR",
        Certification: "U"
        }
    ]
}

 const movieReducer = (state = initState, action) => {
    switch (action.type)
    {
        case actions.ADDMOVIE:
        return{...state, movieList: [...state.movieList, action.payload]
    }
    default:
        return state;
    }
}

export default movieReducer;