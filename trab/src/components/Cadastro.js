import styled from "styled-components";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #a8e6a3 0%, #d4f5d5 100%);
`;

const SignupCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 420px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
`;

const SignupTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #388e3c;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    color: #81c784;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  }
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const SignupInput = styled.input`
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f9f9f9;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:focus {
    border-color: #4caf50;
    outline: none;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const SignupButton = styled.button`
  background: linear-gradient(135deg, #a8e6a3 0%, #d4f5d5 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #81c784 0%, #c8e6c9 100%);
    transform: translateY(-5px);
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const SocialButton = styled.button`
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

  &:hover {
    border-color: #4caf50;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
  }
`;

const SocialIcon = styled.div`
  margin-right: 0.5rem;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #666;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #4caf50;
  text-decoration: none;
  font-weight: bold;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #388e3c;
  }
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  const handleSocialLogin = (platform) => {
    alert(`${platform} Cadastro realizado com sucesso!`);
    navigate("/login");
  };

  return (
    <SignupContainer>
      <SignupCard>
        <Logo src="logo.png" alt="Logo" />
        <SignupTitle>Crie sua Conta</SignupTitle>
        <SignupForm onSubmit={handleSubmit}>
          <SignupInput
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <SignupInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SignupInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SignupButton type="submit">Cadastrar</SignupButton>
        </SignupForm>
        <SocialLogin>
          <SocialButton onClick={() => handleSocialLogin("Instagram")}>
            <SocialIcon>
              <FaInstagram size={20} />
            </SocialIcon>
            Instagram
          </SocialButton>
          <SocialButton onClick={() => handleSocialLogin("Facebook")}>
            <SocialIcon>
              <FaFacebook size={20} />
            </SocialIcon>
            Facebook
          </SocialButton>
          <SocialButton onClick={() => handleSocialLogin("Google")}>
            <SocialIcon>
              <FaGoogle size={20} />
            </SocialIcon>
            Google
          </SocialButton>
        </SocialLogin>
      </SignupCard>
      <Footer>
        <p>
          © 2024 EsporteFY. Todos os direitos reservados.
          <FooterLink href="#privacy">Política de Privacidade</FooterLink> |
          <FooterLink href="#terms">Termos de Serviço</FooterLink>
        </p>
      </Footer>
    </SignupContainer>
  );
};

export default SignUp;
