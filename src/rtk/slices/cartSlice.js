const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name : 'cart',
  initialState : {
    cartProducts : [],
    totalPrice : 0

  },
  reducers : {
    Add_Cart: (state,action)=>{
      state.cartProducts.push({...action.payload,amount:1})
    },
    Delete_Cart: (state,action)=>{
      return state.filter(item => item.id !== action.payload)
    },
    Remove_All : (state,action)=>{
      return state = []
    },
    Increment_Qty : (state,action)=>{
      state.cartProducts.map(item => item.id === action.payload ? {...item,amount:item.amount+1} : item)
    },
    Decrement_Qty : (state,action)=>{
      state.cartProducts.map(item => item.id === action.payload ? {...item,amount:item.amount-1} : item)
    }
  }
})

export const {Add_Cart ,Delete_Cart,Remove_All,Increment_Qty,Decrement_Qty } = CartSlice.actions;
export default CartSlice.reducer;