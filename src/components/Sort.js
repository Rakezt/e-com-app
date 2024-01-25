import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { grid_View, setGridView, setListView, filter_Products, sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_View ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_View ? "sort-btn" : "active sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-data">
        {" "}
        <p>
          {filter_Products.length}{" "}
          {filter_Products.length > 1 ? "Products" : "Product"} Available
        </p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection-style"
            onClick={sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Sort(a-z)</option>
            <option value="z-a">Sort(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding: 3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 1rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: rgb(235, 143, 52);
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort;
