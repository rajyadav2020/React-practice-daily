import { useState } from "react";
const fooditems = [
  
  {id:1,food:"pizza",price:"200",},
  {id:2, food:"burger", price:"150",},
  {id:3, food:"pasta", price:"180",},
  {id:4, food:"sandwich", price:"120",},
  {id:5, food:"noodles", price:"160",},
  { id:6, food:"fries", price:"100",},
  {id:7, food:"taco", price:"140",},
  {id:8, food:"hotdog", price:"130",},
  {id:9, food:"wrap", price:"170",},
  {id:10, food:"garlic bread", price:"110"}
  
]
export default function Foodcart(value){
  const [incart,setincart] = useState(false);
  function handleclick(){
    if(incart){
      setincart(false);
    }else{
      setincart(true);
    }
  }

  return(
    <>
      <h1>{value.food}</h1>
      <h1>{value.price}</h1>
      <button onClick={handleclick}>{
              incart?"Remove":"Add"
              }</button>

    </>
  )


}