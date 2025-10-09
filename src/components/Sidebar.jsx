import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className=" bg-black/70 backdrop-blur-md h-screen w-screen fixed top-0 z-50 pt-3 text-white">
      <div className="flex justify-between border-b p-2">
        <div className="text-xl">Aman Bharti</div>
        <button className="text-2xl">
          <IoMdClose />
        </button>
      </div>
      <ul className="pl-4 pt-2 space-y-2">
        <li className="cursor-pointer hover:text-slate-500">Home</li>
        <li className="cursor-pointer hover:text-slate-500">Quiz</li>
        <li className="cursor-pointer hover:text-slate-500">Leaderboard</li>
        <li className="cursor-pointer hover:text-slate-500">Notes</li>
        <li className="cursor-pointer hover:text-slate-500">About</li>
      </ul>
    </div>
  );
};

export default Sidebar;
