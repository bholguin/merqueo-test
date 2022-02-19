import { createSelector } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

const useProductSelectors = () => {
  const productSelector = createSelector(
    (state: RootStateOrAny) => state.products,
    (products: any) => products
  );

  return { productSelector };
};

export default useProductSelectors;
