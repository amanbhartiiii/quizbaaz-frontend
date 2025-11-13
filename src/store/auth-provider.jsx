import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: {},
  login: () => {},
  signup: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const loginData = {
      email,
      password,
    };
    fetch("http://localhost:9090/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", data);
        console.log("Login Successfull");
      })
      .catch(err => {
        console.error(err);
      })
  };

  const signup = (name, email, password) => {
    const signupData = {
      name,
      email,
      password,
    };

    fetch("http://localhost:9090/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((data) => {
        login(data.email, data.password);
        console.log("Signup Successfull");
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
