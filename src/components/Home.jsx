import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import QuizContainer from "./QuizContainer";

const Home = ()=> {
  return (
    <>
      <Navbar />
      <LandingPage />
      <QuizContainer />
      <Footer />
    </>
  );
};

export default Home;