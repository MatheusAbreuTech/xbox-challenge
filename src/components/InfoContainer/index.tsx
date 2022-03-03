import { ReactChild, ReactChildren } from 'react';
import * as S from './styles';

interface Props {
  children: ReactChild | ReactChildren;
}

export default function InfoContainer({ children }: Props) {
  return <S.InfosContainer>{children}</S.InfosContainer>;
}
