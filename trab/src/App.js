import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet"; // Importa o Leaflet
import "leaflet/dist/leaflet.css";

const LandingPage = () => {
  const [positions, setPositions] = useState([]); // Estado para armazenar várias posições

  // Função para salvar a localização ao clicar no mapa
  const LocationMap = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPositions((prevPositions) => [...prevPositions, [lat, lng]]); // Adiciona a nova posição ao estado
      },
    });

    // Ícone genérico personalizado
    const markerIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/924/924874.png", // URL para ícone genérico
      iconSize: [30, 30], // Tamanho do ícone
      iconAnchor: [15, 30], // Ancoragem do ícone (onde o ponto do marcador será)
      popupAnchor: [0, -30], // Ajuste do popup
    });

    return (
      <>
        {positions.map((position, index) => (
          <Marker key={index} position={position} icon={markerIcon}>
            <Popup>
              Localização salva: {position[0].toFixed(4)}, {position[1].toFixed(4)}
            </Popup>
          </Marker>
        ))}
      </>
    );
  };

  // Função para limpar os marcadores
  const clearMarkers = () => {
    setPositions([]); // Limpa o estado de posições
  };

  const handleButtonClick = () => {
    // Substitua pelo link do Google Forms quando disponível
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfMEJYH-xHLvm7NJu4eblkB7i5F_mvpcW_eWjmR_uNRmLd92w/viewform?usp=sf_link";
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
        <a href="#revitalizacao" style={styles.navItem}>Revitalização</a>
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
        <p style={styles.sectionText}>
          O esporte é uma atividade física estruturada que envolve exercícios, competições e recreação, com o objetivo
          de promover saúde, bem-estar e integração social. Ele traz benefícios físicos como o fortalecimento do sistema
          cardiovascular, aumento da flexibilidade, controle do peso e prevenção de doenças crônicas. Além disso, ajuda
          na melhora da saúde mental, aliviando o estresse e promovendo uma sensação de felicidade através da liberação
          de endorfinas.
        </p>
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

      <section id="revitalizacao" style={styles.section}>
  <h2 style={styles.sectionTitle}>Revitalização de Quadras em Maricá</h2>
  <p style={styles.sectionText}>
    Maricá está investindo na revitalização de suas quadras esportivas para proporcionar aos moradores
    espaços mais seguros e modernos para a prática de esportes. O projeto inclui melhorias nas estruturas
    das quadras, novos equipamentos e mais opções para os atletas e amantes do esporte. Acompanhe as novidades
    e aproveite as novas oportunidades para a prática esportiva!
  </p>
</section>


      <section id="contato" style={styles.section}>
        <h2 style={styles.sectionTitle}>Entre em Contato</h2>
        <p style={styles.sectionText}>Tem alguma dúvida ou quer participar dos nossos eventos? Entre em contato conosco!</p>
        {/* Botão para o Google Forms */}
        <button onClick={handleButtonClick} style={styles.formButton}>Ir para o Google Forms</button>
      </section>

      {/* Mapa com múltiplas localizações salvas */}
      <section id="mapa" style={styles.mapSection}>
        <h2 style={styles.mapTitle}>Encontre Quadras Próximas</h2>
        <MapContainer center={[-22.9833, -42.8667]} zoom={13} style={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMap />
        </MapContainer>
        <button onClick={clearMarkers} style={styles.clearButton}>Limpar Marcadores</button> {/* Botão para limpar */}
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
    backgroundColor: "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    textAlign: "center",
    padding: "50px 20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  logo: {
    width: "150px",
    height: "auto",
    borderRadius: "10px",
  },
  headerText: {
    maxWidth: "600px",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0",
  },
  headerSubtitle: {
    fontSize: "18px",
    marginTop: "10px",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#333",
    padding: "12px 0",
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "0 15px",
    cursor: "pointer",
  },
  heroSection: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#A8E6A3",
    borderRadius: "10px",
  },
  heroTitle: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  heroText: {
    fontSize: "18px",
    marginTop: "20px",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "30px",
    padding: "15px 30px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "18px",
    textDecoration: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  section: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",  // Alterado apenas na seção específica
    color: "#333",                // Cor do texto
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sectionText: {
    fontSize: "18px",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
  },
  modalidades: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
    backgroundColor: "#A8E6A3",
    borderRadius: "20px",
    padding: "20px",
  },
  modalidadeItem: {
    textAlign: "center",
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  modalidadeImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  modalidadeTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  modalidadeText: {
    fontSize: "16px",
    color: "#555",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  footerText: {
    margin: "0",
    fontSize: "16px",
  },
  mapSection: {
    padding: "60px 10px",
    textAlign: "center",
    borderRadius: "50px",
    backgroundColor: "#A8E6A3",
  },
  mapTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  map: {
    height: "500px",
    borderRadius: "15px",
  },
  clearButton: {
    backgroundColor: "#FF5733",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
  formButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default LandingPage;
