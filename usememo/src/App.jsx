import { useState,useMemo,useRef } from 'react'
import "./App.css"





function Stopwatch(){

  const [time,setTime] = useState(0);
  const [running,setrunning] = useState(false);
  const intervalref = useRef(null);
  function start(){
    if(!running){
   intervalref.current =   setInterval(()=>{
      setTime(prevtime=>prevtime+1 )
    } ,1000)
    setrunning(true);
  }
  
  }



  function stop(){
    if(running){
    clearInterval(intervalref.current)
    intervalref.current = null;
    setrunning(false);
    }

  }

  function reset(){
    clearInterval(intervalref.current)
    intervalref.current = null;
    setTime(0);

  }


  return(
    <>
    <div className='stopwatch'>
    <h1>Stopwatch is: {time}</h1>

    <div className='buttons'>

    <button onClick={start}>start</button>
    <button onClick={stop}>stop</button>
    <button onClick={reset}>reset</button>
    </div>

    </div>
    </>
  )
}

export default Stopwatch;