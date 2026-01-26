import { useState } from 'react'
import {useSelector} from "react-redux"
import { Provider } from 'react-redux'
import Header from './components/Header'
import Card from './components/Card'

function App() {



  return (
    <>
    
      <Header></Header>
      <Card></Card>
  
    </>
  )
}

export default App;