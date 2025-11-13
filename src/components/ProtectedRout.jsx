import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children }) => {
  const user = localStorage.getItem("user");
  console.log(user);
  if (!user) {
    return <Navigate to={"/login"}/>;
  }
  return children;
};

export default ProtectedRout;
