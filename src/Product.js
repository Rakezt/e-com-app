// Product.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from './Helper/FormatPrice';

const Product = ({ id, name, image, price, category }) => {
  return (
    <Card to={`/singleproduct/${id}`}>
      <figure>
        <img src={image} alt={name} />
        <figcaption className='badge'>{category}</figcaption>
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

const Card = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  figure {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    height: 420px;
    margin: 0;
    background: #fafafa;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.2, 0.9, 0.2, 1);
    will-change: transform;
  }

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
  }

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

  &:hover img {
    transform: scale(1.08);
  }
  &:hover .overlay {
    opacity: 1;
  }
  &:hover .meta {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default Product;
