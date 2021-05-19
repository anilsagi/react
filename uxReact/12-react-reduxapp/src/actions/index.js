

export const increment = (numb) => {
    return {
      type: 'increment',
      payload: numb,
    };
  };
  
  export const decrement = () => {
    return {
      type: 'decrement',
    };
  };
  
  export const logInUser = () => {
    return {
      type : 'logInUser',
    };
  };

  export const logOutUser = () => {
    return {
      type : 'logOutUser',
    };
  };

  export const fetchUserSuccess = (users) => {
   return {
     type: 'fetchUserSuccess',
     payload:users,
   }
  };

 