import { useNavigate } from "react-router-dom";

const QuizBox = ({ name, imgSrc }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`quiz/${name.toLowerCase()}`)}
      className="max-w-2xs min-w-[200px] flex-1 m-3 bg-white rounded-lg overflow-hidden p-4 cursor-pointer shadow-white transition-shadow, transform duration-500 shadow-md hover:shadow-lg hover:scale-103"
    >
      <img className="w-fit rounded-t-lg" src={imgSrc} alt="" />
      <h3 className="text-2xl text-center font-[700] my-2">{name}</h3>
    </div>
  );
};

export default QuizBox;
