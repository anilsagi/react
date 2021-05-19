const loggedReducer = (state =false, action) => {
    switch(action.type) {
        case 'logInUser':
        return true;
        case 'logOutUser':
        return false;
        default :
        return state;
    }
};

export default loggedReducer;