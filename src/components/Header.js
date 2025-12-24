import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

function Header() {
  return (
    <MainHeader>
      <NavLink to='/' className='logo'>
        <img src='/images/logo.png' alt='logo' />
      </NavLink>

      {/* https://r2.easyimg.io/pheet724x/login_logo.png */}
      <Nav />
    </MainHeader>
  );
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  .logo img {
    width: 50px;
    height: 50px;
    animation: spin 10s linear infinite;
    transform-origin: center;
    will-change: transform;
  }

  /* Optional: pause on hover (premium feel) */
  .logo img:hover {
    animation-play-state: paused;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Header;
