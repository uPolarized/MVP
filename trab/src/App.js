import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Página de boas-vindas
import Login from './components/Login'; // Página de login
import Signup from './components/Cadastro'; // Página de cadastro

function App() {
  // Estado que indica se o usuário está logado ou não
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Efeito para verificar o login do usuário ao carregar a página
  useEffect(() => {
    // Verifica se o usuário tem um token na sessionStorage
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Função de login que armazena o token na sessionStorage
  const handleLogin = (token) => {
    sessionStorage.setItem('authToken', token); // Armazena o token na sessionStorage
    setIsLoggedIn(true); // Define o estado como logado
  };

  // Função de logout que remove o token da sessionStorage
  const handleLogout = () => {
    sessionStorage.removeItem('authToken'); // Remove o token da sessionStorage
    setIsLoggedIn(false); // Define o estado como não logado
  };

  return (
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace /> // Redireciona para a landing page se já estiver logado
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Rota para a página de cadastro */}
        <Route
          path="/signup"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace /> // Redireciona para a landing page se já estiver logado
            ) : (
              <Signup />
            )
          }
        />

        {/* Rota para a landing page */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <LandingPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace /> // Redireciona para login se não estiver logado
            )
          }
        />

        {/* Rota padrão para redirecionar para login caso a rota seja inválida */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
