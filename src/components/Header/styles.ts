import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
`;

export const HeaderLogo = styled.div``;

export const HeaderIcon = styled.div`
  display: none;

  @media screen and (max-width: 1025px){
    display: block;
    /* position:absolute ;
    top:0 ;
    right: 0; */
    /* transform: translate(-100%, 100%); */
    font-size: 1.8rem ;
    cursor: pointer;
    color: #fff;
  }
`

export const HeaderMenu = styled.ul`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex: 1;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 1025px){
    display:none ;
  }
`;

export const HeaderMenuItem = styled.li`
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    background: ${props => props.theme.colors.primary};
    height: 2px;
    width: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    transition: 0.35s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    right: initial;
  }
`;

export const HeaderMenuItemLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

export const HeaderButton = styled.button`
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  background: ${props => props.theme.colors.primary};
  border: none;
  font-weight: bold;
  font-size: 1rem;
  line-height: 18px;
  color: ${props => props.theme.colors.dark};

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 1025px){
    display:none ;
  }
`;
