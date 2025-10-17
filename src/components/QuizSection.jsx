import { useParams } from "react-router-dom";

const QuizSection = () => {
  const { subject } = useParams();

  return (
    <div className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      <div className="container text-white bg-slate-950 w-5xl h-[500px] m-3 p-4 rounded-lg">
        <h2 className="quiz-heading text-2xl font-semibold text-center text-sky-400 capitalize">{subject} Quiz</h2>

        <div className="quiz-info flex justify-between my-2">
          <div>
            Time <span className="timer">15</span>s
          </div>
          <div>
            Question <span className="curr-qs-no">1</span> of{" "}
            <span className="total-qs">10</span>
          </div>
        </div>

        <div className="question text-xl my-3" id="question">
          1. What is the size of int in java ?
        </div>

        <div className="option-container">
          <ol type="a" className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-slate-800/50 border-[2px] border-slate-700 py-3 pl-4 rounded-md shadow-xs  shadow-black transition-all duration-200 hover:shadow-md hover:bg-sky-600 hover:border-sky-400 hover:scale-103">
              4byte
            </li>
            <li className="bg-slate-800/50 border-[2px] border-slate-700 py-3 pl-4  rounded-md shadow-xs shadow-black transition-all duration-200 hover:shadow-md hover:bg-sky-600 hover:border-sky-400 hover:scale-103">
              8byte
            </li>
            <li className="bg-slate-800/50 border-[2px] border-slate-700 py-3 pl-4  rounded-md shadow-xs shadow-black transition-all duration-200 hover:shadow-md hover:bg-sky-600 hover:border-sky-400 hover:scale-103">
              10byte
            </li>
            <li className="bg-slate-800/50 border-[2px] border-slate-700 py-3 pl-4  rounded-md shadow-xs shadow-black transition-all duration-200 hover:shadow-md hover:bg-sky-600 hover:border-sky-400 hover:scale-103">
              12byte
            </li>
          </ol>
        </div>

        <div className="flex justify-center mt-6 md:mt-10">
          <button className="next-btn btn bg-blue-600 text-lg font-[500] px-8 py-1 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
