import React from "react";
import { useSelector } from "react-redux";
import {
    selectCart 
} from "../store/cartSlice";

import { selectSum } from "../store/cartSlice";
import {
    selectGoods
} from '../store/goodsSlice';

export default function Cart(props){
    const goods= useSelector(selectGoods);
    const cart= useSelector(selectCart);
    const amount= useSelector(selectSum);
    
    const goodsObj=goods.reduce((accum,item)=>{
        accum[item['articul']]=item;
        
        return (accum);
        
      
    },{})
    console.log(goodsObj);
    console.log(amount);
    console.log(Object.keys(cart));
    
     
    
    return(
       
    
    <div>
        <table  border="1">
         {Object.keys(cart).map(item=>
         
        
  
   <tbody key={goodsObj[item]['articul']}>
       <tr key={item+goodsObj[item]['title']}>
    <th>{goodsObj[item]['articul']}</th>
    <th>{goodsObj[item]['title']}</th>
    <th>{goodsObj[item]['cost']}</th>
    <th>{cart[item]}</th>
    <th>{cart[item]*goodsObj[item]['cost']}</th>
   </tr>
  </tbody>
 )}

<tfoot>
    <tr>
     <th>sum of order</th>
     <th>{}</th> 
    </tr> 
   </tfoot>
 </table>
 
    </div>)

}

/*<li > {goodsObj[item]['title']}-{cart[item]}</li>*/