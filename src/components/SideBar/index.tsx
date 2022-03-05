import React from 'react';

import * as S from './styles';

interface Props {
  handleOpenSidebar: () => void;
  isOpen: boolean;
}

export default function SideBar({ handleOpenSidebar, isOpen }: Props) {
  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.Icon onClick={handleOpenSidebar}>
        <S.CloseIcon />
      </S.Icon>

      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.SidebarItem>
            <S.SidebarItemLink>Visão geral</S.SidebarItemLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarItemLink>Jogos</S.SidebarItemLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarItemLink>Galeria</S.SidebarItemLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarItemLink>Unbox</S.SidebarItemLink>
          </S.SidebarItem>
        </S.SidebarMenu>

        <S.SidebarButton>Ver disponivilidade</S.SidebarButton>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
}
