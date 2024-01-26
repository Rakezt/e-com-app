import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalStorageItem = () => {
  let localUpdatedCart = localStorage.getItem("shoppingCart");
  // if (localUpdatedCart === null) {
  //   return [];
  // } else {
  //   return JSON.parse(localUpdatedCart);
  // }
  const parsedData = JSON.parse(localUpdatedCart);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  cart: getLocalStorageItem(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, activeColor, amount, product) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { id, activeColor, amount, product },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("shoppingCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
