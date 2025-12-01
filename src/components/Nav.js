import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenu, CgClose } from 'react-icons/cg';
import { useCartContext } from '../context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../styles/Button';

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: rgb(235, 143, 52);
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name='close-outline'] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: rgb(235, 143, 52);
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    /* ---------- MOBILE ONLY STYLES (UPDATED) ---------- */
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .navbar {
        position: relative;
      }

      .mobile-navbar-btn {
        display: inline-block;
        z-index: 1001;
        border: none;

        .mobile-nav-icon {
          font-size: 3.6rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* when navbar has .active, hide menu icon and show close icon */
      .active .mobile-nav-icon[name='menu-outline'] {
        display: none;
      }

      .active .close-outline {
        display: inline-block;
        font-size: 3.6rem;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: ${({ theme }) => theme.colors.black};
        z-index: 1002;
      }

      .navbar-lists {
        width: 80vw;
        max-width: 320px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s;
        z-index: 1001;

        .navbar-link {
          font-size: 2.2rem;
        }
      }

      /* overlay behind menu */
      .navbar::before {
        content: '';
        position: fixed;
        inset: 0;
        background: transparent;
        pointer-events: none;
        transition: background 0.3s ease;
        z-index: 1000;
      }

      .navbar.active::before {
        background: rgba(0, 0, 0, 0.55);
        pointer-events: auto;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      }

      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 3.6rem;
        }

        .cart-total--item {
          width: 2.8rem;
          height: 2.8rem;
          font-size: 1.4rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 1.8rem;
        padding: 0.8rem 1.6rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? 'navbar active' : 'navbar'}>
        <ul className='navbar-lists'>
          <li>
            <NavLink
              to='/'
              className='navbar-link '
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='navbar-link '
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className='navbar-link '
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className='navbar-link '
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          {isAuthenticated && <p>{user.nickname}</p>}

          {isAuthenticated ? (
            <li>
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className='user-logout'
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button
                onClick={() => loginWithRedirect()}
                className='user-login'
              >
                Log In
              </Button>
            </li>
          )}

          <li>
            <NavLink to='/cart' className='navbar-link cart-trolley--link'>
              <FiShoppingCart className='cart-trolley' />
              <span className='cart-total--item'> {total_item} </span>
            </NavLink>
          </li>
        </ul>

        <div className='mobile-navbar-btn'>
          <CgMenu
            name='menu-outline'
            className='mobile-nav-icon'
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name='close-outline'
            className='mobile-nav-icon close-outline'
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
