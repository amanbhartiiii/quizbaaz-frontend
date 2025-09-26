import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import QuizContainer from "./components/QuizContainer";
import AuthProvider from "./store/auth-provider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <LandingPage />
        <QuizContainer />
      </AuthProvider>
    </div>
  );
}
export default App;
