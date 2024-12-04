import styled from 'styled-components';

// Header
export const Header = styled.header`
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 40px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.60);
  border-bottom: 4px solid #333;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
`;

export const HeaderText = styled.div`
  max-width: 600px;
  text-align: center;
  color: #fff;
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const HeaderSubtitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-top: 10px;
  letter-spacing: 1px;
  color: #e0e0e0;
`;

// Navbar
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C3E50;
  padding: 15px 30px;
  border-bottom: 4px solid #18BC9C;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const NavbarLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #18BC9C;
  text-transform: uppercase;
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export const NavbarLink = styled.a`
  color: #ECF0F1;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #18BC9C;
  }
`;

// Hero Section
export const HeroSection = styled.section`
  padding: 80px 30px;
  text-align: center;
  background-color: #A8E6A3;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 1200px;
`;

export const HeroTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #2E4053;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
`;

export const HeroText = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #333;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 0 15px;
`;

// Call to Action Button
export const CtaButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 15px 30px; 
  background-color: #4CAF50;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  border-radius: 50px; /* Tornando os cantos mais arredondados */
  cursor: pointer;
  transition: all 0.3s ease; /* Transição suave para todos os efeitos */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma leve sombra para o botão */
  
  /* Efeito de escurecimento ao passar o mouse */
  &:hover {
    background-color: #45a049; /* Cor mais escura ao passar o mouse */
    transform: translateY(-3px); /* Levanta o botão um pouco para dar efeito de clique */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Aumenta a sombra no hover */
  }

  /* Efeito de clique */
  &:active {
    transform: translateY(1px); /* Desce o botão levemente ao clicar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Diminui a sombra ao clicar */
  }
`;


// Section
export const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f9f9f9;
  color: #333;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #34495E;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  text-align: justify;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Modalidades
export const Modalidades = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  background-color: #A8E6A3;
  border-radius: 20px;
  padding: 20px;
`;

export const ModalidadeItem = styled.div`
  text-align: center;
  width: 30%;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalidadeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalidadeTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #34495E;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ModalidadeText = styled.p`
  font-size: 16px;
  color: #555;
`;

// Aviso
export const AvisoTexto = styled.p`
  font-size: 18px;
  color: #2C3E50;
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
  padding: 10px;
  background-color: #F8F8F8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  letter-spacing: 0.5px;
  font-style: italic;
`;

// Footer
export const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
  margin-top: 20px; /* Adiciona um pequeno espaçamento superior para dar mais espaço */
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

// Map Section
export const MapSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  border-radius: 50px;
  background-color: #A8E6A3;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: auto;
  margin-bottom: 40px; /* Adiciona um espaçamento inferior para separar da footer */
`

export const MapTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2C3E50;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 4px solid #0A7C3A;
  padding-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

export const Map = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
`;

// Clear Button
export const ClearButton = styled.button`
  background-color: #FF5733;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 40px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #C0392B;
    transform: scale(1.05);
  }
`;