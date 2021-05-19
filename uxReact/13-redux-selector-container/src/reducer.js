import * as actions from './actionType';

const initState = {
    counter: 0
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actions.INCREMENT:
            return {...state, counter: state.counter + action.payload}
        default:
            return state;
    }
}

export default reducer;