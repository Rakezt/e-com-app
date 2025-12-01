// components/Sort.jsx
import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';

const Sort = () => {
  const { setGridView, setListView, grid_View, filter_Products, sorting } =
    useFilterContext();

  return (
    <Wrapper className='sort-bar'>
      <div className='left'>
        <div className='view-toggle'>
          <button
            className={grid_View ? 'pill active' : 'pill'}
            onClick={setGridView}
          >
            Grid
          </button>
          <button
            className={!grid_View ? 'pill active' : 'pill'}
            onClick={setListView}
          >
            List
          </button>
        </div>

        <div className='count'>
          {filter_Products.length}{' '}
          {filter_Products.length === 1 ? 'Product' : 'Products'}
        </div>
      </div>

      <div className='right'>
        <select name='sort' onChange={sorting} className='sort-select'>
          <option value='lowest'>Price (Lowest)</option>
          <option value='highest'>Price (Highest)</option>
          <option value='a-z'>Name (A - Z)</option>
          <option value='z-a'>Name (Z - A)</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 30px rgba(12, 12, 12, 0.04);

  .left {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
  .view-toggle {
    display: flex;
    gap: 0.6rem;
  }
  .pill {
    padding: 0.5rem 1rem;
    border-radius: 999px;
    border: 1px solid #ddd;
    background: transparent;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.14s;
  }
  .pill.active {
    background: #111;
    color: #fff;
    border-color: #111;
  }
  .count {
    color: #666;
    font-size: 0.95rem;
    margin-left: 0.6rem;
  }

  .sort-select {
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    border: 1px solid #eee;
    background: white;
    font-size: 0.95rem;
  }
`;
export default Sort;
