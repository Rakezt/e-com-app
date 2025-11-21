// components/ProductList.jsx
import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useFilterContext } from '../context/filterContext';

const ProductList = () => {
  const { filter_Products, grid_View } = useFilterContext();

  if (!filter_Products) return <div>Loading...</div>;
  return grid_View ? (
    <GridView products={filter_Products} />
  ) : (
    <ListView products={filter_Products} />
  );
};

export default ProductList;
