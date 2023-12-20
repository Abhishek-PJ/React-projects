import React, { useState } from 'react';
import { account } from '../Appwrite/Config';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    login()
  };

  const login=async()=>{

try {
  var x=await account.createEmailSession(email,password)
  console.log(x);
  navigate("/Dashboard");

}
 catch (e) {
  console.log(e)
  alert(e)
}
  }

  const register=async()=>{
    navigate("/Register")
    console.log("Navigated to register page")
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit">Login</button>

        <br />

        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >

        <button type="button" style={{width:"100px"}} onClick={register}>Register</button>

        </div>

      </form>

    </div>
  );
};

export default Login;
