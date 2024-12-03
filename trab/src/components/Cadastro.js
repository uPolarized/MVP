import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Importar o useNavigate

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook de navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  const styles = `
    body {
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #a8e6a3 0%, #d4f5d5 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: #333;
    }
    .signup-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .signup-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 100%;
      max-width: 420px;
      transition: transform 0.3s ease;
    }
    .signup-card:hover {
      transform: translateY(-10px);
    }
    .signup-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #4CAF50;
    }
    .signup-form {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
    }
    .signup-input {
      border: 2px solid #ddd;
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 1rem;
      background: #f9f9f9;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    .signup-input:focus {
      border-color: #4CAF50;
      outline: none;
      box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    }
    .signup-button {
      background: linear-gradient(135deg, #a8e6a3 0%, #d4f5d5 100%);
      color: #fff;
      border: none;
      border-radius: 12px;
      padding: 1rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }
    .signup-button:hover {
      background: linear-gradient(135deg, #81c784 0%, #c8e6c9 100%);
      transform: translateY(-5px);
    }
    .social-login {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
    .social-button {
      background: #fff;
      color: #333;
      border: 2px solid #ddd;
      padding: 1rem;
      border-radius: 12px;
      margin: 0 0.75rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    }
    .social-button:hover {
      border-color: #4CAF50;
      box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
    }
    .social-icon {
      margin-right: 0.5rem;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="signup-container">
        <div className="signup-card">
          <h1 className="signup-title">Crie sua Conta</h1>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              className="signup-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="signup-button">
              Cadastrar
            </button>
          </form>
          <div className="social-login">
            <button className="social-button">
              <FaInstagram size={20} className="social-icon" />
              Instagram
            </button>
            <button className="social-button">
              <FaFacebook size={20} className="social-icon" />
              Facebook
            </button>
            <button className="social-button">
              <FaGoogle size={20} className="social-icon" />
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
