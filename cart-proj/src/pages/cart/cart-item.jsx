import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const CartItem = ({product}) => {
    const { 
        cartItems,
        addToCart, 
        removeFromCart,
        updateCartItemCounter 
    } = useContext(ShopContext)

    const {id,title,price,images} = product
  return (
    <div className="cartItem">
      <img src={images[0]} alt=""/>
        <div className="description">
            <p>
                <b>{title}</b>
            </p>
            <p>${price}</p>
            
            <div className="countHandler">
                <button  onClick={()=>removeFromCart(id)}>-</button>
                <input
                 value={cartItems[id]}
                 onChange={(e)=> updateCartItemCounter(Number(e.target.value),id)} 
                 />
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
