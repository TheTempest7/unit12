import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { goodsSlice } from "../store/goodsSlice";
import {
    selectCart,
    selectSum
} from "../store/cartSlice";
import {
    selectGoods
} from '../store/goodsSlice';
import Cart from "../components/Cart";

import {increment,allSum,decrement,ellumination} from "../store/cartSlice";


export default function CartList(){
    const goods= useSelector(selectGoods);
    const cart= useSelector(selectCart);
    const dispatch=useDispatch();
    let sum=useSelector(selectSum);
  

    const goodsObj=goods.reduce((accum,item)=>{
        accum[item['articul']]=item;
        
        return (accum);
        
      
    },{})
    let clickHandlerTwo = (event)=>{
        let t=event.target;
    if (t.classList.contains('remove-from-cart')){
        
        dispatch(decrement(t.getAttribute('data-key')));
    }
    if (t.classList.contains('discard-from-cart')){
        dispatch(ellumination(t.getAttribute('data-key')));
    }}
    
    let nameGoods= Object.keys(cart);
    let costGoods= nameGoods.map(item=>(cart[item]*goodsObj[item]['cost'] ));
    if(costGoods.length>0){
        let sumOverAll = costGoods.reduce
        ((a, b) => a + b);
        dispatch(allSum(sumOverAll))
    }

    
   console.log(costGoods);
   console.log(goodsObj);
  
    return(
        <div>
            <ul onClick={clickHandlerTwo}>
                {Object.keys(cart).map(item=>
                <Cart  key={item+goodsObj[item]['title'] } title={goodsObj[item]['title']}  articul={goodsObj[item]['articul']}  
                    cost={goodsObj[item]['cost']}  image={goodsObj[item]['image']} amount={cart[item]}/>)}
            </ul>
            <div>{sum}</div>
        </div>
    )
}