import { TextControlScroll, ControlScroll } from '../ScrollReveal';
import * as S from './styles';

export default function ControlInfo() {
  return (
    <S.ControlContainer>
      <S.ControlLef>
        <TextControlScroll>
          <>
            <S.ControlTitle>
              Desempenho
              <S.ControlTitleSpan>aperfeiçoado</S.ControlTitleSpan>
            </S.ControlTitle>
            <S.ControlText>
              O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um
              favorito comum.
            </S.ControlText>
          </>
        </TextControlScroll>
      </S.ControlLef>

      <S.ControlRight>
        <ControlScroll>
          <S.ControlImage src="img/controle-xbox.png" />
        </ControlScroll>
      </S.ControlRight>
    </S.ControlContainer>
  );
}
