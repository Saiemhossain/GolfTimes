/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";


 // eslint-disable-next-line react-refresh/only-export-components
 export const cartContext = createContext();

const Context = ({children}) => {
  const [cart, setCart] = useState([])

  return (
    <cartContext.Provider value={{cart, setCart}} >
      {children}
    </cartContext.Provider>
  )
}

export  const CartState = () => {
  return useContext(cartContext)
}

export default Context;
