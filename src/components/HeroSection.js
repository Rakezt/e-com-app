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
            <p>
              Tear up the streets with YourSweetNightmare Skate Store — built
              for the outcasts, the misfits, and the ones who ride against the
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
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h2 {
      font-family: 'Fontdiner Swanky', serif;
      font-weight: 400;
      font-size: 4.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #000;
      text-shadow: 2px 2px rgb(235, 143, 52);
    }

    .intro-data {
      margin-bottom: 0;
      color: rgb(235, 143, 52);
      font-weight: bold;
      font-size: 3rem;
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
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: '';
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection;
