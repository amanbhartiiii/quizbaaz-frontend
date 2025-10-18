import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuizSection = () => {
  const { subject } = useParams();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState();
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:9090/question/?subject=${subject}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        console.log(data, questions);
      })
      .catch((err) => console.log(err));
  }, [subject]);

  // ✅ Handle next button click
  const handleNext = () => {
    var newScore = score;

    // Checking option is correct or not.
    console.log("Question ", currentIndex, " cheking...")
    if (selectedOption && selectedOption.correct) {
      newScore = score + 1;
      setScore(newScore);
    }

    // Moving to the next question
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev=> prev + 1);
    } else {
      alert(`🎉 You’ve scored ${score} out of ${questions.length}!`);
    }
  };

  // ✅ If data not yet loaded
  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      <div className="container text-white bg-slate-950 w-5xl min-h-[500px] m-3 p-4 rounded-lg">
        <h2 className="quiz-heading text-2xl font-semibold text-center text-sky-400 capitalize">
          {subject} Quiz
        </h2>

        <div className="quiz-info flex justify-between my-2">
          <div>
            Time <span className="timer">15</span>s
          </div>
          <div>
            Question <span className="curr-qs-no">{currentIndex + 1}</span> of{" "}
            <span className="total-qs">{questions.length}</span>
          </div>
        </div>

        <div className="question text-xl my-3" id="question">
          {currentQuestion.text}
        </div>

        <div className="option-container">
          <ol
            type="a"
            className="text-white grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {currentQuestion.options.map((option) => (
              <li
                key={option.id}
                className="bg-slate-800/50 border-[2px] border-slate-700 py-3 pl-4 rounded-md shadow-xs  shadow-black transition-all duration-200 hover:shadow-md hover:bg-sky-600 hover:border-sky-400 hover:scale-103 cursor-pointer capitalize"
                onClick={() => setSelectedOption(option)}
              >
                {option.text}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex justify-center mt-6 md:mt-10">
          <button
            className="next-btn btn bg-blue-600 text-lg font-[500] px-8 py-1 rounded-md"
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
