import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {


  let Navigate = useNavigate()
  useEffect(()=>{
    let username= sessionStorage.getItem("username")
    if(username=== "" || username === null){
        Navigate("/login")
    }
  },[Navigate])
  return (
    <div style={{backgroundColor:"blue", height:"60px",display:"flex",placeItems:"center",justifyContent:"space-between"}}>
      <Link to="/" className='text-danger'>Home</Link>
      <Link to="/login" className='text-danger'>Logout</Link>
    </div>
  )
}

export default Home
