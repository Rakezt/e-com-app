import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-data'>
            <p className='intro-data'>Welcome to</p>
            <h2>{name}</h2>
            <p className='title-design'>SkateBoard Store</p>
            <p>
              Tear up the streets with YourSweetNightmare SkateBoard — built for
              the outcasts, the misfits, and the ones who ride against the
              grain. Our decks don’t just roll; they riot. From cracked pavement
              to midnight sessions, we keep your wheels screaming and your grip
              locked. No rules. No limits. Just pure chaos on four wheels.
            </p>

            <NavLink to='/products'>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className='hero-section-image'>
            <figure>
              <img
                src='/images/hero.jpg'
                alt='hero-section'
                className='img-style'
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    width: 90%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h2 {
      font-family: 'New Rocker', system-ui;
      font-weight: 400;
      font-style: normal;
      font-size: clamp(2rem, 6vw, 4.5rem);
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #000;
      text-shadow: 2px 2px rgb(235, 143, 52);
      text-decoration: underline;
    }

    .intro-data {
      margin-bottom: 0;
      color: rgb(235, 143, 52);
      font-weight: bold;
      font-size: 3rem;
    }
    .title-design {
      color: #000;
      font-size: 2rem;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    box-radius: 0.5rem;

    &::after {
      content: '';
      width: 60%;
      height: 80%;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 0;

    .grid-two-column {
      grid-template-columns: 1fr !important;
      gap: 6rem;
    }

    .hero-section-data {
      text-align: center;

      h2 {
        text-align: center;
      }

      .intro-data {
        font-size: 2.2rem;
      }

      .title-design {
        font-size: 1.8rem;
      }
    }

    .hero-section-image {
      margin-top: 2rem;
    }

    figure::after {
      content: '';
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection;
