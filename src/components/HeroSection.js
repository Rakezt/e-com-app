// src/components/HeroSection.jsx
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { motion } from 'framer-motion';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroSection = ({ myData }) => {
  const { name } = myData;

  const images = [
    { src: '/images/hero.jpg', alt: 'Skateboarder performing a trick' },
    { src: '/images/board1.jpg', alt: 'Custom graphic skateboard deck' },
    { src: '/images/board2.jpg', alt: 'Close-up of wheels and trucks' },
    { src: '/images/board3.jpg', alt: 'Street skate spot at night' },
    { src: '/images/board4.jpg', alt: 'Skateboard lineup against wall' },
    { src: '/images/board5.jpg', alt: 'Skater grinding rail' },
    { src: '/images/board6.jpg', alt: 'Skate park bowl session' },
  ];

  return (
    <Wrapper>
      <div className='hero-slider'>
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          navigation
          effect='fade'
          loop
          speed={900}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img.src} loading='lazy' alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='overlay' />
      </div>

      <div className='content'>
        <motion.p
          className='tagline'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          WELCOME TO
        </motion.p>

        <motion.h1
          className='brand'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {name}
        </motion.h1>

        <motion.h2
          className='subtitle'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skate. Destroy. Repeat.
        </motion.h2>

        <motion.p
          className='description'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Boards built for rebels — crafted to grind, shred, and dominate the
          streets. Zero rules. Zero limits. Pure skate culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <NavLink to='/products'>
            <Button className='cta-btn'>Shop Now</Button>
          </NavLink>
        </motion.div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  z-index: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;

  .hero-slider {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hero-slider img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(60%);
  }

  .overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.55) 40%,
      rgba(0, 0, 0, 0.25) 80%
    );
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 5rem;
    max-width: 800px;
    color: white;
  }

  .tagline {
    font-size: 1.5rem;
    letter-spacing: 5px;
    color: #ff9f43;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .brand {
    font-family: 'New Rocker', system-ui;
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: 1;
    margin: 0;
    text-shadow: 3px 3px #ff9f43;
  }

  .subtitle {
    font-size: 2.2rem;
    margin: 1.2rem 0 2.3rem;
    color: #e0e0e0;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .description {
    max-width: 500px;
    font-size: 1.7rem;
    margin-bottom: 2.5rem;
    color: #e4e4e4;
  }

  .cta-btn {
    padding: 1rem 2.8rem;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 50px;
    background: #ff9f43;
    color: #222;
    transition: 0.3s ease;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.4);

    &:hover {
      background: #ffffff;
      color: #000;
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.55);
    }
  }

  /* Swiper navigation arrows styled like your old arrows */
  .swiper-button-next,
  .swiper-button-prev {
    color: #111;
    background: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    font-size: 2.2rem;
    box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.25s ease;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .hero-slider:hover .swiper-button-next,
  .hero-slider:hover .swiper-button-prev {
    opacity: 1;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.1);
    background: rgba(255, 159, 67, 0.95);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .content {
      padding: 3rem 2rem;
      text-align: center;
      max-width: 100%;
    }

    .description {
      margin: 1rem auto 2rem;
    }

    .brand {
      font-size: clamp(2.6rem, 9vw, 4rem);
    }

    .subtitle {
      font-size: 1.8rem;
    }

    .hero-slider img {
      filter: brightness(50%);
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 42px;
      height: 42px;
      opacity: 0.85;
    }
  }
`;

export default memo(HeroSection);
