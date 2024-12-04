import React, { useState } from "react";
import {
  Header,
  HeaderContent,
  Logo,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  Navbar,
  NavbarLink,
  HeroSection,
  HeroTitle,
  HeroText,
  CtaButton,
  Section,
  SectionTitle,
  SectionText,
  Modalidades,
  ModalidadeItem,
  ModalidadeImage,
  ModalidadeTitle,
  ModalidadeText,
  AvisoTexto,
  Footer,
  MapSection,
  MapTitle,
  ClearButton
} from './styles';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LandingPage = () => {
  const [positions, setPositions] = useState([]);

  const LocationMap = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPositions((prevPositions) => [...prevPositions, [lat, lng]]);
      },
    });

    const markerIcon = new L.Icon({
      iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
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

  const clearMarkers = () => {
    setPositions([]);
  };

  const handleButtonClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfMEJYH-xHLvm7NJu4eblkB7i5F_mvpcW_eWjmR_uNRmLd92w/viewform?usp=sf_link",
      "_blank"
    );
  };

  return (
    <div>
      <Header>
        <HeaderContent>
          <Logo src="logo.png" alt="Logo Esporte é Vida" />
          <HeaderText>
            <HeaderTitle>EsporteFY</HeaderTitle>
            <HeaderSubtitle>Viva a integração, superação e a paixão pelos esportes!</HeaderSubtitle>
          </HeaderText>
        </HeaderContent>
      </Header>

      <Navbar>
        <NavbarLink href="#home">Início</NavbarLink>
        <NavbarLink href="#sobre">Sobre</NavbarLink>
        <NavbarLink href="#modalidades">Modalidades</NavbarLink>
        <NavbarLink href="#revitalizacao">Revitalização</NavbarLink>
        <NavbarLink href="#contato">Contato</NavbarLink>
        <NavbarLink href="#mapa">Encontre quadras próximas</NavbarLink>
      </Navbar>

      <HeroSection id="home">
        <HeroTitle>Transforme sua Vida com Esporte!</HeroTitle>
        <HeroText>Descubra como o esporte pode melhorar sua saúde, bem-estar e estilo de vida.</HeroText>
        <CtaButton href="#modalidades">Saiba Mais</CtaButton>
      </HeroSection>

      <Section id="sobre">
        <SectionTitle>Sobre o EsporteFY</SectionTitle>
        <SectionText>
          O projeto EsporteFY tem como objetivo promover a integração e o bem-estar social por meio do esporte,
          unindo pessoas de todas as idades nas quadras revitalizadas de Maricá. A iniciativa visa gerir campeonatos amadores,
          organizar horários de jogos e facilitar o agendamento de atividades esportivas, criando um ambiente acessível e acolhedor
          para a prática de esportes. Além de incentivar a saúde física e mental, o projeto busca fortalecer a comunidade local,
          estimulando a participação de todos e promovendo a convivência entre os moradores através do esporte.
        </SectionText>
      </Section>

      <Section id="modalidades">
        <SectionTitle>Modalidades</SectionTitle>
        <Modalidades>
          <ModalidadeItem>
            <ModalidadeImage src="/fute.jpeg" alt="Futebol" />
            <ModalidadeTitle>Futebol</ModalidadeTitle>
            <ModalidadeText>A emoção do futebol une milhões de pessoas no mundo todo. Participe e sinta a paixão!</ModalidadeText>
          </ModalidadeItem>
          <ModalidadeItem>
            <ModalidadeImage src="volei.jpeg" alt="Vôlei" />
            <ModalidadeTitle>Vôlei</ModalidadeTitle>
            <ModalidadeText>Ideal para quem adora trabalhar em equipe. O vôlei traz diversão e muito movimento!</ModalidadeText>
          </ModalidadeItem>
          <ModalidadeItem>
            <ModalidadeImage src="basquete.jpg" alt="Basquete" />
            <ModalidadeTitle>Basquete</ModalidadeTitle>
            <ModalidadeText>Simples, acessível e energizante. O basquete é perfeito para quem busca saúde e disposição!</ModalidadeText>
          </ModalidadeItem>
        </Modalidades>
        <AvisoTexto>*Estes são apenas alguns dos esportes disponíveis. Existem outras modalidades para você praticar e se divertir!*.</AvisoTexto>
      </Section>

      <Section id="revitalizacao">
        <SectionTitle>Revitalização de Quadras em Maricá</SectionTitle>
        <SectionText>
          Maricá está investindo na revitalização de suas quadras esportivas para proporcionar aos moradores
          espaços mais seguros e modernos para a prática de esportes. O projeto inclui melhorias nas estruturas
          das quadras, novos equipamentos e mais opções para os atletas e amantes do esporte. Acompanhe as novidades
          e aproveite as novas oportunidades para a prática esportiva!
        </SectionText>
      </Section>

      <Section id="contato">
        <SectionTitle>Entre em Contato</SectionTitle>
        <SectionText>Tem alguma dúvida ou quer participar dos nossos eventos? Entre em contato conosco!</SectionText>
        <CtaButton onClick={handleButtonClick}>Clique aqui</CtaButton>
      </Section>

      <MapSection id="mapa">
        <MapTitle>Encontre Quadras Próximas</MapTitle>
        <MapContainer center={[-22.9833, -42.8667]} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMap />
        </MapContainer>
        <ClearButton onClick={clearMarkers}>Limpar Marcadores</ClearButton>
      </MapSection>

      <Footer>
        <p>&copy;EsporteFY,Todos os direitos reservados.</p>
      </Footer>
    </div>
  );
};

export default LandingPage;
