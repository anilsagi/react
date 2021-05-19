const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'fetchUserSuccess':
        return action.payload;
        default:
        return state;
    }
};

export default userReducer;


  