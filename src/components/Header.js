import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

function Header() {
  return (
    <MainHeader>
      <NavLink to='/'>
        <img src='/images/logo.png' alt=' alternate logo' width='60px' />
      </NavLink>
      {/* https://r2.easyimg.io/pheet724x/login_logo.png */}
      <Nav />
    </MainHeader>
  );
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export default Header;
