import React from 'react'
import {PRODUCT} from '../CartData'
import Products from './products'
import "./shop.css"
const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1>Nneeh daniel</h1>
        </div>
        <div className="products">
          {PRODUCT && PRODUCT.map((value)=> <Products value={value}/>)}
        </div>
      </div>
    </>
  )
}

export default Shop
