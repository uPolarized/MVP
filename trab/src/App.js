import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Página de boas-vindas
import Login from './components/Login'; // Página de login
import Signup from './components/Cadastro'; // Página de cadastro

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

        {/* Rota para a página de cadastro */}
        <Route path="/signup" element={<Signup />} />

        {/* Rota para a landing page */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <LandingPage onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Login onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
