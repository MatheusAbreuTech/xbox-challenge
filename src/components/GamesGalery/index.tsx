import { GamesGaleryScroll } from '../ScrollReveal';
import * as S from './styles';

export default function GameGallery() {
  return (
    <GamesGaleryScroll>
      <S.GameGalleryContainer>
        <S.GameImageContainer>
          <S.GameImage src="img/imageFarcry.png" />
        </S.GameImageContainer>
        <S.GameImageContainer>
          <S.GameImage src="img/imageForza.png" />
        </S.GameImageContainer>
        <S.GameImageContainer>
          <S.GameImage src="img/imageFifa.png" />
        </S.GameImageContainer>
        <S.GameImageContainer>
          <S.GameImage src="img/imageMinecraft.png" />
        </S.GameImageContainer>
      </S.GameGalleryContainer>
    </GamesGaleryScroll>
  );
}
