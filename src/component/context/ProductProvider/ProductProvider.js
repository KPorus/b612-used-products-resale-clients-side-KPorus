import React, { useContext, useEffect } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { actionTypes } from '../../../State/actionTypes';
import { initialState, productsReducer } from '../../../State/State';

let Products = createContext();
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, initialState);
    useEffect(() => {
      dispatch({ type: actionTypes.FETCHING_START });
      fetch(
        "https://b612-used-products-resale-server-side-kp-orus.vercel.app/allProduct"
      )
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
        )
        .catch(() => {
          dispatch({ type: actionTypes.FETCHING_ERROR });
        });
    }, []);
    console.log(state)
    let value = 
    {
        state,
        dispatch
    }
  return <Products.Provider value={value}>{children}</Products.Provider>;
};

export const useProducts = () => {
  const context = useContext(Products);
  return context;
};


export default ProductProvider;
