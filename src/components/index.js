//for addto cart

export const addcart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

// for delete from cart
export const deletecart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}