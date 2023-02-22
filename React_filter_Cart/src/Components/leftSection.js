import React from 'react'
// import { useEffect } from 'react'
const LeftSection = ({cartegories,setCartegories,Product}) => {
 

 const filteredData =(catItem)=>{
    let result = cartegories.filter((catData)=>{
      return catData.category === catItem  
    })
   setCartegories(result)
 }
  return (
      <>
      <div className="card-body col-lg-3 left-cont ">
      <button className='btn btn-danger' onClick={()=>filteredData('smartphones')}>smartphones</button>
      <button className='btn btn-danger' onClick={()=>filteredData('laptops')}>laptops</button>
      <button className='btn btn-danger' onClick={()=>filteredData('fragrances')}>fragrances</button>
      <button className='btn btn-danger' onClick={()=>filteredData('skincare')}>skincare</button>
      <button className='btn btn-danger' onClick={()=>filteredData('groceries')}>groceries</button>
      <button className='btn btn-danger' onClick={()=>filteredData('home-decoration')}>home-decoration</button>
      <button className='btn btn-danger' onClick={()=>setCartegories(Product)}>All</button>
      </div>
      </>
  )
}

export default LeftSection
