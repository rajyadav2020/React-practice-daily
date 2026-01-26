import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "./slicer1";

export default function Counting(){

  const count = useSelector((state)=> state.slice1.count );
  const dispatch = useDispatch()


  return(
    <>
    <h1>Counter is:{count}</h1>
    <button onClick={()=>dispatch(Increment()) }>increment</button>
    <button onClick={()=>dispatch(Decrement()) }>decrement</button>
    <button onClick={()=>dispatch(Reset() ) }>Reset</button>
    </>
  )
}