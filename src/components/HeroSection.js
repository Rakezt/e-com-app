import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import Slider from 'react-slick';

const HeroSection = ({ myData }) => {
  const { name } = myData;

  const images = [
    '/images/hero.jpg',
    '/images/board1.jpg',
    '/images/board2.jpg',
    '/images/board3.jpg',
    '/images/board4.jpg',
    '/images/board5.jpg',
    '/images/board6.jpg',
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
            <Slider {...settings} className='slider'>
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`slide-${index}`} className='img-style' />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 8rem 0;

  .slider {
    width: 100%;
    max-width: 600px;
  }

  .slider img {
    width: 80%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }

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
    padding: 4rem 0;

    .container {
      width: 100%;
      max-width: 100%;
      padding: 0 1rem;
      overflow: visible !important;
    }

    .grid {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .hero-section-data {
      text-align: center;

      h2 {
        font-size: clamp(2rem, 6vw, 3rem);
        word-wrap: break-word;
      }
    }

    .slider {
      width: 100% !important;
      max-width: 100% !important;
      overflow: hidden;
    }

    .slider img {
      width: 100% !important;
      height: 220px !important;
      object-fit: cover;
      border-radius: 10px;
      display: block;
    }

    .hero-section-image {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    figure::after {
      content: none;
    }
  }
`;
export default HeroSection;
