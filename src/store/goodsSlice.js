import { createSlice } from "@reduxjs/toolkit";
import goodArr from '../data/goods.json';
export const goodsSlice= createSlice({
    name:'goods',
    initialState:{
        goods:goodArr
    },
    reducers:{

    },
});

export const {} =goodsSlice.actions;
export const selectGoods=state=>state.goods.goods;
export default goodsSlice.reducer;