import * as actions from '../Actions/action'
import faq from '../config/faq';

const initState = {
    faqQuestions: faq.faqQuestions
}

const faqReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADDQUESTION:
            return {
                ...state, faqQuestions: [...state.faqQuestions, action.payload]
            }
            case actions.ADDLIKE:
                return {
                    ...state,
                    faqQuestions: state.faqQuestions.map((item, index) => {
                        if(index === action.payload) { 
                            return {
                                ...item,
                                like: true
                            }
                        }
                        return item;
                    })
                };
                case actions.DISLIKE:
                return {
                    ...state,
                    faqQuestions: state.faqQuestions.map((item, index) => {
                        if(index === action.payload) { 
                            return {
                                ...item,
                                like: false
                            }
                        }
                        return item;
                    })
                };
        default:
            return state;
    }
}


export default faqReducer;