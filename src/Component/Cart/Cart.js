import React from 'react';
import './Cart.css'
 
const Cart = (props) => {
    const cart = props.cart;
    let total =0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i]
        total = total + product.price;
    }
    let shipping =0;
    if(total > 35){
        shipping=0;
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99
        
    }
   const tax = Number((total*.1).toFixed(2))
   const grandTotal =Number(( tax + shipping + total).toFixed(2))
     
    return (
        <div className='text-center'>
            <h4 style={{borderBottom:'2px solid gray',paddingBottom:'15px'}}>Order Summary</h4>
            <h5>Items Ordered : {cart.length}</h5>
            <p>Product Price :<b> ${total}</b> </p>
            <p>Shipping Cost : <b>${shipping}</b> </p>
            <p>Tax + Vat : <b>${tax}</b></p>
           <b> <p>Total Price :<b>${grandTotal}</b> </p></b>
           <button className='btn btn-warning'>Review Order</button>
        </div>
    );
};

export default Cart;