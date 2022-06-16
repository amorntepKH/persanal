import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get("/users/me");
          setUser(resMe.data.user);
        }
      } catch (err) {
        // removeAccessToken();
        navigate("/");
      }
    };

    fetchMe();
  }, []);

  const signUp = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    const res = await axios.post("/auth/signup/", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    setAccessToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
    navigate("/products");
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("/auth/login", { email, password });
      setAccessToken(res.data.token);
      const resMe = await axios.get("/users/me");
      setUser(resMe.data.user);
      navigate("/products");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ signUp, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
