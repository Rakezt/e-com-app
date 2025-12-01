const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, activeColor, amount, product } = action.payload;

    let existingProduct = state.cart.find(
      (item) => item.id === id + activeColor
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id + activeColor) {
          let newAmount = item.amount + amount;
          if (newAmount >= item.max) {
            newAmount = item.max;
          }
          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + activeColor,
        name: product.name,
        activeColor,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let increaseAmount = item.amount + 1;
        if (increaseAmount <= item.max) {
          return { ...item, amount: increaseAmount };
        }
        return item;
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedCart };
  }
  if (action.type === "SET_DECREMENT") {
    let updatedCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decreaseAmount = item.amount - 1;
        if (decreaseAmount >= 1) {
          return { ...item, amount: decreaseAmount };
        }
        return item;
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedCart };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedAmount = state.cart.reduce((acc, curr) => {
      let { amount } = curr;
      acc = acc + amount;
      return acc;
    }, 0);
    return { ...state, total_item: updatedAmount };
  }
  if (action.type === "CART_TOTAL_PRICE") {
    let updatedAmount = state.cart.reduce((acc, curr) => {
      let { price, amount } = curr;
      acc = acc + price * amount;
      return acc;
    }, 0);
    return { ...state, total_price: updatedAmount };
  }
  return state;
};

export default cartReducer;
