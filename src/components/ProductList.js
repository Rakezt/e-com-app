import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_Products, grid_View } = useFilterContext();

  if (grid_View === true) {
    return <GridView products={filter_Products} />;
  }
  if (grid_View === false) {
    return <ListView products={filter_Products} />;
  }
};

export default ProductList;
