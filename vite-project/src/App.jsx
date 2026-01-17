import Card from "./components/Card";
import Header from "./components/header";
import "./App.css"
import Footer from "./components/Footer";
import arr from "./utils/dummy";
import { useState } from "react";



function App(){

  let [A,setA] = useState(arr);

  function sortarray(){
    A.sort((a,b)=>a.price - b.price );
    setA([...A]);
  
  }

  function above500(){
    const B = arr.filter((value)=>value.price>499 );
    setA(B);
  }

  function above20(){
    const C = arr.filter((value)=>value.offer>20 )
    setA(C);
  }


  return(
    <>
    {/* header */}
    <Header></Header>
    <button onClick={sortarray}>Sort by price</button>
    <button onClick={above500}>Price above 499</button>
    {/* <button onClick={above20}>Discount Range:20% and above</button> */}


    <div className="middle" style={{display:"flex",gap:"15px",flexWrap:"wrap"}}>
    {
      A.map((value,index)=><Card cloth={value.cloth} off={value.offer} price={value.price} />)
    }
   
    </div>
    <Footer></Footer>
    </>
  )
}

export default App;