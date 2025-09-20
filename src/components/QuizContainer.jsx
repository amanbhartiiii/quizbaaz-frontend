import QuizBox from "./QuizBox";
import JavaImg from "../assets/java.png"
import JsImg from "../assets/js.png"
import CppImg from "../assets/cpp.png"
import PythonImg from "../assets/py.png"

const QuizContainer = ()=> {
  return (
    <div className="bg-slate-400 w-screen flex-col pt-4" style={{background: "radial-gradient(80% 80% at 50% 20%, rgb(25, 61, 31), transparent 100%), rgb(0, 0, 0)"}}>
      <h3 className="text-center text-4xl font-[700] text-white">Online Tests</h3>
      <div className="flex justify-center flex-wrap space-x-4 space-y-10 p-10">
        <QuizBox name='Java' imgSrc={JavaImg}/>
        <QuizBox name='Python' imgSrc={PythonImg}/>
        <QuizBox name='Java Script' imgSrc={JsImg}/>
        <QuizBox name='C++' imgSrc={CppImg}/>
      </div>
    </div>
  );
}

export default QuizContainer;