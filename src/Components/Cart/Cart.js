import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    const cart = props.cart
    // console.log(props)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary
        
    }

     
    return (
        <div className='cart'>
             
            <h1>Player added : {cart.length}</h1>
            <h3>Total price : {total} BDT</h3>
            {
                cart.map((p,idx) => <li key={idx} type='1'> {p.name} -- {p.salary}</li>)
            }
            
        </div>
    );
};

export default Cart;