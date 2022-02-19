

export default function Cart(props){
    
    
    return(<div>
        <table  border="1">
            <tbody >
            <tr >
    <th>{props.articul}</th>
    <th>{props.title}</th>
    <th>{props.cost}</th>
    <th>{props.amount}</th>
    <th>  {props.amount*props.cost}</th>
    </tr>
    </tbody>

 </table>
 
    </div>)
    

}

/*<li > {goodsObj[item]['title']}-{cart[item]}</li>*/