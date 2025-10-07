import "./App.css";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}
export default App;
