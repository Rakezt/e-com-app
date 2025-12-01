const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      let priceArr = action.payload.map((price) => price.price);
      const maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_Products: [...action.payload],
        all_Products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case 'SET_GRID_VIEW':
      return {
        ...state,
        grid_View: true,
      };
    case 'SET_LIST_VIEW':
      return {
        ...state,
        grid_View: false,
      };
    case 'GET_SORT_VALUE':
      return {
        ...state,
        sorting_value: action.payload,
      };

    case 'SORTING_PRODUCTS':
      let newSortData;
      const { filter_Products } = state;
      let tempSortData = [...filter_Products];
      const sortProducts = (a, b) => {
        if (state.sorting_value === 'a-z') {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === 'z-a') {
          return b.name.localeCompare(a.name);
        }
        if (state.sorting_value === 'lowest') {
          return a.price - b.price;
        }
        if (state.sorting_value === 'highest') {
          return b.price - a.price;
        }
      };
      newSortData = tempSortData.sort(sortProducts);
      return {
        ...state,
        filter_Products: newSortData,
      };

    case 'UPDATE_FILTER_VALUE':
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case 'FILTER_PRODUCTS':
      let { all_Products } = state;
      let tempFilterProducts = [...all_Products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.name.toLowerCase().includes(text);
        });
      }
      if (category !== 'all') {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.category === category;
        });
      }
      if (company !== 'all') {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (color !== 'all') {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.colors.includes(color);
        });
      }
      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (item) => item.price === price
        );
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (item) => item.price <= price
        );
      }
      return {
        ...state,
        filter_Products: tempFilterProducts,
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          price: state.filters.maxPrice,
          minPrice: 0,
          maxPrice: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;

// case "SORTING_PRODUCTS":
//   let newSortData;
//   let tempSortData = [...action.payload];

//   if (state.sorting_value === "a-z") {
//     newSortData = tempSortData.sort((a, b) => a.name.localeCompare(b.name));
//   }
//   if (state.sorting_value === "z-a") {
//     newSortData = tempSortData.sort((a, b) => b.name.localeCompare(a.name));
//   }
//   if (state.sorting_value === "lowest") {
//     const sortProducts = (a, b) => {
//       return a.price - b.price;
//     };
//     newSortData = tempSortData.sort(sortProducts);
//   }
//   if (state.sorting_value === "highest") {
//     const sortProducts = (a, b) => {
//       return b.price - a.price;
//     };
//     newSortData = tempSortData.sort(sortProducts);
//   }

//   return {
//     ...state,
//     filter_Products: newSortData,
//   };
