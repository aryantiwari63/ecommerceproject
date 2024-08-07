export const incQuantity = (quantity) =>({
    type: SET_INC_QUA,
  
});

export const decQuantity = () =>({
    type: SET_DEC_QUA,
    
}); 

export const Quantity = (quantity) =>({
    type: SET_QUANTITY,
    payload: quantity,
});