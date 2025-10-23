import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import QuizSection from "./components/QuizSection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/quiz/:subject" element={<QuizSection />}></Route>
      </Routes>
    </div>
  );
}
export default App;
