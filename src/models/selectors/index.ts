import { useSelector } from "react-redux";
import useProductSelectors from "./products";

const useSelectors = () => {
  return {
    useSelector,
    useProductSelectors,
  };
};

export default useSelectors;
