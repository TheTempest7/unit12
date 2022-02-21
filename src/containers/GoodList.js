import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { goodsSlice } from "../store/goodsSlice";
import {increment,allSum,decrement,ellumination} from "../store/cartSlice";
import {
    selectGoods
} from '../store/goodsSlice';
import Goods from '../components/Goods';
import { click } from "@testing-library/user-event/dist/click";

export default function GoodList(){
    const goods= useSelector(selectGoods);
    const dispatch=useDispatch();

    let clickHandler = (event)=>{
        event.preventDefault();
        let t=event.target;
        if (t.classList.contains('add-to-cart')) {
            dispatch(increment(t.getAttribute('data-key')));
        }
        
     
    }
    console.log(goods);
    
    return(
<>
<div className="goods-field" onClick={clickHandler}>
    {goods.map(item=><Goods  title={item.title} cost={item.cost} image={item.image}
                                        articul={item.articul} key={item.articul}/>
    )}
</div>
</>
    )

}