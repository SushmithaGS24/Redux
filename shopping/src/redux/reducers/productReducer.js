

import { ActionTypes } from '../constants/action-types';

const initialState = {
    products: [  // ✅ Correct array syntax
        
    ], // ✅ Correct closing bracket
};
export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS: 
            return {...state, products:payload};
        default: 
            return state;
        
    }

};

export const selectedProductReducer = (state={},  { type, payload }) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT: 
        return {...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}




