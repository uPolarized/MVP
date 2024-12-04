import React, { createContext, useContext, useState, useEffect } from "react";

// Criação do contexto de autenticação
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está autenticado ao carregar a página
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // Mantém o usuário autenticado
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token); // Armazena o token de autenticação
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // Remove o token ao deslogar
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
