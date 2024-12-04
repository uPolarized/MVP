import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa"; // Ícones de redes sociais
import styled from "styled-components";

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

  return (
    <LoginContainer>
      <LoginCard>
        <Logo src="logo.jpg" alt="Logo EsporteFY" />
        <LoginTitle>Bem-vindo ao EsporteFY</LoginTitle>
        <LoginSubtitle>Faça login para acessar recursos exclusivos.</LoginSubtitle>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <LoginInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <LoginInput
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <LoginButton type="submit">Entrar</LoginButton>
          </InputGroup>
        </form>
        <LoginFooter>
          <p>Não tem uma conta?</p>
          <LoginLink onClick={goToSignUp}>Criar Conta</LoginLink>
        </LoginFooter>
        <SocialLoginButtons>
          <SocialLoginButton onClick={() => handleSocialLogin("Facebook")}>
            <FaFacebook size={20} className="social-icon" />
            Facebook
          </SocialLoginButton>
          <SocialLoginButton onClick={() => handleSocialLogin("Instagram")}>
            <FaInstagram size={20} className="social-icon" />
            Instagram
          </SocialLoginButton>
          <SocialLoginButton onClick={() => handleSocialLogin("Google")}>
            <FaGoogle size={20} className="social-icon" />
            Google
          </SocialLoginButton>
        </SocialLoginButtons>
      </LoginCard>
      <InfoSection>
        <p>O EsporteFY é sua plataforma para marcar quadras e criar campeonatos!</p>
        <p>Explore nossos recursos e aproveite a experiência completa.</p>
        <InfoLink href="#features">Crie sua conta e junte-se a nós nesta experiência única</InfoLink>
      </InfoSection>
      <Footer>
        <p>© 2024 EsporteFY. Todos os direitos reservados.</p>
      </Footer>
    </LoginContainer>
  );
};

export default Login;

// Styled Components

const LoginContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #A8E6A3 0%, #D4F5D5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const LoginCard = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Logo = styled.img`
  max-width: 150px;
  margin-bottom: 1rem;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const LoginSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center; /* Garante que o item seja centralizado */
  
  input {
    width: 100%; /* O input ainda ocupará 100% do seu contêiner */
    max-width: 400px; /* Limita a largura máxima para que o input não fique muito grande */
    padding: 0,5rem; /* Reduz o padding para diminuir o tamanho do input */
    text-align: center; /* Centraliza o texto dentro do input */
    border: 2px solid #ddd;
    border-radius: 12px;
    background: #f9f9f9;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    box-sizing: border-box; /* Garante que o padding não afete a largura total */
  }

  input:focus {
    border-color: #4caf50;
    outline: none;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const LoginInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 0.75rem;
  font-size: 1rem;
  background: #f5f5f5;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: background-color 0.3s ease;
  &:focus {
    background: #eaeaea;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #A8E6A3 0%, #D4F5D5 100%);
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 0.75rem;
  font-size: 1.2rem;
  font-weight: 700; 
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 45px;
  margin-top: 1rem;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const LoginFooter = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const LoginLink = styled.a`
  color: #4CAF50;
  font-weight: bold;
  text-decoration: none;
  margin-left: 0.25rem;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #388E3C;
  }
`;

const SocialLoginButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const SocialLoginButton = styled.button`
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    border-color: #4CAF50;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
  }
`;

const InfoSection = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  color: #555;
`;

const InfoLink = styled.a`
  color: #4CAF50;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #388E3C;
  }
`;

const Footer = styled.footer`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #666;
  text-align: center;
`;
