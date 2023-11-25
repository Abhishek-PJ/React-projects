import { useState } from "react";
function App() {
  const [color, setcolor] = useState("pink");
  return (
    <div
      className="w-full  h-screen justify-center flex fixed"
      style={{ backgroundColor: color }}
    >
         <h1 className="text-black-600 fixed top-32 text-4xl font-extrabold  shadow-inner">Background changer</h1>
      <div className=" flex flex-wrap justify-center bg-white fixed bottom-11 rounded-md">

     
        <div className="flex flex-wrap justify-center gap-5 p-3 rounded-md">
          <button
            className="  bg-red-600 p-3 rounded-md  shadow-inner"
            onClick={() => setcolor("Red")}
          >
            Red
          </button>
          <button
            className="  bg-blue-600 p-3 rounded-md -lgshadow  shadow-inner"
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className=" bg-yellow-300 p-3 rounded-md  shadow-inner"
            onClick={() => setcolor("yellow")}
          >
            Yellow
          </button>
          <button
            className="  bg-green-700 p-3 rounded-md  shadow-inner"
            onClick={() => setcolor("green")}
          >
            Green
          </button>
          <button
            className="  bg-orange-500 p-3 rounded-md "
            onClick={() => setcolor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
