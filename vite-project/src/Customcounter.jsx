import { useState } from "react"
import { useDispatch } from "react-redux"
import { Increment,customincreaser } from "./slicer1";

export function Customcounter(){
  const [number,setnumber] =  useState("")
  const dispatch = useDispatch();
  function handleclick(){
    dispatch(customincreaser(Number(number)));
    setnumber("");
  }

  
  return(

    
    <>
    <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)} />
    <button onClick={handleclick}>submit</button>

    </>
  )
}