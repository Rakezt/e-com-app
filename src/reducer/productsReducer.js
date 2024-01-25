const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featuredProduct = action.payload.filter((item) => {
        return item.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featureProducts: featuredProduct,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
