import { useNavigate } from "react-router-dom";

const Result = ({score, total})=> {
  const navigate = useNavigate()

  var greeting = "Greate";

  // Find percentage
  var Percentage = "69%";
  return (
    <div className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      <div className="container w-[60vw] min-w-60 max-w-xl text-white text-center text-xl md:text-2xl bg-slate-950 rounded-lg space-y-3 md:space-y-5 p-4 md:p-8">
        <h3>🎉 Quiz Finished! 🎉</h3>
        <p className="">
          You scored <strong>{score}</strong> out of <strong>{total}</strong>
        </p>
        <p>
          {" "}
          Percentage: <span className="text-green-600">{Percentage} </span>
        </p>
        {/* <p> {greeting} </p> */}
        <button className="bg-blue-600 px-6 py-1 mt-2 rounded-md text-lg"
        onClick={()=> navigate("/")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Result;