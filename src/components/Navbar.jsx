import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="h-[60px] w-screen bg-indigo-300 flex justify-between px-2 pt-2 drop-shadow-cyan-400 md:px-6">
      <div className="text-xl pt-3 font-bold md:hidden">
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>
      <div className="text-2xl px-6 font-bold">quiZbaaZ</div>
      <ul className="space-x-3 text-md font-semibold pt-1 hidden md:flex">
        <li className="cursor-pointer hover:text-slate-500">Home</li>
        <li className="cursor-pointer hover:text-slate-500">Quiz</li>
        <li className="cursor-pointer hover:text-slate-500">Leaderboard</li>
        <li className="cursor-pointer hover:text-slate-500">Notes</li>
        <li className="cursor-pointer hover:text-slate-500">About</li>
      </ul>
      <div>
        <button className="px-2 py-1 bg-green-500 rounded-md cursor-pointer hover:bg-green-700 hover:text-white">
          Login
        </button>
        <button className="mx-1 px-2 py-1 bg-amber-600 rounded-md cursor-pointer hover:bg-amber-800 hover:text-white">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
