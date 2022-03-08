import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.dark};
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 4rem;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  list-style: none;
`;

export const SidebarItem = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SidebarItemLink = styled.a``;

export const SidebarButton = styled.button`
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.colors.dark};

  &:hover {
    opacity: 0.9;
  }
`;
