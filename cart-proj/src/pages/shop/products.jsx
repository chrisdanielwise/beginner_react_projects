import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
const Products = ({value}) => {
  const { id,title, price, images} = value
  const { addToCart, cartItems} = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <>
     <div className="product">
      <img src={images[0]} alt="" />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
        </div>
     </div>
    </>
  )  
}

export default Products
