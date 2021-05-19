// import students from "../config/student";
import * as actions from '../Actions/action';

const initState = {
  studentData: []
}

const studentReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.UPDATE_DATA:
      return {
        ...state,
        studentData: action.payload
      }
    default:
      return state;
  }
};

export default studentReducer;