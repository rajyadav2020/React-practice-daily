// import React from "react"
import { useState,useEffect } from "react"
import "./passgen.css"

function App(){

  const [Password,setPassword] = useState("");
  const [length,setlength] = useState(10);
  const [number,setnumber] = useState(false);
  const [char,setchar] = useState(false)

  function generatepassword(){
    let str = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number)
      str+="1234567890";
    if(char)
      str+="!@#$%^&*;()_-";

    let pass = ""
    for(let i=0;i<length;i++){
      pass+= str[Math.floor(Math.random()*str.length)];
    }

    setPassword(pass);

  }

  useEffect( ()=>{
    generatepassword()
  },[length,number,char])

  return(
    <>

    <h1>{Password}</h1>
    <div className="second">
      <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)} />
      <label>Length:{length}</label>

      <input type="checkbox" defaultChecked ={number} onChange={()=>setnumber(!number)}  />
      <label>Number</label>

      <input type="checkbox" defaultChecked={char} onChange={()=>setchar(!char)}  />
      <label>Character</label>
    </div>

    </>
  )
}

export default App;