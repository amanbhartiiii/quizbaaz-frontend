import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import QuizContainer from './components/QuizContainer'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <LoginPage />
      <LandingPage />
      <QuizContainer />
      Quizbaaz - A quiz application 
    </>
  )
}

export default App
