import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import QuizContainer from './components/QuizContainer'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import { useState } from 'react'

function App() {

  return (
    <>
      <Navbar />
      <LandingPage />
      <QuizContainer />
      Quizbaaz - A quiz application 
    </>
  )
}

export default App
