import ControlInfo from './components/ControlInfo';
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
    </>
  );
}

export default App;
