import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

export const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 515px) {
    font-size: 2rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 29px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;

  @media screen and (max-width: 1100px) {
    height: 20rem;
  }
`;

export const Herogradient = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(134, 207, 9, 0.258984) 20.31%,
    rgba(155, 240, 11, 0.3) 23.53%,
    rgba(0, 219, 0, 0.3) 35.42%,
    rgba(0, 123, 0, 0.3) 40.63%,
    rgba(0, 132, 0, 0.3) 49.51%
  );
  background-repeat: no-repeat;
  opacity: 0.9;
  border: 1px solid ${(props) => props.theme.colors.light};
  filter: blur(250px);
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
`;
