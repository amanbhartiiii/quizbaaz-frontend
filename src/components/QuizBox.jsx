import JavaImg from "../assets/java.png"


const QuizBox = ({name, imgSrc})=> {
  return (
    <div class="max-w-sm min-w-[200px] flex-1 m-3 bg-white rounded-lg  border overflow-hidden p-4 transition-shadow duration-300 hover:shadow-2xl shadow-sm">
      <img className="w-fit rounded-t-lg" src={imgSrc} alt="" />
      <h3 className="text-2xl text-center font-[700] my-2">{name}</h3>
    </div>
  );
}

export default QuizBox;