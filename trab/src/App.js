import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import Login from './components/Login';
import Signup from './components/Cadastro'; 

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  
  const handleLogin = (token) => {
    sessionStorage.setItem('authToken', token); 
    setIsLoggedIn(true); 
  };

  
  const handleLogout = () => {
    sessionStorage.removeItem('authToken'); 
    setIsLoggedIn(false); 
  };

  return (
    <Router>
      <Routes>
        
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace /> 
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        
        <Route
          path="/signup"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace /> 
            ) : (
              <Signup />
            )
          }
        />

       
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <LandingPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace /> 
            )
          }
        />

        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
