import { useState } from 'react'

let a=document.getElementById("maindiv");


function App() {

  let message=document.getElementById("message")
let[counter,setCounter]=useState(1)

function Increase() {


    setCounter(counter+1)

}

function Decrease() {
  if(counter<1){
   
    message.innerText="Counter value cannot be less than 0"
    a.style.backgroundColor="red";

  }
  else{
    setCounter(counter-1)
  }
}

  return (
    <>
    <div id='maindiv' className=' bg-gray-900' >
      <h1>Counter value is {counter}</h1>

      <button onClick={Increase} className='bg-orange-500' >Increase value</button>
      <br />
      <button onClick={Decrease}>Decrease value</button>
      <h4 id="message"></h4>
    </div>
    </>
  )
}

export default App
