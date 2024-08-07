const initialState = {
    quantity: 0,
};
   
const quantityReducer = (state = initialState,action) =>{
     switch(action.type){
            case 'SET_INC_QUA':   return {
                ...state,
                quantity: state.quantity + 1,
            };
             case 'SET_DEC_QUA':  return{ 
                ...state,
                quantity: state.quantity - 1,
            };
            case 'SET_QUANTITY': return{
                ...state,
                quantity: action.payload,
            }
            default: return state;
     }
   
}

export default quantityReducer;