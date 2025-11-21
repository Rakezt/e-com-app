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

  const PrevArrow = ({ onClick }) => (
    <button className='arrow-btn left' onClick={onClick}>
      ❮
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className='arrow-btn right' onClick={onClick}>
      ❯
    </button>
  );

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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Wrapper>
      <div className='content'>
        <p className='tagline'>WELCOME TO</p>
        <h1 className='brand'>{name}</h1>
        <h2 className='subtitle'>Skate. Destroy. Repeat.</h2>

        <p className='description'>
          Boards built for rebels — crafted to grind, shred, and dominate the
          streets. Zero rules. Zero limits. Pure skate culture.
        </p>

        <NavLink to='/products'>
          <Button className='cta-btn'>Shop Now</Button>
        </NavLink>
      </div>

      <div className='hero-slider'>
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <img src={img} alt='' />
            </div>
          ))}
        </Slider>
      </div>

      <div className='overlay'> </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  position: relative;
  z-index: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  .hero-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(60%);
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 5rem;
    max-width: 800px;
    color: white;
  }

  .tagline {
    font-size: 1.6rem;
    letter-spacing: 5px;
    color: #ff9f43;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .brand {
    font-family: 'New Rocker', system-ui;
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: 1;
    margin: 0;
    text-shadow: 3px 3px #ff9f43;
  }

  .subtitle {
    font-size: 2rem;
    margin: 1rem 0 2rem;
    color: grey;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .description {
    max-width: 500px;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #e4e4e4;
  }

  .cta-btn {
    padding: 1rem 2.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 50px;
    background: #ff9f43;
    color: #222;
    transition: 0.3s;

    &:hover {
      background: white;
      color: black;
      transform: scale(1.05);
    }
  }
  .arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: white;
    border: none;
    color: #111;
    font-size: 3rem;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Fade-in on hover */
  .hero-slider:hover .arrow-btn {
    opacity: 1;
  }

  /* Hover scale */
  .arrow-btn:hover {
    transform: translateY(-50%) scale(1.12);
    background: rgba(255, 159, 67, 0.8);
  }

  .arrow-btn.left {
    left: 20px;
  }

  .arrow-btn.right {
    right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 100vh;

    .content {
      padding: 2rem;
      text-align: center;
      max-width: 100%;
    }

    .description {
      margin: 1rem auto 2rem;
    }

    .brand {
      font-size: clamp(2.5rem, 10vw, 4rem);
    }

    .subtitle {
      font-size: 1.8rem;
    }

    img {
      filter: brightness(50%);
    }
    .arrow-btn {
      font-size: 2rem;
      width: 40px;
      height: 40px;
      opacity: 0.8;
    }

    .arrow-btn.left {
      left: 10px;
    }

    .arrow-btn.right {
      right: 10px;
    }
  }
`;

export default HeroSection;
