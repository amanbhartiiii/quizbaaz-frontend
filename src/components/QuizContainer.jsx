import QuizBox from "./QuizBox";
import JavaImg from "../assets/java.png"
import JsImg from "../assets/js.png"
import CppImg from "../assets/cpp.png"
import PythonImg from "../assets/py.png"

const QuizContainer = ()=> {

  const quizes = ['Java', 'Python', 'Java Script', 'C++', 'C']

  return (
    <div className="bg-slate-400 w-screen flex-col pt-4">
      <h3 className="text-center text-4xl font-[700] text-gray-800">Online Tests</h3>
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