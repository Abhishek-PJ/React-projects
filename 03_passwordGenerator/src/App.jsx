import React, { useCallback, useEffect, useState } from 'react';
import './App.css'


function App() {
  let [password,setpassword]=useState("")
  let [length,setlength]=useState(4)
  let [lowercase,setlowercase]=useState(0)
  let [uppercase,setuppercase]=useState(0)
  let [characters,setcharacters]=useState(0)
  let[numbers,setnumbers]=useState(0)
  let generatedpassword="";
  let str="";
  let [btnclk,setbtnclk]=useState(false)

  let PasswordGenerator=useCallback(()=>{

    if (lowercase){
      str+="abcdefghijklmnopqrstuvwxyz"
    }
    if (uppercase){
      str+="ABCDEFGHIJKLNOPQRSTUVWXYZ"
    }
    if (numbers){
      str+="0123456789"
      
    }
    if (characters){
      str+="!$%^&*_?/><."
    }


      for (let i = 1; i < length; i++) {
        let char=Math.floor((Math.random()*str.length)+1)
        generatedpassword +=str.charAt(char);
        
      }
      setpassword(generatedpassword);
      
    
  }
,[length,uppercase,numbers,characters])


useEffect(()=>PasswordGenerator(),[length,uppercase,numbers,characters])





  return (
    <>
    <div className="container">
      <h2>Password Generator</h2>
      <div className="wrapper">
        <div className="input-box">
          <input type="text" value={password} disabled/>
          <span className="material-symbols-rounded">copy_all</span>
        </div>
        <div className="pass-indicator"></div>
        <div className="pass-length">
          <div className="details">
            <label className="title">Password Length</label>
            <span></span>
          </div>
          <input type="range" min="1" max="30" value={length} step="1" onChange={(e) => {setlength(e.target.value)}}/>
        </div>
        <div className="pass-settings">
          <label className="title">Password Settings</label>
          <ul className="options">
            <li className="option">
              <input type="checkbox" id="lowercase"  onChange={() => { setlowercase((prev) => !prev ) }} />
              <label htmlFor="lowercase">Lowercase (a-z)</label>
            </li>
            <li className="option">
              <input type="checkbox" id="uppercase"  onChange={() => { setuppercase((prev) => !prev ) }} />
              <label htmlFor="uppercase">Uppercase (A-Z)</label>
            </li>
            <li className="option">
              <input type="checkbox" id="numbers"  onChange={() => { setnumbers((prev) => !prev ) }}/>
              <label htmlFor="numbers">Numbers (0-9)</label>
            </li>
            <li className="option">
              <input type="checkbox" id="symbols" onChange={()=>{setcharacters((prev) => !prev )}}/>
              <label htmlFor="symbols">Symbols (!-$^+)</label>
            </li>
        
          </ul>
        </div>
        <button  className="generate-btn">Generate Password</button>
      </div>
    </div>
    </>
  );
}


export default App;
