import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='inner'>
        <h1 className='code'>404</h1>

        <h2 className='title'>UH OH! You're Lost.</h2>

        <p className='desc'>
          The page you're looking for doesn’t exist. But don’t worry — let’s get
          you back on track.
        </p>

        <NavLink to='/'>
          <Button className='home-btn'>Go Back Home</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url('/mnt/data/2bd7b435-4bf3-4755-9e2d-f3b93d3e2207.png');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  .inner {
    max-width: 700px;
    animation: fadeIn 0.8s ease-out both;
  }

  .code {
    font-size: 14rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -8px;
    margin: 0;
    color: #111;
    animation: float 3s ease-in-out infinite;
  }

  .title {
    font-size: 3.4rem;
    font-weight: 700;
    margin-top: 1rem;
    color: #222;
  }

  .desc {
    color: #444;
    max-width: 500px;
    margin: 1.8rem auto 3rem auto;
    font-size: 1.35rem;
    line-height: 1.6;
  }

  .home-btn {
    font-size: 1.3rem;
    padding: 1rem 2.8rem;
    border-radius: 50px;
    background: #111;
    color: #fff;

    &:hover {
      background: #eb8f34;
      transform: translateY(-3px);
      transition: all 0.2s ease;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .code {
      font-size: 8rem;
    }
    .title {
      font-size: 2.2rem;
    }
    .desc {
      font-size: 1.15rem;
    }
  }
`;

export default ErrorPage;
