import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='overflow-hidden bg-almostWhite'>
      <div><NavBar/></div>
      <div><Hero/></div>
    </div>
  )
}





export default App
