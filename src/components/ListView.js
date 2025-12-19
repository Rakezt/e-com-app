// components/ListView.jsx
import React from 'react';
import styled from 'styled-components';
import FormatPrice from '../Helper/FormatPrice';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((p) => {
        const { id, name, image, price, description } = p;
        const imgURL = `${image[0]?.url}?f_auto&q_auto`;
        return (
          <article className='list-card' key={id}>
            <figure>
              <img src={imgURL} alt={name} />
            </figure>
            <div className='info'>
              <h3>{name}</h3>
              <p className='price'>
                <FormatPrice price={price} />
              </p>
              <p className='desc'>{description?.slice(0, 200)}...</p>
              <NavLink to={`/singleproduct/${id}`}>
                <Button>Details</Button>
              </NavLink>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .list-card {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.6rem;
    padding: 1.6rem;
    border-radius: 10px;
    background: white;
    box-shadow: 0 12px 30px rgba(12, 12, 12, 0.04);
  }
  figure img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
  }
  .price {
    color: ${({ theme }) => theme.colors.helper};
    font-weight: 700;
    margin: 0.6rem 0;
  }
  .desc {
    color: #555;
    line-height: 1.6;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .list-card {
      grid-template-columns: 1fr;
    }
    figure img {
      height: 200px;
    }
  }
`;
export default ListView;
