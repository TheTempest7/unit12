import React from "react";

export default function Goods(props){
    
return(
    <div className="goods-block">
<img src={props.image} alt=""/>
<p>{props.title}</p>
<p>{props.cost}</p>
<button className="add-to-cart" data-key={props.articul}>Add to cart</button>
<button className="remove-from-cart" data-key={props.articul}>Remove from cart</button>
<button className="discard-from-cart" data-key={props.articul}>Discard from cart</button>
</div>

)
} 