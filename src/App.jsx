import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import QuizSection from "./components/QuizSection";
import { Route, Routes } from "react-router-dom";
import ProtectedRout from "./components/ProtectedRout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/quiz/:subject"
          element={
            <ProtectedRout>
              <QuizSection />
            </ProtectedRout>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
