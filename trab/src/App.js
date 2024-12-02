import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/Cadastro"; // Criar um componente de Cadastro

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controla o estado do login

  const handleLogin = () => {
    setIsLoggedIn(true); // Simula o login
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <LandingPage /> : <Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} /> {/* Página de cadastro */}
      </Routes>
    </Router>
  );
};

export default App;
