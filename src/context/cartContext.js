import { useContext, useReducer } from 'react';
import { createContext } from 'react';
import reducer from '../reducer/cartReducer';
import { useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

const API_BASE = 'https://e-com-app-be.onrender.com/api';

const getLocalStorageItem = () => {
  let localUpdatedCart = localStorage.getItem('shoppingCart');

  const parsedData = JSON.parse(localUpdatedCart);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  cart: getLocalStorageItem(),
  total_item: '',
  total_price: '',
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const token = localStorage.getItem('token');

  const loadUserCart = async () => {
    if (!token) return null;
    try {
      const res = await axios.get(`${API_BASE}/user/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const backendCart = res.data.cart;
      dispatch({ type: 'REPLACE_CART_FROM_BACKEND', payload: backendCart });
    } catch (error) {
      console.log('Add to cart failed', error);
    }
  };

  const addToCart = async (id, activeColor, amount, product) => {
    if (!token) {
      return dispatch({
        type: 'ADD_TO_CART',
        payload: { id, activeColor, amount, product },
      });
    }
    try {
      const res = await axios.post(
        `${API_BASE}/user/cart`,
        {
          productId: id,
          qty: amount,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const backendCart = res.data.cart;
      dispatch({ type: 'REPLACE_CART_FROM_BACKEND', payload: backendCart });
    } catch (error) {
      console.log('Add to cart failed', error);
    }
  };

  const removeItem = async (id) => {
    if (!token) {
      return dispatch({ type: 'REMOVE_ITEM', payload: id });
    }
    try {
      const res = await axios.delete(`${API_BASE}/user/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch({
        type: 'REPLACE_CART_FROM_BACKEND',
        payload: res.data.cart,
      });
    } catch (err) {
      console.error('Remove item failed', err);
    }
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const setIncrease = async (id) => {
    if (!token) {
      return dispatch({ type: 'SET_INCREMENT', payload: id });
    }
    try {
      const res = await axios.post(
        `${API_BASE}/user/cart/${id}`,
        { action: { type: 'increment' } },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch({
        type: 'REPLACE_CART_FROM_BACKEND',
        payload: res.data.cart,
      });
    } catch (err) {
      console.error('Increment failed', err);
    }
  };
  const setDecrease = async (id) => {
    if (!token) {
      return dispatch({ type: 'SET_DECREMENT', payload: id });
    }
    try {
      const res = await axios.post(
        `${API_BASE}/user/cart/${id}`,
        { action: { type: 'decrement' } },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch({
        type: 'REPLACE_CART_FROM_BACKEND',
        payload: res.data.cart,
      });
    } catch (err) {
      console.error('Decrement failed', err);
    }
  };
  const clearCartOnLogout = () => {
    dispatch({ type: 'LOGOUT_CLEAR_CART' });
  };

  useEffect(() => {
    dispatch({ type: 'CART_TOTAL_ITEM' });
    dispatch({ type: 'CART_TOTAL_PRICE' });
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
    }
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
        clearCartOnLogout,
        loadUserCart,
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
