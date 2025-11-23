import { createContext, useContext, useReducer } from "react";
import { initialState, ShopReducer } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider =({children})=>{

const [state, dispatch] = useReducer(ShopReducer, initialState);

const CalculateTotal = (products) => {
    let totalPrice = 0;
    products.forEach(pro=>{
        totalPrice += pro.price;
    });

    dispatch({
        type : "CALCULATE_PRICE",
        payload :{
            total : totalPrice
        }
    })

};

const addToCart = (prodcut) => {
    const updatedProduct = state.products.concat(prodcut);
    CalculateTotal(updatedProduct);
    dispatch({
        type : "ADD_TO_CART",
        payload :{
            products : updatedProduct
        }
    });

};

const RemoveFromCart = (prodcut) => {
    const updatedProduct = state.products.filter(pro=>pro.id !== prodcut.id)
    CalculateTotal(updatedProduct);
    dispatch({
        type : "REMOVE_FROM_CART",
        payload :{
            products : updatedProduct
        }
    });

};



const values ={
    products: state.products,
    total : state.total,
    addToCart,
    RemoveFromCart
}
return <ShopContext.Provider value={values}>
    {children}
</ShopContext.Provider>

}


export const useShop =()=>{
    const context = useContext(ShopContext);
    if(!context){
        throw new Error("Error Context");
    }
    return context;
}