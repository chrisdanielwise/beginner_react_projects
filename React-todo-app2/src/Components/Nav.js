import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <ul className='main-nav'>
        <NavLink to="/">
        <li>Todo List</li>
        </NavLink>
        <NavLink to="/sorted">
        <li>Sorted Todo List</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
