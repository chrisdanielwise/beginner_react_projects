import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



  const LoginPage = () => {


  const [user, setUser] = useState("student");
  const [input, setIput] = useState({
    username: "",
    password: "",
  });

  const nav = useNavigate() //changes the path of the file to another page
  const { username, password } = input;



  const update = (e) => {
    e.preventDefault();
    setIput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };


  
  const submitForm = (e) => {
    e.preventDefault();
    if (username && password && user === "student") {
       nav("/Student")
    } 
    else if (username && password && user === "lecturer") {
      nav("/Lecturer")
    }
    else if((password) && !(username)){
      alert('Please input your username')
    }
    else if(!(password) && (username)){
      alert('Please input your password ')
    }
    else{
      alert('Fields are empty')
    }
  };

  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container main-div d-column perfect-center">
          <form onSubmit={submitForm} className="d-column  p-4">
            <h1 className=" h1 mb-5">Login</h1>

            <div className="input-body d-row justify-evenly p-2">
              <label htmlFor="">Username :</label>
              <input
                type="text"
                placeholder="Enter your Username"
                value={username}
                name="username"
                onChange={update}
              />
            </div>

            <div className="input-body d-row justify-evenly  p-2">
              <label htmlFor="">Password :</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                name="password"
                onChange={update}
              />
            </div>

            <p className="forget-pass">Forget password</p>

            <div className="input-check-comp d-row ">
              <div className="input-check  d-row">
                <input
                  type="radio"
                  name="user"
                  value="student"
                  checked={user === "student"}
                  onChange={(e)=> setUser(e.target.value)}
                />
                <label htmlFor="student">Student</label>
              </div>
              <div className="input-check d-row">
                <input
                  type="radio"
                  name="user"
                  value="lecturer"
                  checked={user === "lecturer"}
                  onChange={(e)=> setUser(e.target.value)}
                />
                <label htmlFor="lecturer">Lecturer</label>
              </div>
            </div>

            <button type="submit" className="btn btn-success mb-3">
              Login
            </button>

            <button type="button" className="sign-up">
              Sign up
            </button>
            {/* <h6>{user}</h6> */}
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
