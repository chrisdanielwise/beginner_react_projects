import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./features/UserReducer";

const Create = () => {
  const initialState = {
    name: "",
    email: "",
  };

  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState(initialState);
  const Navigate = useNavigate()
  const users = useSelector(state=> state.users)

  console.log(users)


const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(addUser({
      id: users.length === 0? 1:
      users[users.length-1].id + 1 ,
      ...userInput}))
    Navigate("/")
}

  const onInputChange = (e) => {
    const {name, value} = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
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
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
