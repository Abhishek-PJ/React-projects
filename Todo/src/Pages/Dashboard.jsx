import React, { useEffect, useState } from 'react';
import { account } from '../Appwrite/Config';
import { Navigate, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    isloggedin()

  },[])
 
  const handleSubmit = () => {
    // You can implement your logic to handle the submission here
    
  };

  const isloggedin=async()=>{
    try{
    var x=await account.get("current");
    setEmail(x.email)
    setName(x.name)
    console.log("Current session");
    console.log(x);
    
    }
       catch(e){
      console.log(e);
      Navigate("/Login")

    }

  }

  const logout=async()=>{
    try{
var x=await account.deleteSession("current")
navigate("/Login")
    }
    catch(e){
      console.log(e);
    }
  }

    

  return (
   <div> {name && email?<>
    <div>
   <h1>Welcome To Dashboard</h1>
   <h3>Hello {name}</h3>
   <h3>Your email is {email}</h3>
   </div>
   <div>
   <button id='logoutbutton' onClick={logout}>Logout</button>
 </div>
 </>:<h1>Loading...</h1>}
 </div>
  );
      }

export default Dashboard;
