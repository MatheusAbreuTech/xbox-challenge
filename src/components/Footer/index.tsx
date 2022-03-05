import { IoLogoGithub } from 'react-icons/io';
import { ImLinkedin2 } from 'react-icons/im';

import * as S from './styles';

export default function Footer() {
  return (
    <>
      <S.FooterOne>
        <S.FooterOneLogo src="img/logo-xbox.svg" />

        <S.FooterOneRights>
          <S.FooterOneText>© Microsoft 2022</S.FooterOneText>
          <S.FooterOneText>Todos os direitos reservados</S.FooterOneText>
        </S.FooterOneRights>
      </S.FooterOne>

      <S.FooterTwo>
        <S.FooterTwoDiv>
          <S.FooterTwoAuthor>Developed by Matheus Abreu</S.FooterTwoAuthor>

          <S.FooterTwoSocialMedia>
            <S.FooterTwoLinks href="https://www.linkedin.com/in/MatheusAbreuTech" target="_blank">
              <ImLinkedin2 />
            </S.FooterTwoLinks>
            <S.FooterTwoLinks href="https://github.com/MatheusAbreuTech" target="_blank">
              <IoLogoGithub />
            </S.FooterTwoLinks>
          </S.FooterTwoSocialMedia>
        </S.FooterTwoDiv>
      </S.FooterTwo>
    </>
  );
}
