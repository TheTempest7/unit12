

export default function Cart(props){

    return(<div className="cart__container">
         <div className="img__container"><img  className="img" src={props.image} /></div>
        <table  border="1">
            
            <tbody >
            <tr >
    <th>{props.articul}</th>
    <th>{props.title}</th>
    
    <th>{props.amount}</th>
    <th>  {props.amount*props.cost}</th>
    </tr>
    </tbody>

 </table>
 <button className="remove-from-cart" data-key={props.articul}>Remove from cart</button>
<button className="discard-from-cart" data-key={props.articul}>Discard from cart</button>
    </div>)
    

}

/*<li > {goodsObj[item]['title']}-{cart[item]}</li>*/