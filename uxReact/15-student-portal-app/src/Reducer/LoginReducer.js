import * as actions from '../Actions/action'

const initState =  {
    userName:'',
    isLogged: false
}

 const LoginReducer = (state = initState, action) => {  
    switch (action.type)
    {
        case actions.LOGIN:
        return{
            ...state, userName: action.payload 
    }
    case actions.ISLOGGED:
        return{
            ...state, isLogged: action.payload
        }
    default:
        return state;
    }
    }


export default LoginReducer;