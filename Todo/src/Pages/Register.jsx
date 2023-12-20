import React, { useState } from 'react';
import { account } from '../Appwrite/Config';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    register()
  };

  const register=async()=>{
    try{
    var x= await account.create('unique()',email,password,name)
    console.log('Form submitted:', x);
    alert("Registered succesfully")
    navigate("/Login")

    }
    catch(e){
      console.log(e)
    }
  }

  const Login=async()=>{
    navigate("/Login")
    console.log("Navigated to login page")
  }
  return (
    <div className="App">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit">Register</button>
        <br />

<div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >

<button type="button" style={{width:"100px"}} onClick={Login}>Login</button>

</div>
      </form>
    </div>
  );
};

export default Register;
