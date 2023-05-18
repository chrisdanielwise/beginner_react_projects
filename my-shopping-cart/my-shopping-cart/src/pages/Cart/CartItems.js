import React,{useContext} from 'react'
import { AppContext } from "../../context/AppContext";

const CartItems = ({value,index}) => {

  const {
    cartItems,
    removeFromCart
    } = useContext(AppContext)
    const {id,title,price,images} = value
    let cartAmount = cartItems[id]



  return (
    <>   
    <div className="cart-items" key={index}>
        <img src={images[0]} alt="" />
        <div className='sub-grp'>
            <p className='title'>{title}</p>
            <p className='price'>${price}</p>
            <div className='counter'>
                <input type="text" value={Number(cartAmount > 0 && cartAmount)} />
            </div>
            <button className='cart-btn' onClick={()=> removeFromCart(id)}>Remove form Cart</button>
        </div>
        
    </div>
    </>
  )
}

export default CartItems