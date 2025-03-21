import React, { createContext } from 'react'
import { products } from '../assets/data';

export const ShopContext = createContext();

export default function ShopContextProvider(props) {

  const value ={products};  
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}
