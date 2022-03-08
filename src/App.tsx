import ControlInfo from './components/ControlInfo';
import Faq from './components/Faq';
import Footer from './components/Footer';
import GamesGalery from './components/GamesGalery';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoContainer from './components/InfoContainer';
import SideBar from './components/SideBar';

import GlobalStyle, { Container } from './styles/global';
import theme from './styles/themes';
import { ThemeProvider } from 'styled-components';

import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <SideBar handleOpenSidebar={handleOpenSidebar} isOpen={isOpen} />
        <Header handleOpenSidebar={handleOpenSidebar} />

        <Hero />

        <InfoContainer>
          <ControlInfo />
        </InfoContainer>
      </Container>

      <InfoContainer>
        <GamesGalery />
      </InfoContainer>

      <Container>
        <InfoContainer>
          <Faq />
        </InfoContainer>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
