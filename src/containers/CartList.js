import React from "react";
import { useSelector } from "react-redux";
import { goodsSlice } from "../store/goodsSlice";
import {
    selectCart
} from "../store/cartSlice";
import {
    selectGoods
} from '../store/goodsSlice';
import Cart from "../components/Cart";




export default function CartList(){
    const goods= useSelector(selectGoods);
    const cart= useSelector(selectCart);
     
  

    const goodsObj=goods.reduce((accum,item)=>{
        accum[item['articul']]=item;
        
        return (accum);
        
      
    },{})
   
    console.log(goodsObj);
    
 
    return(
        <div>
            <ul>
                {Object.keys(cart).map(item=><li key={item+goodsObj[item]['title']}> {goodsObj[item]['title']}-{cart[item]}</li>)}
            </ul>
            <Cart/>
        </div>
    )
}