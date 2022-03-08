import { GamesGaleryScroll } from '../ScrollReveal';
import * as S from './styles';

export default function GameGallery() {
  return (
    <GamesGaleryScroll>
      <S.GameGalleryContainer>
        <S.GameImageContainer>
          <S.GameImage src="./img/ImageFarcry.png" />
        </S.GameImageContainer>
        <S.GameImageContainer>
          <S.GameImage src="./img/ImageForza.png" />
        </S.GameImageContainer>
        <S.GameImageContainer>
          <S.GameImage src="./img/ImageFifa.png" />
        </S.GameImageContainer>
        <S.GameImageContainer>
          <S.GameImage src="./img/ImageMinecraft.png" />
        </S.GameImageContainer>
      </S.GameGalleryContainer>
    </GamesGaleryScroll>
  );
}
