import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { TbHandFingerRight } from "react-icons/tb";

const Sidebar = ({openSidebar, setOpenSidebar}) => {
  return (
    <div
      className={`bg-black/70 backdrop-blur-md h-screen w-[300px] fixed top-0 z-50 pt-3 text-white transition-transform duration-300 ease-linear ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between border-b p-2 pl-4">
        <div className="text-xl">Aman Bharti</div>
        <button
          className="text-2xl"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <IoMdClose />
        </button>
      </div>
      <ul className="pt-3 pl-6 space-y-4">
        <li className="cursor-pointer hover:text-slate-500 flex items-center space-x-3">
          <IoMdHome /> <p>Home</p>
        </li>
        <li className="cursor-pointer hover:text-slate-500 flex items-center space-x-3">
          <FaCircleQuestion /> <p>Quiz</p>
        </li>
        <li className="cursor-pointer hover:text-slate-500 flex items-center space-x-3">
          <MdLeaderboard /> <p>Leaderboard</p>
        </li>
        <li className="cursor-pointer hover:text-slate-500 flex items-center space-x-3">
          <FaBookOpen /> <p>Notes</p>
        </li>
        <li className="cursor-pointer hover:text-slate-500 flex items-center space-x-3">
          <TbHandFingerRight /> <p>About</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
