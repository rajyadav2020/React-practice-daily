import { useState } from 'react'
import Component from './Component'
import './App.css'



// usestate hook returns the array , the react provides the more functionality in usestate hook by providing one extra fucntion like setcount and whenever changes occur trigger call setcount

function App(){
  let [count,setCount] = useState(0);
  function incrementnum(){
    count = count+1;
    setCount(count)
    // console.log(count);
  }
  function decrementnum(){
    count = count-1;
    setCount(count)
    // console.log(count)
  }


  return (
    <>
    <div className='first'>
    <h1>Count is:{count} </h1>

    <button onClick={incrementnum}>Increment</button>
    <button onClick={decrementnum}>Decrement</button>
    </div>

    </>
  )
}
export default App
