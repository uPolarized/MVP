import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import styled from "styled-components";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      navigate("/");
    }
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const handleSocialLogin = (platform) => {
    alert(`Login com ${platform} bem-sucedido!`);
    onLogin();
    navigate("/");
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
  <LoginLink onClick={goToSignUp}> Criar Conta Agora</LoginLink>
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
  <InfoLink href="#features"> Crie sua conta e junte-se a nós!</InfoLink>
</InfoSection>

      <Footer>
        <p>© 2024 EsporteFY. Todos os direitos reservados.</p>
      </Footer>
    </LoginContainer>
  );
};

export default Login;

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
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

const Logo = styled.img`
  max-width: 150px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LoginSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
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
  text-align: center; /* Adiciona o alinhamento central */
  &:focus {
    background: #eaeaea;
  }
  @media (max-width: 768px) {
    padding: 0.65rem;
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
  @media (max-width: 768px) {
    font-size: 1rem;
    height: 40px;
  }
`;

const LoginFooter = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LoginLink = styled.button`
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-top: 8px;

  &:hover {
    background-color: #388E3C;
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;


const SocialLoginButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
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
  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;

const InfoSection = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  color: #555;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

const InfoLink = styled.a`
  color: #4CAF50;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: #388E3C;
    text-decoration: underline;
    transform: scale(1.1); // Aumenta ligeiramente no hover para chamar atenção
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const Footer = styled.footer`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #666;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
