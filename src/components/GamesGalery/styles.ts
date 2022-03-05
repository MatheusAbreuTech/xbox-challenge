import styled from 'styled-components';

export const GameGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media screen and (max-width: 1068px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 745px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const GameImageContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const GameImage = styled.img`
  width:100% ;
`
