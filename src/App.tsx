import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoContainer from './components/infoContainer';
import container from './styles/global.module.css';

function App() {
  return (
    <>
      <Header />
      <InfoContainer>
        <Hero />
      </InfoContainer>
    </>
  );
}

export default App;
