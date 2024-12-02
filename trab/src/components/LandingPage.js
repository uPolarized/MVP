import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const LandingPage = () => {
  const handleButtonClick = () => {
    // Substitua pelo link do Google Forms quando disponível
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfMEJYH-xHLvm7NJu4eblkB7i5F_mvpcW_eWjmR_uNRmLd92w/viewform?usp=sf_link';
  };

  
  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img
            src="logo.jpg" // Substitua pelo caminho da sua logo
            alt="Logo Esporte é Vida"
            style={styles.logo}
          />
          <div style={styles.headerText}>
            <h1 style={styles.headerTitle}>EsporteFY</h1>
            <p style={styles.headerSubtitle}>Viva a integração, superação e a paixão pelos esportes!</p>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <a href="#home" style={styles.navItem}>Início</a>
        <a href="#sobre" style={styles.navItem}>Sobre</a>
        <a href="#modalidades" style={styles.navItem}>Modalidades</a>
        <a href="#noticias" style={styles.navItem}>Notícias</a>
        <a href="#contato" style={styles.navItem}>Contato</a>
        <a href="#mapa" style={styles.navItem}>Encontre quadras próximas</a>
      </nav>

      {/* Seções */}
      <section id="home" style={styles.heroSection}>
        <h2 style={styles.heroTitle}>Transforme sua Vida com Esporte!</h2>
        <p style={styles.heroText}>Descubra como o esporte pode melhorar sua saúde, bem-estar e estilo de vida.</p>
        <a href="#modalidades" style={styles.ctaButton}>Saiba Mais</a>
      </section>

      <section id="sobre" style={styles.section}>
        <h2 style={styles.sectionTitle}>Sobre o Esporte</h2>
        <p style={styles.sectionText}>O esporte é uma atividade física estruturada que envolve exercícios, competições e recreação, com o objetivo de promover saúde, bem-estar e integração social. Ele traz benefícios físicos como o fortalecimento do sistema cardiovascular, aumento da flexibilidade, controle do peso e prevenção de doenças crônicas. Além disso, ajuda na melhora da saúde mental, aliviando o estresse e promovendo uma sensação de felicidade através da liberação de endorfinas.</p>
      </section>

      <section id="modalidades" style={styles.section}>
        <h2 style={styles.sectionTitle}>Modalidades</h2>
        <div style={styles.modalidades}>
          <div style={styles.modalidadeItem}>
            <img
              src="/fute.jpeg" // Substitua com o caminho correto para a imagem de futebol
              alt="Futebol"
              style={styles.modalidadeImage}
            />
            <h3 style={styles.modalidadeTitle}>Futebol</h3>
            <p style={styles.modalidadeText}>A emoção do futebol une milhões de pessoas no mundo todo. Participe e sinta a paixão!</p>
          </div>
          <div style={styles.modalidadeItem}>
            <img
              src="volei.jpeg" // Substitua com o caminho correto para a imagem de vôlei
              alt="Vôlei"
              style={styles.modalidadeImage}
            />
            <h3 style={styles.modalidadeTitle}>Vôlei</h3>
            <p style={styles.modalidadeText}>Ideal para quem adora trabalhar em equipe. O vôlei traz diversão e muito movimento!</p>
          </div>
          <div style={styles.modalidadeItem}>
            <img
              src="basquete.jpg" // Substitua com o caminho correto para a imagem de basquete
              alt="Basquete"
              style={styles.modalidadeImage}
            />
            <h3 style={styles.modalidadeTitle}>Basquete</h3>
            <p style={styles.modalidadeText}>Simples, acessível e energizante. O basquete é perfeito para quem busca saúde e disposição!</p>
          </div>
        </div>
      </section>

      <section id="noticias" style={styles.section}>
        <h2 style={styles.sectionTitle}>Últimas Notícias</h2>
        <p style={styles.sectionText}>Acompanhe os principais campeonatos, resultados e curiosidades do mundo esportivo. Fique por dentro de tudo!</p>
      </section>

      <section id="contato" style={styles.section}>
        <h2 style={styles.sectionTitle}>Entre em Contato</h2>
        <p style={styles.sectionText}>Tem alguma dúvida ou quer participar dos nossos eventos? Entre em contato conosco!</p>
        {/* Botão para o Google Forms */}
        <button onClick={handleButtonClick} style={styles.formButton}>Ir para o Google Forms</button>
      </section>

      {/* Mapa com localização fixa em Maricá */}
      <section id="mapa" style={styles.mapSection}>
        <h2 style={styles.mapTitle}>Encontre Quadras Próximas</h2>
        <MapContainer center={[-22.9833, -42.8667]} zoom={13} style={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-22.9833, -42.8667]}>
            <Popup>Quadra em Maricá</Popup>
          </Marker>
        </MapContainer>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; 2024 Esporte Para Todos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Estilos em JS (CSS-in-JS)
const styles = {
  header: {
    backgroundColor: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    textAlign: 'center',
    padding: '50px 20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  logo: {
    width: '150px',
    height: 'auto',
    borderRadius: '10px',
  },
  headerText: {
    maxWidth: '600px',
    textAlign: 'left',
  },
  headerTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  headerSubtitle: {
    fontSize: '20px',
    marginBottom: '20px',
    fontStyle: 'italic',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: '12px 0',
  },
  navItem: {
    color: 'white',
    padding: '14px 20px',
    textDecoration: 'none',
    fontSize: '18px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    fontWeight: '600',
  },
  heroSection: {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderBottom: '5px solid #fff',
  },
  heroTitle: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  heroText: {
    fontSize: '20px',
    marginBottom: '40px',
  },
  ctaButton: {
    backgroundColor: '#333',
    color: 'white',
    padding: '15px 30px',
    fontSize: '18px',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    fontWeight: '600',
  },
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '18px',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
  modalidades: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
    backgroundColor: '#A8E6A3', // Verde claro
    borderRadius: '20px', // Bordas arredondadas
    padding: '20px',
  },
  
  modalidadeItem: {
    textAlign: 'center',
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  modalidadeImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '15px',
    marginBottom: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  modalidadeTitle: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  modalidadeText: {
    fontSize: '16px',
    color: '#555',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerText: {
    margin: '0',
    fontSize: '16px',
  },

  mapSection: {
    padding: '60px 10px', 
    textAlign: 'center',
    borderRadius: '50px', 
    backgroundColor: '#A8E6A3'
  },
  
  mapTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },

  map: {
    height: '500px',
    borderRadius: '15px',
  },

  formButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 30px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default LandingPage;
