import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo>
        <img src="img/logo-xbox.svg" alt="" />
      </S.HeaderLogo>

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
          <S.HeaderMenuItemLink href="#">unbox</S.HeaderMenuItemLink>
        </S.HeaderMenuItem>
      </S.HeaderMenu>

      <S.HeaderButton>Ver disponibilidade</S.HeaderButton>
    </S.HeaderContainer>
  );
}
