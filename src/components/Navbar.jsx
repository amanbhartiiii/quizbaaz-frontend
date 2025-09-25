import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center  overflow-hidden sticky top-3 sm:top-5">
      <div className=" bg-black/70 backdrop-blur-md w-[95%] flex justify-between items-center px-2 lg:px-20 py-3 rounded-lg border-1 border-blue-400">
        <div className="flex items-center font-bold">
          <div className="text-2xl md:hidden">
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
          <div
            className="text-2xl px-6 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500
  bg-clip-text text-transparent"
          >
            quiZ<span className="">baaZ</span>
          </div>
        </div>
        <ul className="text-white space-x-10 hidden md:flex">
          <li className="cursor-pointer hover:text-slate-500">Home</li>
          <li className="cursor-pointer hover:text-slate-500">Quiz</li>
          <li className="cursor-pointer hover:text-slate-500">Leaderboard</li>
          <li className="cursor-pointer hover:text-slate-500">Notes</li>
          <li className="cursor-pointer hover:text-slate-500">About</li>
        </ul>
        <div className="font-semibold flex">
          <Link to="/login">
            <button className="px-4 py-2 bg-indigo-300 border-2 border-green-950 rounded-md cursor-pointer hover:bg-green-950 hover:text-white">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="mx-1 px-4 py-2.5 bg-green-950 text-white rounded-md cursor-pointer hover:bg-green-800 hidden md:block">
              Signup
            </button>
          </Link>
        </div>
        <div className="hidden">
          <span className="bg-blue-400 text-white">A</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
