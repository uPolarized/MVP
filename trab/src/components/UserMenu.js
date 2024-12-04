import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from './context/authContext';

const UserMenuWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20px;
`;

const UserIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 10px 15px;
  }

  li button {
    border: none;
    background: none;
    cursor: pointer;
    color: #333;
    width: 100%;
    text-align: left;
  }
`;

const UserMenu = () => {
  const {  logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <UserMenuWrapper>
      <UserIcon onClick={toggleMenu}>👤</UserIcon>
      {isMenuOpen && (
        <MenuDropdown>
          <ul>
            <li>Perfil</li>
            <li>Configurações</li>
            <li>
              <button onClick={logout}>Sair</button>
            </li>
          </ul>
        </MenuDropdown>
      )}
    </UserMenuWrapper>
  );
};

export default UserMenu;
