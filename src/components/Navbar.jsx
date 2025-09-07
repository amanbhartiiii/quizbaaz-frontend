import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="w-screen bg-indigo-300 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-xl pt-3 font-bold md:hidden">
          <GiHamburgerMenu></GiHamburgerMenu>
        </div>
        <div className="text-2xl px-6 font-bold">
          quiZ<span className="">baaZ</span>
        </div>
        <ul className="space-x-10 font-bold hidden md:flex">
          <li className="cursor-pointer hover:text-slate-500">Home</li>
          <li className="cursor-pointer hover:text-slate-500">Quiz</li>
          <li className="cursor-pointer hover:text-slate-500">Leaderboard</li>
          <li className="cursor-pointer hover:text-slate-500">Notes</li>
          <li className="cursor-pointer hover:text-slate-500">About</li>
        </ul>
        <div className="font-semibold">
          <button className="px-4 py-2 bg-indigo-300 border-2 border-green-950 rounded-md cursor-pointer hover:bg-green-950 hover:text-white">
            Login
          </button>
          <button className="mx-1 px-4 py-2.5 bg-green-950 text-white rounded-md cursor-pointer hover:bg-green-800">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
