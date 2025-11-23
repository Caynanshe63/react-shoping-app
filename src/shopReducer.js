export const initialState = {
    products : [],
    total : 0
}

export const ShopReducer = (state, action) =>{
    const {type, payload} = action;
    
    switch (type){
        case "ADD_TO_CART" :
            return {
                ...state,
                products : payload.products,
            }
        case "REMOVE_FROM_CART" :
            return {
                ...state,
                products : payload.products,
            }
        case "CALCULATE_PRICE" :
            return {
                ...state,
                total : payload.total,
            }
        default : 
            throw new Error("Error in reducer")
    }
}