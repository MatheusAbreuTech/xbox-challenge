import { ThemeProvider } from 'styled-components';
import ControlInfo from './components/ControlInfo';
import Faq from './components/Faq';
import Footer from './components/Footer';
import GamesGalery from './components/GamesGalery';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoContainer from './components/InfoContainer';

import GlobalStyle, { Container } from './styles/global';
import theme from './styles/themes';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Container>
          <Header />

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
    </>
  );
}

export default App;
