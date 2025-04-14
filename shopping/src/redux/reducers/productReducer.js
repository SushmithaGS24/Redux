import { ActionTypes } from '../constants/action-types';

// Initial state for products
const initialState = {
  products: [],
  cart: []// Correct array syntax
};

// Product reducer to manage product list
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

// Initial state for the cart
const initialCartState = {
  cart: [], // Cart state to hold added products
};

// Cart reducer to manage the cart
export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, payload] // Add product to cart
        };
      default:
        return state;
    }
  };

// Selected product reducer to manage the selected product
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
