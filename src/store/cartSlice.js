import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:'cart',
    initialState:{
        value:{},
        allSum:0,
    },
    reducers:{
    increment:(state,data)=>{
       
        let articul=data.payload;
        if (state.value[articul]===undefined) state.value[articul]=0;
        state.value[articul]++;
        
    },
    allSum:(state,data)=>{
        let sum=data.payload;
        state.allSum=sum;
    }
    },
});

export const {increment,allSum} = cartSlice.actions;
export const selectCart=state=>state.cart.value;
export const selectSum=state=>state.cart.allSum;
export default cartSlice.reducer;