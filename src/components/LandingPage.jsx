import QuizBaazImg from "../assets/quizbaaz.png"

const LandingPage = () => {
  return (
    
    <div className="w-screen min-h-screen flex justify-between p-8">
      <div className="flex-2/3 text-center md:pt-12">
        <div>
          <h2 className="text-5xl sm:text-7xl pb-5">
            Test Your <span className="text-blue-300">Knowledge</span>, Fuel
            Your <span className="text-cyan-500">Engine!</span>
          </h2>
        </div>
        <div className="lg:px-8">
          <p className="max-w-3xl sm:text-xl">
            Our platform challenges you with questions on Java, Java Script, C,
            C ++, Python, and more, making learning both fun and effective.
            Compete with peers, track your progress, and climb the leaderboard
            to prove your skills. Ready to ace your next coding interview or
            simply want to learn new things? Quizbaaz is your perfect partner in
            this journey. Dive in, and let's make learning a thrilling
            adventure!
          </p>
        </div>
        <div className="flex justify-center">

          {/* After loged in this button will be hidden */}
          <button className="bg-green-950 text-white text-lg px-6 py-3 rounded-md mx-2 my-6 font-[600] hover:bg-green-700">SignUp</button>

          {/* When user loged in then show this button to start quiz */}
          <button className="bg-amber-300 px-4 py-2.5 rounded-md mx-2 my-6 font-[600] hidden">Start Now</button>
        </div>
      </div>
      <div className="text-[200px] text-center hidden flex-1/3 md:block">
        <img
          className="w-full"
          src={QuizBaazImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
