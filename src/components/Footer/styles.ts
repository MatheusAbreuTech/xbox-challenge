import styled from 'styled-components';

export const FooterContainer = styled.footer``;

export const FooterOne = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: min(80vw, 1280px);
  margin: auto;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterOneLogo = styled.img`
  max-width: 100px;
  width: 100%;
`;

export const FooterOneRights = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterOneText = styled.p`
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterTwo = styled.div`
  background: #111;
`;

export const FooterTwoDiv = styled.div`
  padding: 1.4rem 0;
  width: min(80vw, 1280px);
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const FooterTwoAuthor = styled.p`
  color: ${(props) => props.theme.colors.gray};
`;

export const FooterTwoSocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 18px;
`;

export const FooterTwoLinks = styled.a`
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
`;
