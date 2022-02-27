import ControlInfo from './components/ControlInfo';
import Faq from './components/Faq';
import Footer from './components/Footer';
import GamesGalery from './components/GamesGalery';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoContainer from './components/InfoContainer';

import './styles/global.css';

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <InfoContainer>
          <Hero />
        </InfoContainer>

        <InfoContainer>
          <ControlInfo />
        </InfoContainer>
      </div>

      <InfoContainer>
        <GamesGalery />
      </InfoContainer>

      <div className="container">
        <InfoContainer>
          <Faq />
        </InfoContainer>
      </div>
      <Footer />
    </>
  );
}

export default App;
