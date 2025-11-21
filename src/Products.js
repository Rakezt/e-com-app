// Products.jsx
import React from 'react';
import styled from 'styled-components';
import FilterSection from './components/FilterSection';
import Sort from './components/Sort';
import ProductList from './components/ProductList';

const Products = () => {
  return (
    <Wrapper>
      <div className='container grid grid-filter-column'>
        <aside className='left-col'>
          <FilterSection />
        </aside>

        <main className='right-col'>
          <Sort />
          <ProductList />
        </main>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 6rem 2rem;
    display: grid;
    grid-template-columns: 320px 1fr; /* fixed left filter, right content fluid */
    gap: 3.5rem;
    align-items: start;
  }

  /* small screens: filter becomes top block */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      grid-template-columns: 1fr;
      padding: 3rem 1.2rem;
    }
  }
`;

export default Products;
