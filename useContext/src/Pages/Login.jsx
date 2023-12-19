import React from 'react';
import { useState,useContext } from 'react';
import UserContext from '../Context/UserContext';

const LoginForm = () => {

    const [username,setusername]=useState("a")
    const [password,setpassword]=useState("a")
    const {setuser}=useContext(UserContext)

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button clicked');
    setuser({username,password})
    console.log(username)
    console.log(password)
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            onChange={(e)=>setusername(e.target.value)}
          />
        </div>
        <br />
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            onChange={(e)=>setpassword(e.target.value)}

          />
        </div>
        <br />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
