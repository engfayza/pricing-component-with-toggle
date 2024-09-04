import HeadComponent from'../components/HeadComponent/HeadComponent'
import Pricecard from '../components/Price-card/Price-card'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="main">
    <div className='header'>
       <HeadComponent></HeadComponent>
    </div>
    <div className='content'>
    <Pricecard></Pricecard>
     <Pricecard></Pricecard>
     <Pricecard></Pricecard>
    </div>
      
   </div>
    </>
  )
}

export default App
