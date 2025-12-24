import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenu, CgClose } from 'react-icons/cg';
import { useCartContext } from '../context/cartContext';

import { Button } from '../styles/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { openLogin } from '../store/uiSlice';

const NavWrapper = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4rem;
    align-items: center;

    .navbar-link {
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;

      &:hover {
        color: rgb(235, 143, 52);
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      font-size: 3.2rem;
    }

    .cart-total--item {
      position: absolute;
      top: -20%;
      left: 70%;
      width: 2.4rem;
      height: 2.4rem;
      background: rgb(235, 143, 52);
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;
      font-size: 1.2rem;
    }
  }
  .menu-header {
    display: none;
  }

  /* ================= MOBILE ================= */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbar {
      position: relative;
    }

    .mobile-navbar-btn {
      display: block;
      z-index: 2000;

      .mobile-nav-icon {
        font-size: 3.6rem;
        color: #000;
      }
    }

    .active .close-outline {
      display: block;
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      font-size: 3.6rem;
      color: #fff;
      z-index: 2002;
    }

    /* 🔥 DRAWER */
    .navbar-lists {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.95);
      padding: 6rem 4rem;
      display: flex;
      flex-direction: column;
      gap: 2.6rem;
      align-items: flex-start;
      text-align: left;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.35s ease;
      z-index: 2001;
    }

    .navbar.active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
    .navbar.active .menu-header {
      display: block;
    }
    /* ======= BRAND HEADER (VANS / NIKE STYLE) ======= */
    .menu-header {
      margin-bottom: 3rem;
    }

    .menu-title {
      font-size: 3.8rem;
      font-weight: 900;
      letter-spacing: 0.25rem;
      color: #ffffff;
    }

    .menu-subtitle {
      margin-top: 0.6rem;
      font-size: 1.4rem;
      color: #aaaaaa;
      letter-spacing: 0.12rem;
    }

    .menu-divider {
      width: 60px;
      height: 3px;
      background: #ffffff;
      margin: 2.5rem 0;
    }

    /* ======= LINKS ======= */
    .navbar.active .navbar-link {
      color: #ffffff;
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: 0.18rem;
      position: relative;
      animation: fadeSlide 0.45s ease forwards;
    }

    .navbar.active .navbar-link:hover {
      color: rgb(235, 143, 52);
    }

    /* subtle underline hover */
    .navbar-link::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0;
      height: 2px;
      background: rgb(235, 143, 52);
      transition: width 0.3s ease;
    }

    .navbar-link:hover::after {
      width: 40px;
    }

    /* user actions */
    .user-login,
    .user-logout {
      margin-top: 2.5rem;
      font-size: 1.7rem;
      padding: 1rem 2.4rem;
    }

    @keyframes fadeSlide {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { total_item, clearCartOnLogout } = useCartContext();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    clearCartOnLogout();
    dispatch(logout());
    setMenuIcon(false);
  };

  return (
    <NavWrapper>
      <div className={menuIcon ? 'navbar active' : 'navbar'}>
        <ul className='navbar-lists'>
          {/* BRAND HEADER */}
          <div className='menu-header'>
            <div className='menu-title'>MENU</div>
            <div className='menu-subtitle'>Explore the collection</div>
            <div className='menu-divider' />
          </div>

          <li>
            <NavLink
              to='/'
              className='navbar-link'
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='navbar-link'
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className='navbar-link'
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className='navbar-link'
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>

          {isAuthenticated && (
            <p style={{ color: '#bbb', fontSize: '1.4rem', marginTop: '1rem' }}>
              {user?.firstname} {user?.lastname}
            </p>
          )}

          {isAuthenticated ? (
            <Button className='user-logout' onClick={handleLogout}>
              Log Out
            </Button>
          ) : (
            <Button
              className='user-login'
              onClick={() => dispatch(openLogin())}
            >
              Log In
            </Button>
          )}

          <NavLink to='/cart' className='navbar-link cart-trolley--link'>
            <FiShoppingCart className='cart-trolley' />
            <span className='cart-total--item'>{total_item}</span>
          </NavLink>
        </ul>

        <div className='mobile-navbar-btn'>
          <CgMenu
            className='mobile-nav-icon'
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            className='mobile-nav-icon close-outline'
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
