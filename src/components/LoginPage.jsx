import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
<IoMdClose />;

const LoginPage = () => {
  return (
    <form action="" className="">
      <div className="bg-transparent h-screen w-screen grid place-items-center fixed z-50">
        <div className="bg-white w-sm rounded-md">
          <div className="flex justify-end text-2xl pt-2 pr-2">
            <Link to="/">
            <button className="cursor-pointer">
              <IoMdClose />
            </button>
            </Link>
          </div>
          <div className="text-center pb-4  border-b">
            <p className="text-2xl font-bold">Login</p>
          </div>
          <div className="px-4 space-y-4">
            <div className="text-center py-5">
              <p className="text-2xl font-bold">Welcome to quiZbaaZ</p>
              <p>Login to start your journey</p>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="w-full h-10 rounded-lg shadow-md shadow-blue-300 border border-blue-300"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="w-full h-10 rounded-lg shadow-md shadow-blue-300 border border-blue-300"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div className="text-center py-5">
            <button className="px-4 py-2.5 bg-green-950 text-white rounded-md cursor-pointer hover:bg-green-800">
              Login
            </button>
            <p className="my-2">
              Don't have an account: <a href="/signup">SignUp</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
