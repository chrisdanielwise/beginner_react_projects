import React,{useContext} from 'react'
import { AppContext } from "../../context/AppContext";
const ShopItems = ({value}) => {
  const {cartItems,addItems,removeItems,addToCart} = useContext(AppContext)
    const {id,title,price,images} = value
    let cartAmount = cartItems[id]
  return (
    <>   
    <div className="shopping-items">
        <img src={images[0]} alt="" />
        <div className='sub-items'>
            <p className='title'>{title}</p>
            <p className='price'>${price}</p>
            <div className='count-section'>
                <button className='add-item' 
                onClick={()=> removeItems(id)}>-</button>
                <input type="text" value={Number(cartAmount > 0 && cartAmount)} />
                {/* <input type="text" value={Number(cartAmount > 0 ? cartAmount:0)} /> thesame as above */}
                <button className='remove-item'
                 onClick={()=> addItems(id)}>+</button>
            </div>
            <button className='shopping-btn' onClick={()=> addToCart(id)}>Add to Cart</button>
        </div>
        
    </div>
    </>
  )
}

export default ShopItems
