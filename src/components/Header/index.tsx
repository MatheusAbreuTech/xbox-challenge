import * as S from './styles';
import { FaBars } from 'react-icons/fa';

interface Props {
  handleOpenSidebar: () => void;
}

export default function Header({ handleOpenSidebar }: Props) {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo src="img/logo-xbox.svg" />

      <S.HeaderIcon onClick={handleOpenSidebar}>
        <FaBars />
      </S.HeaderIcon>

      <S.HeaderMenu>
        <S.HeaderMenuItem>
          <S.HeaderMenuItemLink href="#">Visão geral</S.HeaderMenuItemLink>
        </S.HeaderMenuItem>
        <S.HeaderMenuItem>
          <S.HeaderMenuItemLink href="#">Jogos</S.HeaderMenuItemLink>
        </S.HeaderMenuItem>
        <S.HeaderMenuItem>
          <S.HeaderMenuItemLink href="#">Galeria</S.HeaderMenuItemLink>
        </S.HeaderMenuItem>
        <S.HeaderMenuItem>
          <S.HeaderMenuItemLink href="#">Unbox</S.HeaderMenuItemLink>
        </S.HeaderMenuItem>
      </S.HeaderMenu>

      <S.HeaderButton>Ver disponibilidade</S.HeaderButton>
    </S.HeaderContainer>
  );
}
