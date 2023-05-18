import React from 'react'
import {removeUser, updateUserName } from "./feautes/User";
const Modal = ({filterCard , dispatch}) => {
    
    console.log(filterCard)
    const [newUser, setNewUser] = React.useState("");
    return (
    <div>
    <h1>{filterCard.username}</h1>
    <h1>{filterCard.name}</h1>
    <input
      type="text"
      placeholder="New Username..."
      onChange={(e) => setNewUser(e.target.value)}
    />
    <button
      onClick={() =>
        dispatch(
          updateUserName({
            id: filterCard.id,
            username: newUser,
          })
        )
      }
    >
      Update Username
    </button>
    <button
      type="button"
      onClick={() =>
        dispatch(removeUser({ id: filterCard.id }))
      }
    >
      Delete User
    </button>
  </div>
  )
}

export default Modal
