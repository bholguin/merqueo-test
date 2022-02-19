import { combineReducers } from "redux";
import { useProductsReducers } from "./products";
const useReducers = () => {
  const { products } = useProductsReducers();
  return combineReducers({ products });
};

export default useReducers;
