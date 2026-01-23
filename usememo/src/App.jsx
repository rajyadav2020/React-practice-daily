import { useState,useMemo } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [number,setnumber] = useState(null);

  function Fibonacci(n){
    if(n<=1)
      return n;

    return Fibonacci(n-1)+Fibonacci(n-2);
  }

  const result = useMemo(()=>Fibonacci(number),[number] )
  

  return (
    <>
    <h1>Count is:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>

    <div>

    <h1>Fibonnaci number is:{result} </h1>
    <input type="number" onChange={(e)=>{setnumber(e.target.value)} } />
    </div>
    </>
  )
}

export default App;
