import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/productsReducer';

const AppContext = createContext();
const API = 'https://e-com-app-be.onrender.com';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await axios.get(url);
      const products = await response.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try {
      const response = await axios.get(url);
      const singleProduct = await response.data;
      dispatch({ type: 'SET_SINGLE_DATA', payload: singleProduct });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      ({children})
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
