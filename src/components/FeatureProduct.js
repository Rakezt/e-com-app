// src/components/FeatureProduct.jsx
import React, { memo } from 'react';
import styled from 'styled-components';
import { useProductContext } from '../context/productContext';

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <Wrapper>
        <div className='container'>
          <h2 className='title'>CHECK NOW!</h2>
          <h3 className='subtitle'>Our Featured Categories</h3>

          <div className='vans-grid'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div className='vans-card skeleton' key={i}>
                <div className='img-skeleton shimmer' />
                <div className='label-skeleton shimmer' />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }

  const limitedProducts = featureProducts.slice(0, 6);

  return (
    <Wrapper>
      <div className='container'>
        <h2 className='title'>CHECK NOW!</h2>
        <h3 className='subtitle'>Our Featured Categories</h3>

        <div className='vans-grid'>
          {limitedProducts.map((item) => (
            <article className='vans-card' key={item.id}>
              <img src={item.image[0]?.url} alt={item.name} loading='lazy' />

              <div className='overlay'>
                <p className='category'>{item.category}</p>
                <p className='name'>{item.name}</p>
                <button className='shop-btn'>Shop Now</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors?.bg || '#f7f7f7'};

  .title {
    color: rgb(235, 143, 52);
    font-weight: 700;
    font-size: 2.8rem;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 3.2rem;
    font-weight: 900;
    margin-bottom: 3.5rem;
  }

  .vans-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.5rem;

    @media (max-width: ${({ theme }) => theme.media.tablet || '992px'}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      grid-template-columns: 1fr;
    }
  }

  .vans-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 1.8rem;
    box-shadow: 0px 14px 35px rgba(0, 0, 0, 0.12);
    transform: translateY(0px);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  .vans-card img {
    width: 100%;
    height: 430px;
    object-fit: cover;
    transition: transform 0.6s ease;
    display: block;
  }

  .vans-card:hover {
    transform: translateY(-8px);
    box-shadow: 0px 18px 45px rgba(0, 0, 0, 0.18);
  }

  .vans-card:hover img {
    transform: scale(1.08);
  }

  .overlay {
    position: absolute;
    inset: 0;
    padding: 2.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.55) 40%,
      transparent 100%
    );
    color: #fff;
  }

  .category {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffb36a;
    margin-bottom: 0.6rem;
  }

  .name {
    font-size: 2.1rem;
    font-weight: 700;
    margin-bottom: 1.4rem;
  }

  .shop-btn {
    align-self: flex-start;
    padding: 0.7rem 1.7rem;
    border-radius: 999px;
    border: none;
    outline: none;
    background: #ffffff;
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.25s ease;

    &:hover {
      background: #ff9f43;
      transform: translateY(-1px);
    }
  }

  /* Skeleton styles */
  .skeleton {
    box-shadow: none;
  }

  .img-skeleton {
    height: 430px;
    border-radius: 1.8rem;
    background: #e2e2e2;
  }

  .label-skeleton {
    height: 28px;
    width: 50%;
    margin: 1rem;
    border-radius: 999px;
    background: #e2e2e2;
  }

  .shimmer {
    background: linear-gradient(90deg, #e2e2e2 25%, #f5f5f5 50%, #e2e2e2 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .subtitle {
      font-size: 2.4rem;
    }

    .vans-card img,
    .img-skeleton {
      height: 320px;
    }

    .overlay {
      padding: 1.6rem;
    }

    .name {
      font-size: 1.8rem;
    }
  }
`;

export default memo(FeatureProduct);
