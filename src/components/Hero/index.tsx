import { HeroImgScroll, HeroTitleScroll } from '../ScrollReveal';
import * as S from './styles';

export default function Hero() {
  return (
    <S.HeroContainer>
      <HeroTitleScroll>
        <>
          <S.HeroTitle>Xbox series X</S.HeroTitle>
          <S.HeroText>Pedido antecipado</S.HeroText>
        </>
      </HeroTitleScroll>

      <S.HeroImageContainer>
        <S.Herogradient />
        <HeroImgScroll>
          <S.HeroImage src="img/xbox.svg" />
        </HeroImgScroll>
      </S.HeroImageContainer>
    </S.HeroContainer>
  );
}
