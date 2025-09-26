import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: {},
  isLogedIn: false,
  login: () => {},
  signup: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const login = (email, password) => {
    const loginData = {
      email,
      password,
    };
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setIsLogedIn(true);
      });
  };

  const signup = (name, email, password) => {
    const signupData = {
      name,
      email,
      password
    }

    fetch("http://localhost:8080/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))
  };

  return (
    <AuthContext.Provider value={{ user, isLogedIn, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
