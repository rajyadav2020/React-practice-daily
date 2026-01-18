import { useState,useEffect } from "react";
import "./bgc.css"

function App(){

  //re-render ; call the function again
  //useeffect hook
  //this takes the call back function and a dependency
  

  const [color,setcolor] = useState("black");

  useEffect(() =>{
    document.body.style.backgroundColor = color;
  },[color])

  
  return(
    <>
    <h1>Background Color changer</h1>
    <div className="button">
      <button style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>Red</button>
      <button  style={{backgroundColor:"blue"} } onClick={()=>setcolor("blue")} >Blue</button>
      <button  style={{backgroundColor:"orange"}} onClick={()=>setcolor("orange")} >Orange</button>
      <button  style={{backgroundColor:"green"}} onClick={()=>setcolor("green")} >Green</button>
      <button  style={{backgroundColor:"pink"}} onClick={()=>setcolor("pink")}>Pink</button>
    </div>
    </>
  )
}


export default App;