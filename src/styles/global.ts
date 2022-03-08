import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #0c0c0c;
  font-family: 'Inter', sans-serif;
  color: #fff;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export const Container = styled.div`
  width: min(80vw, 1280px);
  margin: auto;
`;
