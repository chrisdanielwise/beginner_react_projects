import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateUser } from './features/UserReducer'
import { useNavigate } from "react-router-dom";
const Update = () => {

        
        const {id} = useParams()
        const users = useSelector(state=> state.users)
        const existingUser = users.find(first => first.id === Number(id))
        const {name,email} = existingUser
        const [userInput, setUserInput] = React.useState({name,email});
      
        const {name:newname,email:newemail} = userInput

        const onInputChange = (e) => {
            const {name, value} = e.target;
            setUserInput((prev) => ({ ...prev, [ name]:  value }));
        };

        const Navigate = useNavigate()
        const dispatch = useDispatch()
        const handleUpdate = (e) =>{
            e.preventDefault();
            dispatch(updateUser({
                id:id,
                name:newname,
                email:newemail
            }))
            Navigate("/")
           
        }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Update User</h3>
      <form  onSubmit={(e)=>handleUpdate(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={userInput.name}
            className="form-control"
            name="name"
            placeholder="enter your name"
            onChange={e=> onInputChange(e)}
          
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={userInput.email}
            name="email"
            className="form-control"
            placeholder="enter your email"
            onChange={e=> onInputChange(e)}
          
          />
        </div>
        <br />
        <button className="btn btn-info">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Update
