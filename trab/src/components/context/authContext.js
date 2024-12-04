import React, { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token); 
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken"); 
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
