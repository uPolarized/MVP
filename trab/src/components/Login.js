import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa"; // Ícones de redes sociais

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook do React Router para navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(); // Chama a função onLogin para indicar que o login foi bem-sucedido
      navigate("/"); // Redireciona para a LandingPage
    }
  };

  const goToSignUp = () => {
    navigate("/signup"); // Redireciona para a página de cadastro
  };

  const handleSocialLogin = (platform) => {
    // Simula o login via redes sociais
    alert(`Login com ${platform} bem-sucedido!`);
    onLogin(); // Chama a função onLogin para indicar que o login foi bem-sucedido
    navigate("/"); // Redireciona para a LandingPage após o login social
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
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  .login-card {
    background: #fff;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 90%;
    max-width: 400px;
  }
  .logo {
    max-width: 150px;
    margin-bottom: 1rem;
  }
  .login-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }
  .login-subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
  .login-form {
    display: flex;
    flex-direction: column;
  }
  .login-input {
    border: none;
    border-radius: 10px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    background: #f5f5f5;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: background-color 0.3s ease;
  }
  .login-input:focus {
    background: #eaeaea;
  }
  .login-button {
    background: linear-gradient(135deg, #A8E6A3 0%, #D4F5D5 100%);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .login-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  .login-footer {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
  }
  .login-link {
    color: #4CAF50;
    font-weight: bold;
    text-decoration: none;
    margin-left: 0.25rem;
    transition: color 0.3s ease;
  }
  .login-link:hover {
    color: #388E3C;
  }
  .footer {
    margin-top: 1rem;
    font-size: 0.85rem;
    color: #666;
    text-align: center;
  }
  .footer a {
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
    margin: 0 0.5rem;
    transition: color 0.3s ease;
  }
  .footer a:hover {
    color: #388E3C;
  }
  .social-login-buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .social-login-button {
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
  .info-section {
    text-align: center;
    margin-top: 2rem;
    font-size: 1rem;
    color: #555;
  }
  .info-section p {
    margin-bottom: 1rem;
  }
  .info-section a {
    color: #4CAF50;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .info-section a:hover {
    color: #388E3C;
  }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="login-container">
        <div className="login-card">
          <img
            src="logo.jpg" // Substitua por um link para a logo do projeto
            alt="Logo EsporteFY"
            className="logo"
          />
          <h1 className="login-title">Bem-vindo ao EsporteFY</h1>
          <p className="login-subtitle">Faça Login para acessar seu painel de controle e mais recursos exclusivos.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
          <div className="login-footer">
            <p>Não tem uma conta?</p>
            <a href="#signup" className="login-link" onClick={goToSignUp}>
              Inscreva-se
            </a>
          </div>
          <div className="social-login-buttons">
            <button
              className="social-login-button"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <FaFacebook size={20} className="social-icon" />
              Facebook
            </button>
            <button
              className="social-login-button"
              onClick={() => handleSocialLogin("Instagram")}
            >
              <FaInstagram size={20} className="social-icon" />
              Instagram
            </button>
            <button
              className="social-login-button"
              onClick={() => handleSocialLogin("Google")}
            >
              <FaGoogle size={20} className="social-icon" />
              Google
            </button>
          </div>
        </div>
        <div className="info-section">
          <p>O EsporteFY é sua plataforma para marcar quadras e criar campeonatos!</p>
          <p>Explore nossos recursos e aproveite a experiência completa.</p>
          <a href="#features">Crie sua conta e junte-se a nós nesta experiência única</a>
        </div>
        <footer className="footer">
          <p>
            © 2024 EsporteFY. Todos os direitos reservados. 
            <a href="#privacy">Política de Privacidade</a> | 
            <a href="#terms">Termos de Serviço</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Login;
