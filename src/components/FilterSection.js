import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, minPrice, maxPrice },
    all_Products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  const uniqueData = (dataFromProducts, property) => {
    let data = dataFromProducts.map((item) => {
      return item[property];
    });
    if (property === "colors") {
      return (data = ["all", ...new Set([].concat(...data))]);
    }
    return (data = ["all", ...new Set(data)]);
  };

  const categoryOnlyData = uniqueData(all_Products, "category");
  const companyOnlyData = uniqueData(all_Products, "company");
  const colorOnlyData = uniqueData(all_Products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryOnlyData.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={item}
                  className={item === category ? "active" : ""}
                  onClick={updateFilterValue}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filter-company">
          <h3>Company</h3>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company-select"
              onClick={updateFilterValue}
            >
              {companyOnlyData.map((item, index) => {
                return (
                  <option key={index} name="company" value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="filter-colors colors">
          <h3>Colors</h3>
          <div className="filter-colors style">
            {colorOnlyData.map((item, index) => {
              if (item === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    name="color"
                    value={item}
                    className="color-all--style"
                    onClick={updateFilterValue}
                  >
                    <span className="all-color"> all</span>
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  name="color"
                  value={item}
                  className={item === color ? "btnStyle active" : "btnStyle"}
                  style={{ backgroundColor: item }}
                  onClick={updateFilterValue}
                >
                  {item === color ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filter-price">
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            name="price"
            onChange={updateFilterValue}
          />
        </div>
        <div className="filter-clear">
          <Button className="btn" onClick={clearFilters}>
            clear filters
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 12rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      border: rgb(235, 143, 52);
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: rgb(235, 143, 52);
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: rgb(235, 143, 52);
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .all-color {
    margin-down: 4rem;
    border: 1px solid balck;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter-price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: rgb(235, 143, 52);
    color: white;
  }
`;

export default FilterSection;
