import React, {createContext, useReducer, useContext} from 'react';

const CartContext = createContext();


const cartReducer = (state, action)=> {
    switch (action.type){
        case 'ADD_TO_CART':
            return[...state, action.playload];

            default:
            return state;
    }
};

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return(
        <CartContext.Provider value = {{cart, dispatch}}>
            {children}


        </CartContext.Provider>
    );
};

export const useCart = () =>{
    return useContext(CartContext);
    if(!context){
        throw new error('useCart must be used within a CartProvider');
    }
    return context;
};