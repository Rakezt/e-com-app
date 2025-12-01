// components/FilterSection.jsx
import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/filterContext';

const FilterSection = () => {
  const {
    filters: { text, category, color, price, minPrice, maxPrice },
    all_Products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  const uniqueData = (data, prop) => {
    const vals = data.map((d) => d[prop]);
    if (prop === 'colors') return ['all', ...new Set([].concat(...vals))];
    return ['all', ...new Set(vals)];
  };

  const categories = uniqueData(all_Products, 'category');
  const companies = uniqueData(all_Products, 'company');
  const colors = uniqueData(all_Products, 'colors');

  return (
    <Wrapper className='filter-card'>
      <div className='search'>
        <input
          type='text'
          name='text'
          placeholder='Search products...'
          value={text}
          onChange={updateFilterValue}
        />
      </div>

      <div className='section'>
        <h4>Category</h4>
        <div className='list'>
          {categories.map((c, i) => (
            <button
              key={i}
              type='button'
              name='category'
              value={c}
              className={c === category ? 'chip active' : 'chip'}
              onClick={updateFilterValue}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className='section'>
        <h4>Brand</h4>
        <select
          name='company'
          onChange={updateFilterValue}
          value={companies.includes('') ? companies[0] : companies[0]}
        >
          {companies.map((comp, i) => (
            <option key={i} value={comp}>
              {comp}
            </option>
          ))}
        </select>
      </div>

      <div className='section'>
        <h4>Colors</h4>
        <div className='colors'>
          {colors.map((c, i) => {
            if (c === 'all')
              return (
                <button
                  key={i}
                  name='color'
                  value='all'
                  className={`color-chip all ${
                    color === 'all' ? 'active' : ''
                  }`}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            return (
              <button
                key={i}
                name='color'
                value={c}
                className={`color-chip ${color === c ? 'active' : ''}`}
                style={{ background: c }}
                onClick={updateFilterValue}
                aria-label={c}
              >
                {color === c && <FaCheck className='check' />}
              </button>
            );
          })}
        </div>
      </div>

      <div className='section'>
        <h4>Price</h4>
        <p className='price-preview'>
          Price:{' '}
          <strong>
            {(price / 100).toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
            })}
          </strong>
        </p>
        <input
          type='range'
          min={minPrice}
          max={maxPrice}
          name='price'
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <button className='clear' onClick={clearFilters}>
        Clear Filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: sticky;
  top: 100px; /* sticks below header */
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: 0 18px 40px rgba(10, 10, 10, 0.06);

  .search input {
    width: 100%;
    border: 1px solid #eee;
    padding: 0.9rem 1rem;
    border-radius: 8px;
    font-size: 1.05rem;
  }

  .section {
    margin-top: 1.6rem;
  }

  h4 {
    margin: 0 0 0.8rem 0;
    font-size: 1.05rem;
    color: #222;
    font-weight: 700;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .chip {
    background: transparent;
    border: 1px solid #ddd;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: all 0.18s;
  }
  .chip.active {
    background: #111;
    color: #fff;
    border-color: #111;
  }

  select {
    width: 100%;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 1px solid #eee;
    font-size: 1rem;
    background: white;
  }

  .colors {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .color-chip {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.18s;
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
  }
  .color-chip.active {
    transform: scale(1.06);
    opacity: 1;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }
  .color-chip.all {
    width: auto;
    height: auto;
    padding: 0.35rem 0.6rem;
    border-radius: 999px;
    background: transparent;
    border: 1px solid #ddd;
    color: #333;
  }

  .price-preview {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 0.6rem;
  }

  input[type='range'] {
    width: 100%;
  }

  .clear {
    margin-top: 1.4rem;
    width: 100%;
    background: #111;
    color: #fff;
    padding: 0.85rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    transition: transform 0.12s;
  }
  .clear:hover {
    transform: translateY(-3px);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    position: relative;
    top: 0;
  }
`;

export default FilterSection;
