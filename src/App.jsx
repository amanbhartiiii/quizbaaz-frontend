import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import QuizContainer from "./components/QuizContainer";
import AuthProvider from "./store/auth-provider";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <QuizContainer />
    </div>
  );
}
export default App;
