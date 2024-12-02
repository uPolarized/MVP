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
    
    // Simulando um cadastro bem-sucedido
    alert("Cadastro realizado com sucesso!");
    
    // Redirecionar para a tela de login após o cadastro
    navigate("/login"); // Caminho da página de login
  };

  const styles = `
    body {
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #A8E6A3 0%, #D4F5D5 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .signup-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .signup-card {
      background: #fff;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 90%;
      max-width: 400px;
    }
    .signup-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .signup-form {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
    .signup-input {
      border: none;
      border-radius: 10px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      background: #f5f5f5;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .signup-button {
      background: linear-gradient(135deg, #A8E6A3 0%, #D4F5D5 100%);
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 0.75rem;
      font-size: 1rem;
      cursor: pointer;
    }
    .social-login {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
    .social-button {
      background: #fff;
      color: #333;
      border: 1px solid #ddd;
      padding: 0.75rem;
      border-radius: 10px;
      margin: 0 0.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
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
