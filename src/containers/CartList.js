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
    console.log(cart);
    
 
    return(
        <div>
            <ul>
                {Object.keys(cart).map(item=>
                <Cart key={item+goodsObj[item]['title'] } title={goodsObj[item]['title']}  articul={goodsObj[item]['articul']}  
                    cost={goodsObj[item]['cost']} amount={cart[item]}/>)}
            </ul>
            
        </div>
    )
}