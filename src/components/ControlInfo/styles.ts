import styled from 'styled-components';

export const ControlContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1060px){
    flex-direction: column;
  }

`
export const ControlLef = styled.div`
  max-width: 35.5rem;
  width: 100%;
`

export const ControlTitle = styled.h2`
 color: ${props => props.theme.colors.primary};
  font-size: 4rem;
  padding-bottom: 2.5rem;
  font-weight: 600;
  line-height: 130%;

  @media screen and (max-width: 1310px){
    font-size: 3rem;
  }

  @media screen and (max-width: 350px){
    font-size: 2rem;
  }
`

export const ControlTitleSpan = styled(ControlTitle)`
  color: ${props => props.theme.colors.light};
`

export const ControlText = styled.p`
  color: ${props => props.theme.colors.grayLight};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 170%;

  @media screen and (max-width: 1310px){
    font-size: 1.2rem;
  }
`

export const ControlRight = styled.div`
  max-width: 30rem;
  width: 100%;
`

export const ControlImage = styled.img`
  width: 100%;
`


