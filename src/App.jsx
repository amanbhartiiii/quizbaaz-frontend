import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <LandingPage />
      Quizbaaz - A quiz application 
    </>
  )
}

export default App
