import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from './Helper/FormatPrice';

const Product = ({ id, name, image, price, category }) => {
  const [loaded, setLoaded] = useState(false);

  // Cloudinary auto-optimize
  const imgURL = `${image[0]?.url}?f_auto&q_auto`;

  return (
    <Card to={`/singleproduct/${id}`}>
      <figure>
        {/* Skeleton Loader */}
        {!loaded && <div className='skeleton'></div>}

        {/* Product Image */}
        <img
          src={imgURL}
          alt={name}
          loading='lazy'
          onLoad={() => setLoaded(true)}
          className={`product-img ${loaded ? 'loaded' : ''}`}
        />

        <figcaption className='badge'>{category}</figcaption>

        {/* Hover Overlay */}
        <div className='overlay'>
          <div className='meta'>
            <h4>{name}</h4>
            <p className='price'>{FormatPrice({ price })}</p>
            <span className='cta'>View →</span>
          </div>
        </div>
      </figure>
    </Card>
  );
};

// Styled Component
const Card = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  figure {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    height: 250px;
    margin: 0;
    background: #fafafa;
  }

  /* ============================
     SKELETON LOADER
  ============================ */
  .skeleton {
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 37%, #e0e0e0 63%);
    background-size: 400% 100%;
    animation: shimmer 1.4s ease-in-out infinite;
    z-index: 2;
  }

  @keyframes shimmer {
    0% {
      background-position: -400px 0;
    }
    100% {
      background-position: 400px 0;
    }
  }

  /* ============================
     MAIN IMAGE
  ============================ */
  .product-img {
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: opacity;
  }

  .product-img.loaded {
    opacity: 1;
    z-index: 3;
  }

  /* ============================
     CATEGORY BADGE
  ============================ */
  .badge {
    position: absolute;
    top: 18px;
    right: 18px;
    background: rgba(255, 255, 255, 0.92);
    color: #333;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.95rem;
    z-index: 4;
  }

  /* ============================
     HOVER OVERLAY
  ============================ */
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.6) 100%
    );
    opacity: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: opacity 0.45s ease;
  }

  .meta {
    padding: 2rem;
    width: 100%;
    transform: translateY(12px);
    transition: transform 0.45s ease, opacity 0.45s ease;
    opacity: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .price {
    color: #ffb766;
    font-weight: 700;
    font-size: 1rem;
  }

  .cta {
    font-weight: 700;
    color: #fff;
    opacity: 0.95;
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .meta {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover .product-img.loaded {
    transform: scale(1.08);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    figure {
      height: 220px; 

    .meta {
      padding: 1.2rem;
    }

    .badge {
      font-size: 0.8rem;
      padding: 0.3rem 0.6rem;
    }

    .price {
      font-size: 0.9rem;
    }
  }
`;

export default Product;
